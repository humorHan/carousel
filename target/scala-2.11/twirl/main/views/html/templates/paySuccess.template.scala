
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object paySuccess_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class paySuccess extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.48*/("""

"""),_display_(/*3.2*/main("支付成功")/*3.14*/ {_display_(Seq[Any](format.raw/*3.16*/("""
    """),format.raw/*4.5*/("""<!-- css 们 -->
    <link rel="stylesheet" type="text/css" href="/assets/css/pay.css">
""")))}/*6.2*/ {_display_(Seq[Any](format.raw/*6.4*/("""
    """),format.raw/*7.5*/("""<!-- 网页主体 -->
    <div class="confirm-box box">
        <div class="container">
            <div class="pay-success-msg">
                <div class="pay-content">
                    <div class="remind">订单支付成功，我们将尽快为您发货！</div>
                    <div class="order-num">订单号：<span id="pay_success_id"></div>
                    <!-- <div class="order-sum">支付金额：<span id="pay_success_money"></span>元</div> -->
                </div>
            </div>
            <div class="pay-success-foot">
                <a class="jump-tip"><span id="count">5</span>秒后页面将自动跳转到订单详情页</a>
                <a class="link" id="see_order">查看订单详情</a>
                <span class="line"></span>
                <a class="link" href="/index.html">继续逛逛</a>
            </div>
        </div>
    </div>
""")))}/*25.2*/ {_display_(Seq[Any](format.raw/*25.4*/("""
    """),format.raw/*26.5*/("""<!-- js 们 -->
    <script src="/assets/js/pay.js"></script>
""")))}),format.raw/*28.2*/("""
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
object paySuccess extends paySuccess_Scope0.paySuccess
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/paySuccess.scala.html
                  HASH: cbeba1df4bfdac684c327676d409588324a7dcd5
                  MATRIX: 563->1|704->47|732->50|752->62|791->64|822->69|926->156|964->158|995->163|1795->945|1834->947|1866->952|1957->1013
                  LINES: 20->1|25->1|27->3|27->3|27->3|28->4|30->6|30->6|31->7|49->25|49->25|50->26|52->28
                  -- GENERATED --
              */
          