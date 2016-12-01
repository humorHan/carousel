
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object notFound_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class notFound extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.48*/("""

"""),_display_(/*3.2*/main("404")/*3.13*/ {_display_(Seq[Any](format.raw/*3.15*/("""
    """),format.raw/*4.5*/("""<style>
		.content-area """),format.raw/*5.17*/("""{"""),format.raw/*5.18*/("""
			"""),format.raw/*6.4*/("""text-align: center;
			margin: 60px 0;
		"""),format.raw/*8.3*/("""}"""),format.raw/*8.4*/("""
		"""),format.raw/*9.3*/(""".content-area img """),format.raw/*9.21*/("""{"""),format.raw/*9.22*/("""
			"""),format.raw/*10.4*/("""width: 550px;
		"""),format.raw/*11.3*/("""}"""),format.raw/*11.4*/("""
		"""),format.raw/*12.3*/(""".content-area div """),format.raw/*12.21*/("""{"""),format.raw/*12.22*/("""
			"""),format.raw/*13.4*/("""font-size: 18px;
			color: #000;
			line-height: 40px;
			margin-top: 10px;
			margin-bottom: 100px;
		"""),format.raw/*18.3*/("""}"""),format.raw/*18.4*/("""
		"""),format.raw/*19.3*/(""".content-area a """),format.raw/*19.19*/("""{"""),format.raw/*19.20*/("""
			"""),format.raw/*20.4*/("""display: inline-block;
			width: 140px;
			height: 40px;
			background: #f54404;
			color: #fff;
			cursor: pointer;
			line-height: 40px;
			text-align: center;
			margin-left: 30px;
		"""),format.raw/*29.3*/("""}"""),format.raw/*29.4*/("""
		"""),format.raw/*30.3*/(""".content-area a:hover """),format.raw/*30.25*/("""{"""),format.raw/*30.26*/("""
			"""),format.raw/*31.4*/("""background: #f78f68;
		"""),format.raw/*32.3*/("""}"""),format.raw/*32.4*/("""
	"""),format.raw/*33.2*/("""</style>
""")))}/*34.2*/ {_display_(Seq[Any](format.raw/*34.4*/("""
    """),format.raw/*35.5*/("""<div class="box">
        <div class="container">
        	<div class="content-area">
        		<img src="/assets/img/404.png"/>
        		<div>
        			啊哦~页面不翼而飞了！
        			<a href="/">返回首页</a>
        		<div>
        	</div>
        </div>
    </div>
""")))}/*46.2*/ {_display_(Seq[Any](format.raw/*46.4*/("""
    """),format.raw/*47.5*/("""<!-- js 们 -->
""")))}),format.raw/*48.2*/("""
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
object notFound extends notFound_Scope0.notFound
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/notFound.scala.html
                  HASH: 33cd0819b062955fbf576d0135ac1a62e1f57950
                  MATRIX: 559->1|700->47|728->50|747->61|786->63|817->68|868->92|896->93|926->97|993->138|1020->139|1049->142|1094->160|1122->161|1153->165|1196->181|1224->182|1254->185|1300->203|1329->204|1360->208|1490->311|1518->312|1548->315|1592->331|1621->332|1652->336|1865->522|1893->523|1923->526|1973->548|2002->549|2033->553|2083->576|2111->577|2140->579|2168->589|2207->591|2239->596|2516->855|2555->857|2587->862|2632->877
                  LINES: 20->1|25->1|27->3|27->3|27->3|28->4|29->5|29->5|30->6|32->8|32->8|33->9|33->9|33->9|34->10|35->11|35->11|36->12|36->12|36->12|37->13|42->18|42->18|43->19|43->19|43->19|44->20|53->29|53->29|54->30|54->30|54->30|55->31|56->32|56->32|57->33|58->34|58->34|59->35|70->46|70->46|71->47|72->48
                  -- GENERATED --
              */
          