package services

import com.google.inject.ImplementedBy
import com.xjy.Helpers._
import play.api.Configuration
import play.api.libs.json._

import scala.concurrent.Future

/**
 * 理论上，这里只封装后端渲染部分对 reaf-print 服务器的 internal 接口的调用。
 */
@ImplementedBy(classOf[services.impl.PrintService])
trait PrintService {

  import PrintService._

  /**
   * 获取所有的商品类别数据。
   *
   * 这个接口基本不会抛出异常。
   *
   * @param returnEmpty 是否返回没有商品的类别。
   */
  def allCategories(returnEmpty: Boolean): Future[Seq[Category]]

  /**
   * 获取按需定制商品详情。
   */
  def customProductDetail: Future[Option[CustomProductDetail]]

  /**
   * 获取普通商品详情。
   *
   * @param id 商品id。
   * @return 商品详情，如果商品不存在，返回None。
   */
  def productDetail(id: Int): Future[Option[ProductDetail]]

}

object PrintService {

  /**
   * 文本框类型。
   */
  object TextFieldType extends Enumeration {
    type Type = Value

    /**
     * 普通文本框。
     */
    val TEXT = Value

    /**
     * 整数框。
     */
    val INT = Value

    /**
     * 浮点数框。
     */
    val FLOAT = Value

    /**
     * 显示用文字。
     */
    val LABEL = Value
  }

  /**
   * 广义文本框数据。
   *
   * @param `type` 文本框类型。
   * @param value LABEL 类型显示的值。
   * @param max 最大值，普通文本框为最大长度。
   * @param min 最小值，普通文本框为最小长度。
   * @param defaultValue 默认值。
   */
  final case class TextFieldItem(`type`: TextFieldType.Type,
                                 value: Option[String],
                                 max: Option[Float],
                                 min: Option[Float],
                                 defaultValue: Option[String]) {

    /**
     * 是否是显示用文本框。
     */
    def isLabel: Boolean = `type` == TextFieldType.LABEL

    /**
     * 显示用的 LABEL 类型的值。
     */
    def displayValue: String = value.getOrElse("")

    /**
     * 显示用的最大值。
     */
    def displayMax: String = max.map(_.toString).getOrElse("")

    /**
     * 显示用的最小值。
     */
    def displayMin: String = min.map(_.toString).getOrElse("")

    /**
     * 显示用的文本款类型。
     */
    def displayType: String = `type`.toString.toLowerCase

    /**
     * 显示用的默认值。
     */
    def displayDefault: String = defaultValue.getOrElse("")
  }

  /**
   * 商品规格维度类型。
   */
  object SheetItemType extends Enumeration {
    type Type = Value

    /**
     * 基础的按钮型维度。
     */
    val BUTTON = Value

    /**
     * 文本框型维度。
     */
    val TEXT_FIELD = Value
  }

  /**
   * 商品规格数据。
   *
   * @param name 规格名称。
   * @param values 取值列表。
   * @param `type` 类型。
   * @param fields 文本框列表。
   * @param isRequired 是否必填。
   */
  final case class SheetItem(name: String,
                             values: Seq[String],
                             `type`: SheetItemType.Type,
                             fields: Seq[TextFieldItem],
                             isRequired: Boolean) {

    /**
     * 是否是按钮型的规格维度。
     */
    def isButton: Boolean = `type` == SheetItemType.BUTTON

    /**
     * 显示用的是否必填的字符串。
     */
    def displayIsRequired: String = {
      if (isRequired) "true" else "false"
    }
  }

  /**
   * 商品价格数据。
   *
   * @param id 价格id。
   * @param spec 规格字符串。
   * @param price 单价，单位分。
   * @param minQuantity 最低制作数量。
   * @param imageKeys 图片七牛key序列。
   */
  final case class PriceItem(id: Int,
                             spec: String,
                             price: Int,
                             minQuantity: Int,
                             imageKeys: Seq[String])
                            (implicit config: Configuration) {

    /**
     * 图片七牛url序列。
     */
    def imageUrls: Seq[String] = imageKeys.map(k => getQiniuUrl(k))

    /**
     * 显示的时候，价格数据对应的 Json。
     */
    def displayValueJson: JsValue = Json.obj(
      "id" -> id, "price" -> price, "min_num" -> minQuantity, "image_keys" -> imageKeys
    )
  }

  /**
    * 商品描述信息。
    *
    * @param title html 标题。
    * @param keywords 关键字。
    * @param description 描述。
    */
  final case class ProductMeta(title: Option[String], keywords: Option[String], description: Option[String])

  /**
   * 商品详情数据。
   *
   * @param id 商品id。
   * @param title 商品标题。
   * @param categoryName 商品类别名称。
   * @param coverKeys 图片七牛key序列。
   * @param detail 商品详情。
   * @param sheetList 规格数据。
   * @param prices 价格数据。
   * @param quantityName 商品数量的提示字符串。
   */
  final case class ProductDetail(id: Int,
                                 title: String,
                                 categoryName: String,
                                 coverKeys: Seq[String],
                                 detail: String,
                                 sheetList: Seq[SheetItem],
                                 prices: Seq[PriceItem],
                                 quantityName: Option[String],
                                 meta: ProductMeta)
                                (implicit config: Configuration) {

    /**
     * 图片七牛url序列。
     */
    def coverUrls: Seq[String] = coverKeys.map(k => getQiniuUrl(k))

    /**
     * 显示用的商品价格数据（一个json表示的Map）。
     */
    def displayPriceMap: String = {
      val values = prices.map { price =>
        val withImage = if (price.imageKeys.isEmpty) {
          price.copy(imageKeys = coverKeys)
        } else price

        price.spec -> withImage.displayValueJson
      }

      JsObject(values).toString()
    }

    /**
     * 商品数量前的提示字符串。
     */
    def displayQuantityName: String = quantityName.getOrElse("款数")

    /**
      * 显示的网页标题。
      */
    def displayTitle: String = meta.title.getOrElse(title)

    /**
      * 描述信息的关键词。
      */
    def metaKeywords = meta.keywords.getOrElse("")

    /**
      * 描述信息的网页描述。
      */
    def metaDescription = meta.description.getOrElse("")
  }

}

/**
 * 带商品列表的印刷品分类数据。
 *
 * @param name 印刷分类名称。
 * @param description 印刷分类描述。
 * @param products 印刷商品序列。
 */
final case class Category(name: String, description: String, products: Seq[Product], hide_in_pc: Boolean) {

  /**
   * 获取分组的印刷商品，因为UI显示上是一组一组显示的。
   */
  def productGroups: Seq[Seq[Product]] = {
    products.grouped(PRODUCT_GROUP_LENGTH).toSeq
  }

  /**
   * 导航栏内商品列表是分列显示的，其中每一列最长长度是7。
   */
  private val PRODUCT_GROUP_LENGTH = 7
}

/**
 * 商品。
 *
 * @param id 商品id。
 * @param brief 商品简介。
 * @param coverUrl 封面图片url。
 */
final case class Product(id: Int, brief: String, coverUrl: String)

/**
 * 按需定制商品详情。
 *
 * @param categoryName 所属类别名字。
 * @param coverUrls 图片url序列。
 * @param detail 详情正文。
 */
final case class CustomProductDetail(categoryName: String, coverUrls: Seq[String], detail: String)
