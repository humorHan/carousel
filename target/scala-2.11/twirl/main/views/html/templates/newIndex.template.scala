
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object newIndex_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class newIndex extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.48*/("""

"""),format.raw/*3.1*/("""<!DOCTYPE html>
<html lang="en">
<head>
    """),_display_(/*6.6*/pageMeta()),format.raw/*6.16*/("""
    """),format.raw/*7.5*/("""<title>【酱印网】名片_宣传单_折页_展架_画册_印刷_印刷O2O_云印技术</title>
    <link href="/assets/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
<link href="/assets/css/newCommon.css" rel="stylesheet"><link href="/assets/css/newIndex.css" rel="stylesheet"></head>
<body>
"""),_display_(/*11.2*/newPageHeader()),format.raw/*11.17*/("""

"""),format.raw/*13.1*/("""<div class="content">
    <div class="index-banner w1200"></div>
    <div class="standard-floor w1200 auto"></div>
    <div class="cooperative-partner-wrap w1200 auto">
        <div class="center">
            <span class="floor-line block middle"></span>
            <span class="font24 black bold ml30 mr30 middle">合作伙伴</span>
            <span class="floor-line block middle"></span>
        </div>
        <ul class="cooperative-partner clearFix"></ul>
    </div>
</div>

"""),_display_(/*26.2*/newPageFooter()),format.raw/*26.17*/("""
"""),format.raw/*27.1*/("""<script type="text/javascript" src="/assets/js/vendor.js"></script><script type="text/javascript" src="/assets/js/newCommon.js"></script><script type="text/javascript" src="/assets/js/newIndex.js"></script></body>
</html>"""))
      }
    }
  }

  def render(pageParam:views.params.PageParam): play.twirl.api.HtmlFormat.Appendable = apply()(pageParam)

  def f:(() => (views.params.PageParam) => play.twirl.api.HtmlFormat.Appendable) = () => (pageParam) => apply()(pageParam)

  def ref: this.type = this

}


}

/**/
object newIndex extends newIndex_Scope0.newIndex
              /*
                  -- GENERATED --
                  DATE: Thu Dec 01 10:47:32 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/newIndex.scala.html
                  HASH: c86b9db19748a14f696ac6bd264156de3f2bd748
                  MATRIX: 559->1|700->47|728->49|798->94|828->104|859->109|1144->368|1180->383|1209->385|1712->862|1748->877|1776->878
                  LINES: 20->1|25->1|27->3|30->6|30->6|31->7|35->11|35->11|37->13|50->26|50->26|51->27
                  -- GENERATED --
              */
          