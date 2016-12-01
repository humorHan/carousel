
package views.html.templates.faq

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object payment_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class payment extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates._

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("常见问题-支付类")/*4.18*/ {_display_(Seq[Any](format.raw/*4.20*/("""
	"""),format.raw/*5.2*/("""<link rel="stylesheet" type="text/css" href="/assets/css/sidebar.css">
	<link rel="stylesheet" type="text/css" href="/assets/css/help.css">
""")))}/*7.2*/ {_display_(Seq[Any](format.raw/*7.4*/("""
	"""),format.raw/*8.2*/("""<div class="box helper_box">
        <div class="container">
			<div class="helper_layout">
				<dl id="sidebar" class="sidebar">
				    <dt><a href="javascript:;">常见问题</a></dt>
				    <dd><a href="/faq/account">账号类</a></dd>
				    <dd><a href="/faq/order">订单类</a></dd>
				    <dd><a href="/faq/payment" class="sel">支付类</a></dd>
				    <dd><a href="/faq/distribution">配送类</a></dd>
				    <dd><a href="/faq/printing">印刷类</a></dd>
				    <dd><a href="/faq/other">其他类</a></dd>
				    <dt><a href="javascript:;">印刷知识</a></dt>
				    <dd><a href="/help/upload">上传文件须知</a></dd>
				    <dd><a href="/help/chromatism">关于色差</a></dd>
				    <dd><a href="/help/download">空白模板下载</a></dd>
				    <dt><a href="javascript:;">订购指南</a></dt>
				    <dd><a href="/help/process">订购流程</a></dd>
				    <dd><a href="/help/logistics">物流查询</a></dd>
				    <dt><a href="javascript:;">售后服务</a></dt>
				    <dd><a href="/help/returns">退换货说明</a></dd>
		    		<dt></dt>
				</dl>
				<div class="helper_right_container">
					<div class="helper_title"><span>支付类</span></div>
					<div class="content_container">
						<dl class="faq_item open">
							<dt class="faq_tit"><span>1.网站支持哪些支付方式？</span></dt>
							<dd class="faq_contain">
								<div>目前支持在线支付及货到付款。</div>
								<div>1、在线支付支持第三方支付（微信、支付宝），需先付款，再客服确定接单之后，商品才会投入生产。适用于所有客户。</div>
								<div>2、货到付款，收到货物后，可以选择在订单内支付（微信、支付宝），或者直接线下汇款或转账至酱印网企业账户（汇款完成后，需要拨打客服热线400-038-6898或者联系客服QQ2852519982通知客服人员）。适用于与酱印网有长期合作关系的老客户。</div>
								<ul class="faq_msg">
									<li>银行账户信息：</li>
									<li>户&nbsp;&nbsp;&nbsp;名：北京小酱油文化传媒有限公司</li>
									<li>开户行：中国建设银行北京上地支行</li>
									<li>账&nbsp;&nbsp;&nbsp;号：1105 0188 3600 0000 0349</li>
								</ul>
								<ul class="faq_msg">
									<li>银行账户信息：</li>
									<li>户&nbsp;&nbsp;&nbsp;名：北京兜子科技有限公司</li>
									<li>开户行：中国建设银行北京清华园支行</li>
									<li>账&nbsp;&nbsp;&nbsp;号：1100 1079 9000 5301 7010</li>
								</ul>
								<ul class="faq_msg">
									<li>支付宝账户信息：</li>
									<li>账号：zhifu@xiaojiangyou.com</li>
									<li>名称：北京兜子科技有限公司</li>
								</ul>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"> <span>2.可以货到付款吗？</span> </dt>
							<dd class="faq_contain">
								<div>可以，适用于与酱印网有长期合作关系的老客户。选择货到付款方式前请联系我们的客服人员，客服人员确认后才能使用。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"> <span>3.使用支付宝支付，怎么安装安全控件？</span> </dt>
							<dd class="faq_contain">
								<div>若未安装支付宝控件，浏览器会弹出相应提示信息，您点击安装提示信息，根据安装说明进行操作即可。</div>
								<div>安装完控件后，需要重启浏览器。如您一直无法安装成功，建议联系客服，我们将及时处理您的问题。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"> <span>4.安装了支付宝安全控件，页面还是无法支付？</span> </dt>
							<dd class="faq_contain">
								<div>考虑到安全控件的兼容性问题，请尽量使用ie、搜狗、360、chrome等主流浏览器；若安装了安全控件还是无法进行支付，建议联系客服，我们将及时处理您的问题。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"> <span>5.订单取消后怎么进行退款？</span> </dt>
							<dd class="faq_contain">
								<div>当您取消订单成功后，如已涉及支付，系统自动退款，订单金额将原路退回您的支付账户。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"> <span>6.如果需要退款，何时能到账？</span> </dt>
							<dd class="faq_contain">
								<div>系统自动退款时，具体到账时间以各退款路径实际到账为准。</div>
								<div>与酱印网客服沟通进行人工手动退款时，酱印网客服会在5个工作日安排退款。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"> <span>7.付款方式可以月结吗？</span> </dt>
							<dd class="faq_contain">
								<div>满足一定条件的客户可以申请月结，详情请咨询酱印网客服，客服热线：400-038-6898，客服QQ：2852519982。</div>
							</dd>
						</dl>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
""")))}/*102.2*/ {_display_(Seq[Any](format.raw/*102.4*/("""
	"""),format.raw/*103.2*/("""<script type="text/javascript">
		!function()
		"""),format.raw/*105.3*/("""{"""),format.raw/*105.4*/("""
			"""),format.raw/*106.4*/("""$(".helper_right_container").delegate("dt.faq_tit, .open .faq_close a","click",function(e)
				"""),format.raw/*107.5*/("""{"""),format.raw/*107.6*/("""
					"""),format.raw/*108.6*/("""var a=$(this).closest(".faq_item");
					a.hasClass("open")?a.removeClass("open").siblings("dl.faq_item").removeClass("open"):a.addClass("open").siblings("dl.faq_item").removeClass("open")
				"""),format.raw/*110.5*/("""}"""),format.raw/*110.6*/("""
			"""),format.raw/*111.4*/(""");
		"""),format.raw/*112.3*/("""}"""),format.raw/*112.4*/("""();
	</script>
""")))}),format.raw/*114.2*/("""
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
object payment extends payment_Scope0.payment
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:43 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/faq/payment.scala.html
                  HASH: 436827c6e3492a2d395e83b77db5d0414ab44dc2
                  MATRIX: 561->1|731->47|758->79|785->81|809->97|848->99|876->101|1034->242|1072->244|1100->246|4720->3848|4760->3850|4790->3852|4866->3900|4895->3901|4927->3905|5050->4000|5079->4001|5113->4007|5334->4200|5363->4201|5395->4205|5428->4210|5457->4211|5504->4227
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|30->7|30->7|31->8|125->102|125->102|126->103|128->105|128->105|129->106|130->107|130->107|131->108|133->110|133->110|134->111|135->112|135->112|137->114
                  -- GENERATED --
              */
          