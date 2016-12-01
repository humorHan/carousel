package services.impl

import javax.inject.{Inject, Singleton}

import com.xjy.Helpers._
import com.xjy._
import play.api.Configuration
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json._
import play.api.libs.ws.WSClient
import services.PrintService._

import scala.concurrent.Future
import scala.util._

// 因为这个类在实例化的时候会初始化很多 Reads 所以这里给改成单例了。
@Singleton
class PrintService @Inject() (ws: WSClient)
                             (implicit config: Configuration) extends services.PrintService {

  def allCategories(returnEmpty: Boolean): Future[Seq[services.Category]] = {
    val all = ws.url(s"${config.internalPrintServiceUrl}/api/v2/products/all-categories").get().map {
      case response if response.status == 200 =>
        (response.json \ "categories").as[Seq[services.Category]]

      case _ => Nil
    }.recover { case ex: Throwable =>
      play.api.Logger.error("get all categories error", ex)
      Nil
    }

    if (returnEmpty) all else all.map { categories =>
      categories.filter(_.products.nonEmpty)
    }
  }

  private implicit val productReads: Reads[services.Product] = Reads { json =>
    Try {
      val coverUrl = (json \ "cover_keys").as[Seq[String]].headOption.map { key =>
        getQiniuUrl(key)
      } getOrElse ""

      services.Product(
        (json \ "id").as[Int], (json \ "brief").as[String], coverUrl
      )
    } match {
      case Success(value) => JsSuccess(value)
      case Failure(ex) => JsError(ex.getMessage)
    }
  }

  private implicit val categoryReads: Reads[services.Category] = Reads { json =>
    Try {
      services.Category(
        (json \ "name").as[String], (json \ "description").as[String],
        (json \ "products").as[Seq[services.Product]], (json \ "hide_in_pc").asOpt[Boolean].getOrElse(false)
      )
    } match {
      case Success(value) => JsSuccess(value)
      case Failure(ex) => JsError(ex.getMessage)
    }
  }

  def customProductDetail: Future[Option[services.CustomProductDetail]] = {
    ws.url(s"${config.internalPrintServiceUrl}/api/v2/products/custom-product-detail").get().map {
      case response if response.status == 200 =>
        if ((response.json \ "result").asOpt[Int].exists(_ != 0)) {
          play.api.Logger.error(s"get custom product detail not SUCCESS ${response.json}")
          None
        } else {
          val images = (response.json \ "cover_keys").as[Seq[String]].map { key =>
            getQiniuUrl(key)
          }

          Some(services.CustomProductDetail(
            (response.json \ "category_name").as[String], images, (response.json \ "detail").as[String]
          ))
        }

      case _ => None
    }.recover { case ex: Throwable =>
      play.api.Logger.error("get custom product detail error", ex)
      None
    }
  }

  def productDetail(id: Int): Future[Option[ProductDetail]] = {
    ws.url(s"${config.internalPrintServiceUrl}/api/v2/products/detail?id=$id").get().map {
      case response if response.status == 200 =>
        if ((response.json \ "result").asOpt[Int].exists(_ != 0)) {
          if (!(response.json \ "result").asOpt[Int].contains(5)) {
            // 商品不存在的情况就不打log了。
            play.api.Logger.error(s"get product detail not SUCCESS, id:$id ${response.json}")
          }

          None
        } else {
          Some(response.json.as[ProductDetail])
        }

      case _ => None
    }.recover { case ex: Throwable =>
      play.api.Logger.error(s"get product detail error,id:$id", ex)
      None
    }
  }

  private implicit val productDetailReads: Reads[ProductDetail] = Reads { json =>
    import PrintService._

    Try {
      ProductDetail(
        (json \ "id").as[Int], (json \ "title").as[String], (json \ "category_name").as[String],
        (json \ "cover_keys").as[Seq[String]], (json \ "detail").as[String],
        (json \ "sheet_list").as[Seq[SheetItem]], (json \ "prices").as[Seq[PriceItem]],
        (json \ "quantity_name").asOpt[String].filter(_.nonEmpty),
        (json \ "meta").asOpt[ProductMeta](productMetaReads).getOrElse(ProductMeta(None, None, None))
      )
    } match {
      case Success(value) => JsSuccess(value)
      case Failure(ex) => JsError(ex.getMessage)
    }
  }

  private implicit val priceItemReads: Reads[PriceItem] = Reads { json =>
    Try {
      PriceItem(
        (json \ "id").as[Int], (json \ "spec").as[String], (json \ "price").as[Int],
        (json \ "min_quantity").as[Int], (json \ "image_keys").as[Seq[String]]
      )
    } match {
      case Success(value) => JsSuccess(value)
      case Failure(ex) => JsError(ex.getMessage)
    }
  }

}

object PrintService {

  private implicit val textFieldTypeReads: Reads[TextFieldType.Type] = Reads { json =>
    Try(TextFieldType.withName(json.as[String])) match {
      case Success(value) => JsSuccess(value)
      case Failure(ex) => JsError(ex.getMessage)
    }
  }

  private implicit val textFieldItemReads: Reads[TextFieldItem] = Reads { json =>
    Try {
      TextFieldItem(
        (json \ "type").as[TextFieldType.Type], (json \ "value").asOpt[String],
        (json \ "max").asOpt[Float], (json \ "min").asOpt[Float], (json \ "default_value").asOpt[String]
      )
    } match {
      case Success(value) => JsSuccess(value)
      case Failure(ex) => JsError(ex.getMessage)
    }
  }

  private implicit val sheetItemTypeReads: Reads[SheetItemType.Type] = Reads { json =>
    Try(SheetItemType.withName(json.as[String])) match {
      case Success(value) => JsSuccess(value)
      case Failure(ex) => JsError(ex.getMessage)
    }
  }

  private implicit val sheetItemReads: Reads[SheetItem] = Reads { json =>
    Try {
      SheetItem(
        (json \ "name").as[String], (json \ "values").asOpt[Seq[String]].getOrElse(Nil),
        (json \ "type").as[SheetItemType.Type], (json \ "fields").asOpt[Seq[TextFieldItem]].getOrElse(Nil),
        (json \ "is_required").asOpt[Boolean].getOrElse(false)
      )
    } match {
      case Success(value) => JsSuccess(value)
      case Failure(ex) => JsError(ex.getMessage)
    }
  }

  private implicit val productMetaReads: Reads[ProductMeta] = Reads { json =>
    Try {
      ProductMeta(
        (json \ "title").asOpt[String],
        (json \ "keywords").asOpt[String],
        (json \ "description").asOpt[String]
      )
    } match {
      case Success(value) => JsSuccess(value)
      case Failure(ex) => JsError(ex.getMessage)
    }
  }

}
