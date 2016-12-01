
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object product_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class product extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template2[services.PrintService.ProductDetail,views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(product: services.PrintService.ProductDetail)(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.92*/("""

"""),_display_(/*3.2*/main(product.displayTitle, keywords = product.metaKeywords, description = product.metaDescription)/*3.100*/ {_display_(Seq[Any](format.raw/*3.102*/("""
    """),format.raw/*4.5*/("""<!-- css 们 -->
    <link rel="stylesheet" type="text/css" href="/assets/css/product.css">
""")))}/*6.2*/ {_display_(Seq[Any](format.raw/*6.4*/("""
    """),format.raw/*7.5*/("""<!-- 网页主体 -->
    <div class="box">
        <div id="error_tip" class="error-tip"></div>
        <div class="container">
            <p class="breadcrumb">当前位置：<a href="/">首页</a> > <a>"""),_display_(/*11.65*/product/*11.72*/.categoryName),format.raw/*11.85*/("""</a> >
                <a class="current" href="/product?id="""),_display_(/*12.55*/product/*12.62*/.id),format.raw/*12.65*/("""">"""),_display_(/*12.68*/product/*12.75*/.title),format.raw/*12.81*/("""</a>
            </p>
            <div class="product-list">
                <div class="image-zoom">
                    <div id="image_show" class="image-zoom-show">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAA
       AACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                        <span class="zoom-area"></span>
                    </div>
                    <div id="image_big">
                        <img src="">
                    </div>
                    <div class="image-zoom-thumb">
                        <ul id="imageList" class="image-zoom-list"></ul>
                    </div>
                </div>
                <div class="product-right-side">
                    <a href="/product/custom" class="on-demand" title="按需定制"></a>
                    <a href="/faq/account" class="q-a" title="常见问题"></a>
                </div>
                <div class="product-list-item">
                    <p class="product-name" id="product_name">"""),_display_(/*33.64*/product/*33.71*/.title),format.raw/*33.77*/("""</p>
                    <p class="product-price">￥<span id="product_price"></span></p>
                    <div class="cut-off"></div>
                    <div class="product-body">
                        """),_display_(/*37.26*/for(sheetItem <- product.sheetList) yield /*37.61*/ {_display_(Seq[Any](format.raw/*37.63*/("""
                            """),_display_(/*38.30*/if(sheetItem.isButton)/*38.52*/ {_display_(Seq[Any](format.raw/*38.54*/("""
                                """),format.raw/*39.33*/("""<div class="product-item product-type">
                                    <span class="attr">"""),_display_(/*40.57*/sheetItem/*40.66*/.name),format.raw/*40.71*/("""：</span>
                                    <span class="vals">
                                        """),_display_(/*42.42*/for(value <- sheetItem.values) yield /*42.72*/ {_display_(Seq[Any](format.raw/*42.74*/("""
                                            """),format.raw/*43.45*/("""<a class="val" value=""""),_display_(/*43.68*/value),format.raw/*43.73*/("""">"""),_display_(/*43.76*/value),format.raw/*43.81*/("""</a>
                                        """)))}),format.raw/*44.42*/("""
                                    """),format.raw/*45.37*/("""</span>
                                </div>
                            """)))}/*47.31*/else/*47.36*/{_display_(Seq[Any](format.raw/*47.37*/("""
                                """),format.raw/*48.33*/("""<div class="product-item product-custom" data-need=""""),_display_(/*48.86*/sheetItem/*48.95*/.displayIsRequired),format.raw/*48.113*/("""">
                                    <span class="attr" >"""),_display_(/*49.58*/sheetItem/*49.67*/.name),format.raw/*49.72*/("""：</span>
                                    <div class="customs ok">
                                        <div class="custom-item">自定义：
                                            """),_display_(/*52.46*/for(textField <- sheetItem.fields) yield /*52.80*/ {_display_(Seq[Any](format.raw/*52.82*/("""
                                                """),_display_(/*53.50*/if(textField.isLabel)/*53.71*/ {_display_(Seq[Any](format.raw/*53.73*/("""
                                                    """),format.raw/*54.53*/("""<span class="tag">"""),_display_(/*54.72*/textField/*54.81*/.displayValue),format.raw/*54.94*/("""</span>
                                                """)))}/*55.51*/else/*55.56*/{_display_(Seq[Any](format.raw/*55.57*/("""
                                                    """),format.raw/*56.53*/("""<input class="custom-input" data-max=""""),_display_(/*56.92*/textField/*56.101*/.displayMax),format.raw/*56.112*/("""" data-min=""""),_display_(/*56.125*/textField/*56.134*/.displayMin),format.raw/*56.145*/("""" data-type=""""),_display_(/*56.159*/textField/*56.168*/.displayType),format.raw/*56.180*/("""" data-value=""""),_display_(/*56.195*/textField/*56.204*/.displayDefault),format.raw/*56.219*/("""" value=""""),_display_(/*56.229*/textField/*56.238*/.displayDefault),format.raw/*56.253*/("""">
                                                """)))}),format.raw/*57.50*/("""
                                            """)))}),format.raw/*58.46*/("""
                                            """),format.raw/*59.45*/("""<a class="confirm-btn">OK</a>
                                        </div>
                                    </div>
                                </div>
                            """)))}),format.raw/*63.30*/("""
                        """)))}),format.raw/*64.26*/("""
                        """),format.raw/*65.25*/("""<div class="product-type">
                            <span class="attr">"""),_display_(/*66.49*/product/*66.56*/.displayQuantityName),format.raw/*66.76*/("""：</span>
                            <span class="vals">
                                <div class="add-num">
                                    <span class="minus disabled">-</span>
                                    <input id="product_num" max-num="100000" class="value">
                                    <span class="plus">+</span>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div class="cut-off"></div>
                    <div class="product-foot">
                    <a id="add_to_cart">+加入购物车</a>
                </div>
                </div>
            </div>
            <div class="product-detail">
                <div class="product-detail-recommend">
                    <p class="product-detail-head">热销商品</p>
                    <!-- 热销商品列表 -->
                    <ul class="product-recommend-list" id="recommd_lists"></ul>
                </div>
                <div class="product-detail-content">
                    <p class="product-detail-head">
                        商品介绍<span></span>
                    </p>
                    <div id="product_details">
                        """),_display_(/*93.26*/Html(product.detail)),format.raw/*93.46*/("""
                    """),format.raw/*94.21*/("""</div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-layer"></div>
    <div class="modal" id="add_cart">
        <div class="modal-head"><a class="close"></a></div>
        <div class="modal-body">
            <div class="tip">
                <div class="message success">成功加入购物车</div>
            </div>
        </div>
        <div class="modal-foot"><a class="btn right" href="/cart">去购物车结算></a><a class="btn left no-stay"><继续订购</a></div>
    </div>
    <div class="modal" id="no_product">
        <div class="modal-head"></div>
        <div class="modal-body">
            <div class="tip">
                <div class="message sad">找不到该商品</div>
            </div>
        </div>
        <div class="modal-foot"><a class="btn right">好的</a><a class="btn left" href="/">去首页看看</a></div>
    </div>
    <div class="modal" id="no_confirm">
        <div class="modal-head"><a class="close"></a></div>
        <div class="modal-head"></div>
        <div class="modal-body">
            <div class="tip">
                <div class="message sad">您还有属性未经确认，请点击OK确认后再提交!</div>
            </div>
        </div>
        <div class="modal-foot"><a class="btn right no-stay">好的</a><a class="btn left" href="/">去首页看看</a></div>
    </div>
""")))}/*128.2*/ {_display_(Seq[Any](format.raw/*128.4*/("""
    """),format.raw/*129.5*/("""<script>
    var productMap = """),_display_(/*130.23*/Html(product.displayPriceMap)),format.raw/*130.52*/(""";
    </script>
    <script src="/assets/js/common.js"></script>
    <script src="/assets/js/product.js"></script>
""")))}),format.raw/*134.2*/("""
"""))
      }
    }
  }

  def render(product:services.PrintService.ProductDetail,pageParam:views.params.PageParam): play.twirl.api.HtmlFormat.Appendable = apply(product)(pageParam)

  def f:((services.PrintService.ProductDetail) => (views.params.PageParam) => play.twirl.api.HtmlFormat.Appendable) = (product) => (pageParam) => apply(product)(pageParam)

  def ref: this.type = this

}


}

