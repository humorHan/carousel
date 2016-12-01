
package views.html.templates.faq

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object other_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class other extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates._

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("常见问题-其他类")/*4.18*/ {_display_(Seq[Any](format.raw/*4.20*/("""
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
				    <dd><a href="/faq/other" class="sel">其他类</a></dd>
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
					<div class="helper_title"><span>其他类</span></div>
					<div class="content_container">
						<dl class="faq_item open">
							<dt class="faq_tit"><span>1.酱印网的主营范围是什么？</span></dt>
							<dd class="faq_contain">
								<div>酱印网是一家互联网印刷服务平台。主要产品包括名片、宣传单、海报、折页、画册、手提袋、易拉宝、门型展架、展板及个性化包装、个性化定制等。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>2.酱印网和小酱油是什么关系？ </span></dt>
							<dd class="faq_contain">
								<div>
									<p>酱印网是小酱油旗下品牌，致力于为活动提供整包解决方案服务。围绕活动的组织筹划运维的整个过程，开展场地寻租、宣传品印制、周边相关物料购销、公关会展等一整套解决方案，成为娱乐活动、赛事的整体服务商。</p> 
									<p>小酱油成立于2014年7月，团队核心成员来自清华、北大、人大、复旦等知名大学，公司旗下产品包含小酱油精品活动平台和酱印网。公司致力于搭建全国领先的活动整包解决方案服务平台。</p> 
									<p>公司在2014年获得北软、厚德和百度前高管蔡虎的百万级天使轮融资，在2015年获得近千万preA轮融资，2016年3月成立全资子公司北京小酱油文化传媒有限公司，目前逐步发展成为集线上活动及票务平台、宣传品印制、活动周边相关物料购销、活动品牌传播整合服务为一体的综合型企业。</p>
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>3.酱印网的营业时间是什么？</span></dt>
							<dd class="faq_contain">
								<div>我们的营业时间是早上的9点半到晚上的8点。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>4.你们的店跟普通的复印店有什么区别？</span></dt>
							<dd class="faq_contain">
								<div>我们公司提供的是O2O形式的印刷服务。网上有电商网站（您可以在家或公司操作），线下有我们的工厂，还有我们专业的服务团队。因为有工厂，所以做的产品价格比外面的复印店更便宜；我们工厂采用的是四色印刷技术，所以质量比复印店更好；我们有网站，所以比复印店更方便；我们有服务团队，需要业务咨询或下单可以随时联系我们的销售人员或客服。</div>
							</dd>
						</dl>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
""")))}/*67.2*/ {_display_(Seq[Any](format.raw/*67.4*/("""
	"""),format.raw/*68.2*/("""<script type="text/javascript">
		!function()
		"""),format.raw/*70.3*/("""{"""),format.raw/*70.4*/("""
			"""),format.raw/*71.4*/("""$(".helper_right_container").delegate("dt.faq_tit, .open .faq_close a","click",function(e)
				"""),format.raw/*72.5*/("""{"""),format.raw/*72.6*/("""
					"""),format.raw/*73.6*/("""var a=$(this).closest(".faq_item");
					a.hasClass("open")?a.removeClass("open").siblings("dl.faq_item").removeClass("open"):a.addClass("open").siblings("dl.faq_item").removeClass("open")
				"""),format.raw/*75.5*/("""}"""),format.raw/*75.6*/("""
			"""),format.raw/*76.4*/(""");
		"""),format.raw/*77.3*/("""}"""),format.raw/*77.4*/("""();
	</script>
""")))}),format.raw/*79.2*/("""
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
object other extends other_Scope0.other
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:43 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/faq/other.scala.html
                  HASH: 525d98e010d7c4014f60b8b98e1cbfe601a85062
                  MATRIX: 557->1|727->47|754->79|781->81|805->97|844->99|872->101|1030->242|1068->244|1096->246|3595->2727|3634->2729|3663->2731|3738->2779|3766->2780|3797->2784|3919->2879|3947->2880|3980->2886|4200->3079|4228->3080|4259->3084|4291->3089|4319->3090|4365->3106
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|30->7|30->7|31->8|90->67|90->67|91->68|93->70|93->70|94->71|95->72|95->72|96->73|98->75|98->75|99->76|100->77|100->77|102->79
                  -- GENERATED --
              */
          