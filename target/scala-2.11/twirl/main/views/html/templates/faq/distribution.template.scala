
package views.html.templates.faq

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object distribution_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class distribution extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates._

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("常见问题-配送类")/*4.18*/ {_display_(Seq[Any](format.raw/*4.20*/("""
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
				    <dd><a href="/faq/distribution" class="sel">配送类</a></dd>
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
					<div class="helper_title"><span>配送类</span></div>
					<div class="content_container">			
						<dl class="faq_item open">
							<dt class="faq_tit"><span>1.配送方式及费用</span></dt>
							<dd class="faq_contain">
								<div>我们目前提供的配送方式有普通快递、专车配送。</div>
								<div>（1）<b>普通快递</b>：出货当天即寄出，预计2-5天送达。物流费用按照物流公司实际收取费用核算。</div>
								<div>（2）<b>专车配送</b>：专人专车送货上门（仅限北京部分地区），需提前与酱印网客服沟通，商议配送运费及配送时间。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>2.货期说明</span></dt>
							<dd class="faq_contain">
								<div>
									<p>① 货期即出货周期，是指订单从投入生产到生产完成的时间（不包含配送时间）。</p>
									<p>② 货期=生产天数+加工天数，不包含周日和法定节假日。</p>
									<p>③ 酱印网客服接单并确认印刷文件无误后，货物即开始投入生产。</p>
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>3.为何货物没准时送达？</span></dt>
							<dd class="faq_contain">
								<div>出货时间是遵守规范且准确的。如果货物送达延期了，通常是遇到了突发的产品质量或运输问题，我们将告知您，并尽快处理。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>4.喷绘海报可以帮我们贴吗？</span></dt>
							<dd class="faq_contain">
								<div>抱歉，暂时无法为您提供安装服务，请谅解！</div>
							</dd>
						</dl>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
""")))}/*69.2*/ {_display_(Seq[Any](format.raw/*69.4*/("""
	"""),format.raw/*70.2*/("""<script type="text/javascript">
		!function()
		"""),format.raw/*72.3*/("""{"""),format.raw/*72.4*/("""
			"""),format.raw/*73.4*/("""$(".helper_right_container").delegate("dt.faq_tit, .open .faq_close a","click",function(e)
				"""),format.raw/*74.5*/("""{"""),format.raw/*74.6*/("""
					"""),format.raw/*75.6*/("""var a=$(this).closest(".faq_item");
					a.hasClass("open")?a.removeClass("open").siblings("dl.faq_item").removeClass("open"):a.addClass("open").siblings("dl.faq_item").removeClass("open")
				"""),format.raw/*77.5*/("""}"""),format.raw/*77.6*/("""
			"""),format.raw/*78.4*/(""");
		"""),format.raw/*79.3*/("""}"""),format.raw/*79.4*/("""();
	</script>
""")))}),format.raw/*81.2*/("""
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
object distribution extends distribution_Scope0.distribution
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:43 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/faq/distribution.scala.html
                  HASH: e971cf3e2993f8280357aa3bbdb31f68ba254ca8
                  MATRIX: 571->1|741->47|768->79|795->81|819->97|858->99|886->101|1044->242|1082->244|1110->246|3361->2479|3400->2481|3429->2483|3504->2531|3532->2532|3563->2536|3685->2631|3713->2632|3746->2638|3966->2831|3994->2832|4025->2836|4057->2841|4085->2842|4131->2858
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|30->7|30->7|31->8|92->69|92->69|93->70|95->72|95->72|96->73|97->74|97->74|98->75|100->77|100->77|101->78|102->79|102->79|104->81
                  -- GENERATED --
              */
          