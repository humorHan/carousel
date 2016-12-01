
package views.html.templates.admin

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object editProductV2_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class editProductV2 extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

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
    <link rel="stylesheet" type="text/css" href="/assets/wang-editor/css/wangEditor.css">
""")))}/*8.2*/ {_display_(Seq[Any](format.raw/*8.4*/("""
    """),format.raw/*9.5*/("""<div class="box">
        <div class="container">
            <div id="edit_product"></div>
            <div class="form">
                <div class="form-title">
                    <span class="form-title-span">商品详情</span>
                </div>
                <div class="form-body">
                    <div id="editor-trigger" style="height:600px;">
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="confirm-submit">
                <span><a href="javascript:;" id="update_product_detail">确定修改</a></span>
            </div>
        </div>
    </div>
    <script type="text/x-jquery-tmpl" id="product_template">
        <p class="breadcrumb">当前位置：<a href="/">首页</a> > <a>编辑商品详情</a> > <a class="current" href="/product?id=$"""),format.raw/*28.111*/("""{"""),format.raw/*28.112*/("""id"""),format.raw/*28.114*/("""}"""),format.raw/*28.115*/("""">商品ID：$"""),format.raw/*28.123*/("""{"""),format.raw/*28.124*/("""id"""),format.raw/*28.126*/("""}"""),format.raw/*28.127*/("""</a></p>
        <h2>商品名称：<a href="/product?id=$"""),format.raw/*29.40*/("""{"""),format.raw/*29.41*/("""id"""),format.raw/*29.43*/("""}"""),format.raw/*29.44*/("""" target="_blank" class="product-name">$"""),format.raw/*29.84*/("""{"""),format.raw/*29.85*/("""title"""),format.raw/*29.90*/("""}"""),format.raw/*29.91*/("""</a></h2>
    </script>
""")))}/*31.2*/ {_display_(Seq[Any](format.raw/*31.4*/("""
    """),format.raw/*32.5*/("""<script type="text/javascript" src="/assets/js/jquery.tmpl.min.js"></script>
    <script type="text/javascript" src='/assets/js/main.js'></script>
    <script type="text/javascript" src="https://cdn.staticfile.org/Plupload/2.1.1/plupload.full.min.js"></script>
    <script type="text/javascript" src="https://cdn.staticfile.org/qiniu-js-sdk/1.0.14-beta/qiniu.min.js"></script>
    <script type="text/javascript" src="/assets/wang-editor/js/wangEditor.js"></script>
    <script type="text/javascript" src="/assets/wang-editor/js/plugin/anchor-menu.js"></script>
    <script type="text/javascript" src='/assets/js/admin/edit-product-wang-editor.js'></script>
""")))}))
      }
    }
  }

  def render(pageParam:views.params.PageParam): play.twirl.api.HtmlFormat.Appendable = apply()(pageParam)

  def f:(() => (views.params.PageParam) => play.twirl.api.HtmlFormat.Appendable) = () => (pageParam) => apply()(pageParam)

  def ref: this.type = this

}


}

/**/
object editProductV2 extends editProductV2_Scope0.editProductV2
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/admin/editProductV2.scala.html
                  HASH: 093c2878c2f68c9c9b8f44102f7977fda7efd29c
                  MATRIX: 575->1|745->47|773->81|801->84|823->98|862->100|890->102|1102->297|1140->299|1172->305|2023->1127|2053->1128|2084->1130|2114->1131|2151->1139|2181->1140|2212->1142|2242->1143|2319->1192|2348->1193|2378->1195|2407->1196|2475->1236|2504->1237|2537->1242|2566->1243|2611->1270|2650->1272|2683->1278
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|31->8|31->8|32->9|51->28|51->28|51->28|51->28|51->28|51->28|51->28|51->28|52->29|52->29|52->29|52->29|52->29|52->29|52->29|52->29|54->31|54->31|55->32
                  -- GENERATED --
              */
          