
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object pageMeta_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class pageMeta extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template2[String,String,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(description: String = "", keywords: String = ""):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.51*/("""

"""),format.raw/*3.1*/("""<meta charset="UTF-8">
"""),_display_(/*4.2*/if(description.isEmpty)/*4.25*/ {_display_(Seq[Any](format.raw/*4.27*/("""
    """),format.raw/*5.5*/("""<meta name="description" content="酱印网—中国领先的互联网印刷和设计服务平台。云印技术为您提供最优质的名片、会员卡、宣传单、折页、易拉宝、X展架、封套、画册、宣传册、手提袋等产品多多印和设计服务!">
""")))}/*6.3*/else/*6.8*/{_display_(Seq[Any](format.raw/*6.9*/("""
    """),format.raw/*7.5*/("""<meta name="description" content=""""),_display_(/*7.40*/description),format.raw/*7.51*/("""">
""")))}),format.raw/*8.2*/("""
"""),_display_(/*9.2*/if(keywords.isEmpty)/*9.22*/ {_display_(Seq[Any](format.raw/*9.24*/("""
    """),format.raw/*10.5*/("""<meta name="keywords" content="酱印,soyyin.com,云印技术,酱印网,小酱油,互联网印刷,设计,名片,宣传单,折页,展架,画册,印刷,印刷O2O,公关会展">
""")))}/*11.3*/else/*11.8*/{_display_(Seq[Any](format.raw/*11.9*/("""
    """),format.raw/*12.5*/("""<meta name="keywords" content=""""),_display_(/*12.37*/keywords),format.raw/*12.45*/("""">
""")))}),format.raw/*13.2*/("""
"""),format.raw/*14.1*/("""<meta name="author" content="soyyin.com">
<meta name="copyright" content="Copyright © 2016 soyyin.com. All rights reserved.">
"""))
      }
    }
  }

  def render(description:String,keywords:String): play.twirl.api.HtmlFormat.Appendable = apply(description,keywords)

  def f:((String,String) => play.twirl.api.HtmlFormat.Appendable) = (description,keywords) => apply(description,keywords)

  def ref: this.type = this

}


}

/**/
object pageMeta extends pageMeta_Scope0.pageMeta
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/pageMeta.scala.html
                  HASH: f08afc914d44ecf1fe857e02a8d1357edadecb91
                  MATRIX: 550->1|694->50|722->52|771->76|802->99|841->101|872->106|1008->226|1019->231|1056->232|1087->237|1148->272|1179->283|1212->287|1239->289|1267->309|1306->311|1338->316|1456->417|1468->422|1506->423|1538->428|1597->460|1626->468|1660->472|1688->473
                  LINES: 20->1|25->1|27->3|28->4|28->4|28->4|29->5|30->6|30->6|30->6|31->7|31->7|31->7|32->8|33->9|33->9|33->9|34->10|35->11|35->11|35->11|36->12|36->12|36->12|37->13|38->14
                  -- GENERATED --
              */
          