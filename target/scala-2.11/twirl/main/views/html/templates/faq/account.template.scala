
package views.html.templates.faq

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object account_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class account extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates._

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("常见问题-账号类")/*4.18*/ {_display_(Seq[Any](format.raw/*4.20*/("""
	"""),format.raw/*5.2*/("""<link rel="stylesheet" type="text/css" href="/assets/css/sidebar.css">
	<link rel="stylesheet" type="text/css" href="/assets/css/help.css">
""")))}/*7.2*/ {_display_(Seq[Any](format.raw/*7.4*/("""
	"""),format.raw/*8.2*/("""<div class="box helper_box">
        <div class="container">
			<div class="helper_layout">
				<dl id="sidebar" class="sidebar">
				    <dt><a href="javascript:;">常见问题</a></dt>
				    <dd><a href="/faq/account" class="sel">账号类</a></dd>
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
				    <dd><a href="/help/process">订购流程</a></dd>
				    <dd><a href="/help/logistics">物流查询</a></dd>
				    <dt><a href="javascript:;">售后服务</a></dt>
				    <dd><a href="/help/returns">退换货说明</a></dd>
		    		<dt></dt>
				</dl>
				<div class="helper_right_container">
					<div class="helper_title"><span>账号类</span></div>
					<div class="content_container">
						<dl class="faq_item open">
							<dt class="faq_tit"><span>1.如何注册？</span></dt>
							<dd class="faq_contain">
								<div>在网站右上角点击<a href="/static/register.html">"注册"</a>，进入注册页面后，填写账号（即手机号）、密码后即可完成注册。</div>
								<div>网站普通用户目前仅支持手机号注册。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"> <span>2.如何登录？</span> </dt>
							<dd class="faq_contain">
								<div>网站支持两种登录方式：</div>
								<div>1、普通登录：手机号+密码登录；</div>
								<div>2、手机快捷登录：手机号+手机验证码登录；</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"> <span>3.手机注册接收不到验证码？</span> </dt>
							<dd class="faq_contain">
								<div>请检查是否作为垃圾短信阻拦了。</div>
								<div>若确认不是手机设置问题，重试后还是收不到验证码，请联系酱印网客服，客服热线：400-038-6898，客服QQ：2852519982。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"> <span>4.如何找回密码？</span> </dt>
							<dd class="faq_contain">
								<div>在网站右上角点击"登录"弹出登录对话框，点击“<a href="http://www.xiaojiangyou.com/index.html#findpassword/person" target="_blank">忘记密码</a>”，通过注册时使用的手机号找回密码。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"> <span>5.如何修改密码？</span> </dt>
							<dd class="faq_contain">
								<div>登录系统后，在<a href="/home" target="_blank">个人中心</a>左侧导航栏，选择“<a href="/" target="_blank">修改密码</a>”。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"> <span>6.如何修改绑定的手机？</span> </dt>
							<dd class="faq_contain">
								<div>登录系统后，在<a href="/home" target="_blank">个人中心</a>左侧导航栏，选择“<a href="/" target="_blank">换绑手机</a>”。</div>
							</dd>
						</dl>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
""")))}/*79.2*/ {_display_(Seq[Any](format.raw/*79.4*/("""
	"""),format.raw/*80.2*/("""<script type="text/javascript">
		!function()
		"""),format.raw/*82.3*/("""{"""),format.raw/*82.4*/("""
			"""),format.raw/*83.4*/("""$(".helper_right_container").delegate("dt.faq_tit, .open .faq_close a","click",function(e)
				"""),format.raw/*84.5*/("""{"""),format.raw/*84.6*/("""
					"""),format.raw/*85.6*/("""var a=$(this).closest(".faq_item");
					a.hasClass("open")?a.removeClass("open").siblings("dl.faq_item").removeClass("open"):a.addClass("open").siblings("dl.faq_item").removeClass("open")
				"""),format.raw/*87.5*/("""}"""),format.raw/*87.6*/("""
			"""),format.raw/*88.4*/(""");
		"""),format.raw/*89.3*/("""}"""),format.raw/*89.4*/("""();
	</script>
""")))}),format.raw/*91.2*/("""
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
object account extends account_Scope0.account
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:43 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/faq/account.scala.html
                  HASH: e8f45c168bea2cd688f80671adcef805bb359aa5
                  MATRIX: 561->1|731->47|758->79|785->81|809->97|848->99|876->101|1034->242|1072->244|1100->246|3903->3031|3942->3033|3971->3035|4046->3083|4074->3084|4105->3088|4227->3183|4255->3184|4288->3190|4508->3383|4536->3384|4567->3388|4599->3393|4627->3394|4673->3410
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|30->7|30->7|31->8|102->79|102->79|103->80|105->82|105->82|106->83|107->84|107->84|108->85|110->87|110->87|111->88|112->89|112->89|114->91
                  -- GENERATED --
              */
          