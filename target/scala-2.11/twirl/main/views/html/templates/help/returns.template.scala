
package views.html.templates.help

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object returns_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class returns extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates._

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("退换货说明")/*4.15*/ {_display_(Seq[Any](format.raw/*4.17*/("""
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
				    <dd><a href="/help/process">订购流程</a></dd>
				    <dd><a href="/help/logistics">物流查询</a></dd>
				    <dt><a href="javascript:;">售后服务</a></dt>
				    <dd><a href="/help/returns" class="sel">退换货说明</a></dd>
		    		<dt></dt>
				</dl>
				<div class="helper_right_container">
					<div class="helper_title"><span>退换货说明</span></div>
					<div class="content_container">
						<h3>印刷产品订单</h3>
						<div>
							<p>▪ 由于您的自身原因造成的产品质量问题，不支持退换货。如，印刷文件错误，产品选择错误。</p>
							<p>▪ 由于酱印网造成的产品质量问题，则由我方免费重印发货，相关费用由酱印网承担。</p>
							<p>▪ 退换货有效期为签收后7天内。</p>
						</div>
						<h3>印刷产品质量检查标准</h3>
						<b>● 以名片产品为例，您可参照以下质量标准：</b>
						<div>
							<p>1）印刷内容无误：根据您提交名片印刷稿中所承载的所有名片内容；</p>
							<p>2）印刷材质无误：根据您提交名片订单时所选取的印刷纸质；</p>
							<p>3）印刷墨色均匀：名片成品整体色调调和，没有大面积的颜色不均；</p>
							<p>4）名片色值与名片设计稿相符：名片印刷色差部分在行业公认标准内，即C.M.Y.K各值误差±10%以内的视为与原设计稿色值相符，为正常印刷品；</p>
							<p>5）名片尺寸划一：成品尺寸标准为名片设计稿裁切出血后尺寸，长、宽尺寸允许公差±1.5mm。</p>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
""")))}/*54.2*/ {_display_(Seq[Any](format.raw/*54.4*/("""
"""),format.raw/*55.1*/("""<!-- js 们 -->
""")))}),format.raw/*56.2*/("""
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
object returns extends returns_Scope0.returns
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:43 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/help/returns.scala.html
                  HASH: 34092ee5e08c29d79f293837b83ac02a4055ac6c
                  MATRIX: 562->1|732->47|759->79|786->81|807->94|846->96|874->98|1032->239|1070->241|1098->243|2853->1980|2892->1982|2920->1983|2965->1998
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|30->7|30->7|31->8|77->54|77->54|78->55|79->56
                  -- GENERATED --
              */
          