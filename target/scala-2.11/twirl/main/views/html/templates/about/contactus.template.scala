
package views.html.templates.about

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object contactus_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class contactus extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates._

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("联系我们")/*4.14*/ {_display_(Seq[Any](format.raw/*4.16*/("""
	"""),format.raw/*5.2*/("""<link rel="stylesheet" type="text/css" href="/assets/css/sidebar.css">
	<link rel="stylesheet" type="text/css" href="/assets/css/help.css">
""")))}/*7.2*/ {_display_(Seq[Any](format.raw/*7.4*/("""
	"""),format.raw/*8.2*/("""<div class="box helper_box">
        <div class="container">
        	<div class="helper_layout">
				<dl id="sidebar" class="sidebar">
				    <dt><a href="javascript:;">关于我们</a></dt>
				    <dd><a href="/about/introduction">公司简介</a></dd>
				    <dd><a href="/about/contactus" class="sel">联系我们</a></dd>
				    <dd><a href="/about/services">服务声明</a></dd>
				</dl>
				<div class="helper_right_container">
					<div class="helper_title"><span>联系我们</span></div>
					<div class="content_container">
						<div>
							<p>北京小酱油文化传媒有限公司</p>
							<p>Tel: 400-038-6898</p>
							<p>Web: <a href="http://www.soyyin.com/" target="_blank">www.soyyin.com</a></p>
							<p>Add: 北京市海淀区海淀西大街36号昊海楼4层411室</p>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
""")))}/*32.2*/ {_display_(Seq[Any](format.raw/*32.4*/("""
"""),format.raw/*33.1*/("""<!-- js 们 -->
""")))}),format.raw/*34.2*/("""
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
object contactus extends contactus_Scope0.contactus
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/about/contactus.scala.html
                  HASH: c8f82844e90621962d90790de949f767e3ce8239
                  MATRIX: 567->1|737->47|764->79|791->81|811->93|850->95|878->97|1036->238|1074->240|1102->242|1917->1039|1956->1041|1984->1042|2029->1057
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|30->7|30->7|31->8|55->32|55->32|56->33|57->34
                  -- GENERATED --
              */
          