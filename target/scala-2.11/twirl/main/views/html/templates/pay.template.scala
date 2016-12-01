
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object pay_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class pay extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.48*/("""

"""),_display_(/*3.2*/main("订单支付")/*3.14*/ {_display_(Seq[Any](format.raw/*3.16*/("""
    """),format.raw/*4.5*/("""<!-- css 们 -->
    <link rel="stylesheet" type="text/css" href="/assets/css/pay.css">
""")))}/*6.2*/ {_display_(Seq[Any](format.raw/*6.4*/("""
    """),format.raw/*7.5*/("""<!-- 网页主体 -->
    <div class="confirm-box box">
        <div class="container">
            <div class="pay-order-msg">
                <div class="pay-right">
                    <div>应付金额：<span id="pay_money"></span>元</div>
                    <a id="pay_order_detail">查看订单详情></a>
                </div>
                <div class="remind">订单提交成功，请尽快支付您的订单!</div>
                <div class="center">
                    <div>订单号：<span id="pay_order_id"></span></div>
                    <div class="time">下单时间： <span id="pay_order_time"></span></div>
                </div>
            </div>
            <div class="form">
                <div class="form-title">
                    <span>支付方式</span>
                </div>
                <div class="form-body" id="change_pay_method">
                    <a class="pay-method selected" id="WECHAT_QR">微信支付</a>
                    <a class="pay-method" id="ALIPAY_QR">支付宝扫码支付</a>
                    <a class="pay-method" id="ALIPAY_PC">支付宝网页支付</a>
                </div>
            </div>
            <a id="online_pay" class="pay-btn">确认支付</a>
        </div>
    </div>
    
    <div class="modal-layer"></div>
    <div class="modal" style="margin-left:-200px;">
        <div class="modal-head">
            <a class="close"></a>
            <div>应付金额：<span id="qr_pay_money"></span>元</div>
        </div>
        <div class="modal-body" style="text-align: center;">
            <div class="divide-bar"></div>
            <div id="qrcode_pay"></div>
            <div class="tool-tip">使用<span id="qr_pay_method">微信</span>扫一扫，扫描二维码支付</div>
        </div>
    </div>
""")))}/*47.2*/ {_display_(Seq[Any](format.raw/*47.4*/("""
    """),format.raw/*48.5*/("""<!-- js 们 -->
    <script src="http://7bvan6.com2.z0.glb.qiniucdn.com/jquery.qrcode.min.js"></script>
    <script src="/assets/js/common.js"></script>
    <script src="/assets/js/pingpp-pc.js"></script>
    <script src="/assets/js/pay.js"></script>
""")))}),format.raw/*53.2*/("""
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
object pay extends pay_Scope0.pay
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/pay.scala.html
                  HASH: 6412c592ee8fa5915493ba2258a366640bca4b1b
                  MATRIX: 549->1|690->47|718->50|738->62|777->64|808->69|912->156|950->158|981->163|2623->1787|2662->1789|2694->1794|2974->2044
                  LINES: 20->1|25->1|27->3|27->3|27->3|28->4|30->6|30->6|31->7|71->47|71->47|72->48|77->53
                  -- GENERATED --
              */
          