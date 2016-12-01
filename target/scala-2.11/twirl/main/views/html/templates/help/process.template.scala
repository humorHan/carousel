
package views.html.templates.help

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object process_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class process extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates._

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("订购流程")/*4.14*/ {_display_(Seq[Any](format.raw/*4.16*/("""
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
				    <dd><a href="/faq/payment">支付类</a></dd>
				    <dd><a href="/faq/distribution">配送类</a></dd>
				    <dd><a href="/faq/printing">印刷类</a></dd>
				    <dd><a href="/faq/other">其他类</a></dd>
				    <dt><a href="javascript:;">印刷知识</a></dt>
				    <dd><a href="/help/upload">上传文件须知</a></dd>
				    <dd><a href="/help/chromatism">关于色差</a></dd>
				    <dd><a href="/help/download">空白模板下载</a></dd>
				    <dt><a href="javascript:;">订购指南</a></dt>
				    <dd><a href="/help/process" class="sel">订购流程</a></dd>
				    <dd><a href="/help/logistics">物流查询</a></dd>
				    <dt><a href="javascript:;">售后服务</a></dt>
				    <dd><a href="/help/returns">退换货说明</a></dd>
		    		<dt></dt>
				</dl>
				<div class="helper_right_container">
					<div class="helper_title"><span>订购流程</span></div>
					<div class="content_container">
						<h1>一、选购商品</h1>
						<div>
							<p>1. 在网站右上角点击登录酱印网，在<a href="/" target="_blank">首页</a>中找到自己所要印刷的产品，查看产品信息。</p>
						</div>
		                <div class="img">
                        	<img src="http://7xsexg.com2.z0.glb.qiniucdn.com/xjy_yinshua_help_process_login.png" alt="酱印网">
                        	<img src="http://7xsexg.com2.z0.glb.qiniucdn.com/xjy_yinshua_help_process_all_product.png" alt="酱印网">
                        </div>
						<h2>1.1 标准类</h2>
						<div>
							<p>进入标准类产品页面，按步骤确定印刷属性及数量，点击“加入购物车”。</p>
						</div>
		                <div class="img">
                        	<img src="http://7xsexg.com2.z0.glb.qiniucdn.com/xjy_yinshua_help_process_product.png" alt="酱印网">
                        </div>
						<h2>1.2 按需定制类</h2>
						<div>
							<p>进入按需定制商品页面，按步骤填写所需信息，点击“加入购物车”。</p>
						</div>
		                <div class="img">
                        	<img src="http://7xsexg.com2.z0.glb.qiniucdn.com/xjy_yinshua_help_process_custom.png" alt="酱印网">
                        </div>
						<h1>二、提交订单</h1>
						<div>
							<p>进入购物车页面，选中想要立即购买的商品，点击“去结算”后进入订单确认页面，按步骤填写收货人、需求联系人等信息，选择支付方式，同时上传印刷文件，然后提交订单。</p>
						</div>
		                <div class="img">
		                	<img src="http://7xsexg.com2.z0.glb.qiniucdn.com/xjy_yinshua_help_process_cart.png" alt="酱印网">
                        	<img src="http://7xsexg.com2.z0.glb.qiniucdn.com/xjy_yinshua_help_process_cart_confirm.png" alt="酱印网">
                        </div>
						<h1>三、支付</h1>
						<div>
							<p>根据所选支付方式的不同，后续流程略有不同：</p>
						</div>
						<h2>3.1 在线支付</h2>
						<div>
							<p>若订单金额明确，则直接进入支付页面，选择微信支付或支付宝支付，完成支付；否则，需先等待酱印网客服确定订单金额。</p>
						</div>
                        <div>
	                        <p>酱印网客服确认接单后，商品进入生产阶段，等待制作完成并收取货物。</p>
	                    </div>
						<h2>3.2 货到付款</h2>
						<div>
							<p>酱印网客服确认接单（订单金额未定的订单需先由客服确定订单金额）后，商品进入生产阶段，等待制作完成并收取货物。</p>
						</div>
		                <div class="img">
                        	<img src="http://7xsexg.com2.z0.glb.qiniucdn.com/xjy_yinshua_help_process_shangjiayijiedan.png" alt="酱印网">
                        </div>
                        <h3>3.2.1 订单内支付</h3>
                        <div>
	                        <p>进入订单页面。点击“支付”按钮进入支付页面，选择微信支付或支付宝支付。</p>
	                    </div>
                        <h3>3.2.2 转账、汇款</h3>
                        <div>
	                        <p>线下直接向酱印网银行账户或者支付宝账户转账支付订单，支付完成后告知酱印网客服。</p>
	                    </div>
						<h1>四、订单完成</h1>
						<div>
							<p>如此，便成功完成了订单。</p>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
""")))}/*99.2*/ {_display_(Seq[Any](format.raw/*99.4*/("""
"""),format.raw/*100.1*/("""<!-- js 们 -->
""")))}),format.raw/*101.2*/("""
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
object process extends process_Scope0.process
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:43 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/help/process.scala.html
                  HASH: ed97c50ed99ac0052045d75a493cca07e36d4061
                  MATRIX: 562->1|732->47|759->79|786->81|806->93|845->95|873->97|1031->238|1069->240|1097->242|4824->3951|4863->3953|4892->3954|4938->3969
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|30->7|30->7|31->8|122->99|122->99|123->100|124->101
                  -- GENERATED --
              */
          