/**/
object product extends product_Scope0.product
              /*
                  -- GENERATED --
                  DATE: Mon Nov 28 11:25:45 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/product.scala.html
                  HASH: 1d3188d7e71c7c7b0061533ffdd6888e199aa701
                  MATRIX: 593->1|778->91|806->94|913->192|953->194|984->199|1092->290|1130->292|1161->297|1373->482|1389->489|1423->502|1511->563|1527->570|1551->573|1581->576|1597->583|1624->589|2638->1576|2654->1583|2681->1589|2916->1797|2967->1832|3007->1834|3064->1864|3095->1886|3135->1888|3196->1921|3319->2017|3337->2026|3363->2031|3496->2137|3542->2167|3582->2169|3655->2214|3705->2237|3731->2242|3761->2245|3787->2250|3864->2296|3929->2333|4024->2410|4037->2415|4076->2416|4137->2449|4217->2502|4235->2511|4275->2529|4362->2589|4380->2598|4406->2603|4618->2788|4668->2822|4708->2824|4785->2874|4815->2895|4855->2897|4936->2950|4982->2969|5000->2978|5034->2991|5110->3049|5123->3054|5162->3055|5243->3108|5309->3147|5328->3156|5361->3167|5402->3180|5421->3189|5454->3200|5496->3214|5515->3223|5549->3235|5592->3250|5611->3259|5648->3274|5686->3284|5705->3293|5742->3308|5825->3360|5902->3406|5975->3451|6194->3639|6251->3665|6304->3690|6406->3765|6422->3772|6463->3792|7714->5016|7755->5036|7804->5057|9095->6329|9135->6331|9168->6336|9227->6367|9278->6396|9425->6512
                  LINES: 20->1|25->1|27->3|27->3|27->3|28->4|30->6|30->6|31->7|35->11|35->11|35->11|36->12|36->12|36->12|36->12|36->12|36->12|57->33|57->33|57->33|61->37|61->37|61->37|62->38|62->38|62->38|63->39|64->40|64->40|64->40|66->42|66->42|66->42|67->43|67->43|67->43|67->43|67->43|68->44|69->45|71->47|71->47|71->47|72->48|72->48|72->48|72->48|73->49|73->49|73->49|76->52|76->52|76->52|77->53|77->53|77->53|78->54|78->54|78->54|78->54|79->55|79->55|79->55|80->56|80->56|80->56|80->56|80->56|80->56|80->56|80->56|80->56|80->56|80->56|80->56|80->56|80->56|80->56|80->56|81->57|82->58|83->59|87->63|88->64|89->65|90->66|90->66|90->66|117->93|117->93|118->94|152->128|152->128|153->129|154->130|154->130|158->134
                  -- GENERATED --
              */
          