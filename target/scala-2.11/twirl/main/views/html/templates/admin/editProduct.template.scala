
package views.html.templates.admin

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object editProduct_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class editProduct extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates._

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("编辑商品详情")/*4.16*/ {_display_(Seq[Any](format.raw/*4.18*/("""
"""),format.raw/*5.1*/("""<!-- css 们 -->
	<link rel="stylesheet" type="text/css" href="/assets/css/admin/edit-product.css">
""")))}/*7.2*/ {_display_(Seq[Any](format.raw/*7.4*/("""
	"""),format.raw/*8.2*/("""<div class="box">
	    <div class="container">
            <div id="edit_product"></div>
            <div class="form">
                <div class="form-title">
                    <span class="form-title-span">商品详情</span>
                </div>
                <div class="form-body">
                    <!-- BEGIN UEDITOR -->
                    <script type="text/plain" id="rich-editor" style="width:100%;height:800px;"></script>
                    <script type="text/javascript" src="/assets/editor/release/assets/vendor/js/base64.js"></script>
                    <script type="text/javascript" src="/assets/editor/release/assets/vendor/js/ueditor.js"></script>
                    <script type="text/javascript" src="/assets/editor/release/assets/themes/default/js/editor.js"></script>
                    <!-- END UEDITOR -->
                </div>
            </div>
            <div class="confirm-submit">
                <span><a href="javascript:;" id="update_product_detail">确定修改</a></span>
            </div>
        </div>
    </div>
    <script type="text/x-jquery-tmpl" id="product_template">
    	<p class="breadcrumb">当前位置：<a href="/">首页</a> > <a>编辑商品详情</a> > <a class="current" href="/product?id=$"""),format.raw/*30.108*/("""{"""),format.raw/*30.109*/("""id"""),format.raw/*30.111*/("""}"""),format.raw/*30.112*/("""">商品ID：$"""),format.raw/*30.120*/("""{"""),format.raw/*30.121*/("""id"""),format.raw/*30.123*/("""}"""),format.raw/*30.124*/("""</a></p>
    	<h2>商品名称：<a href="/product?id=$"""),format.raw/*31.37*/("""{"""),format.raw/*31.38*/("""id"""),format.raw/*31.40*/("""}"""),format.raw/*31.41*/("""" target="_blank" class="product-name">$"""),format.raw/*31.81*/("""{"""),format.raw/*31.82*/("""title"""),format.raw/*31.87*/("""}"""),format.raw/*31.88*/("""</a></h2>
    </script>
""")))}/*33.2*/ {_display_(Seq[Any](format.raw/*33.4*/("""
    """),format.raw/*34.5*/("""<script type="text/javascript" src="/assets/js/jquery.tmpl.min.js"></script>
    <script type="text/javascript" src='/assets/js/main.js'></script>
    <script type="text/javascript" src='/assets/js/admin/edit-product.js'></script>
""")))}),format.raw/*37.2*/("""
"""))
      }
    }
  }

  def render(pageParam:views.params.PageParam): play.twirl.api.HtmlFormat.Appendable = apply()(pageParam)

  def f:(() => (views.params.PageParam) => play.twirl.api.HtmlFormat.Appendable) = () => (pageParam) => apply()(pageParam)

  def ref: this.type = this

}


}

/**/
object editProduct extends editProduct_Scope0.editProduct
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/admin/editProduct.scala.html
                  HASH: cbd2303837fa0557d02ff5c0a440f0fc25c79155
                  MATRIX: 571->1|741->47|768->79|795->81|817->95|856->97|883->98|999->197|1037->199|1065->201|2314->1421|2344->1422|2375->1424|2405->1425|2442->1433|2472->1434|2503->1436|2533->1437|2606->1482|2635->1483|2665->1485|2694->1486|2762->1526|2791->1527|2824->1532|2853->1533|2896->1558|2935->1560|2967->1565|3229->1797
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|30->7|30->7|31->8|53->30|53->30|53->30|53->30|53->30|53->30|53->30|53->30|54->31|54->31|54->31|54->31|54->31|54->31|54->31|54->31|56->33|56->33|57->34|60->37
                  -- GENERATED --
              */
          