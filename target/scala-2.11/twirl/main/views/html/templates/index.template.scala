
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object index_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class index extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.48*/("""

"""),format.raw/*3.1*/("""<!DOCTYPE html>
<html lang="en">
    <head>
        """),_display_(/*6.10*/pageMeta()),format.raw/*6.20*/("""
        """),format.raw/*7.9*/("""<title>【酱印网】名片_宣传单_折页_展架_画册_印刷_印刷O2O_云印技术</title>
        <link href="/assets/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
        <link rel="stylesheet" type="text/css" href="/assets/css/normalize.css">
        <script type="text/javascript" src="/assets/js/mobile.js"></script>
        <link rel="stylesheet" href="http://7bvan6.com2.z0.glb.qiniucdn.com/unslider.css">
    </head>
    <body>
        """),_display_(/*14.10*/pageHeader()),format.raw/*14.22*/("""

        """),format.raw/*16.9*/("""<div class="box">
            <div class="container">
                <div class="unslide-box">
                    <div id="unslider_auto"></div>
                </div>
                <div class="show-detail-msg">
                    <p class="title">订购流程</p>
                    <p>找到您需要的商品进行订购吧！如果您有什么特殊的需求或建议可直接联系酱印网客服，祝您购物愉快！</p>
                    <img src="/assets/img/order_process.png">
                </div>
                <div class="cut-off"></div>
                <div class="show-detail-msg">
                    <p class="title">关于我们</p>
                    <p>我们关心你所关心的，无论价格、品质、速度等等，只要您想，我们将尽全力满足您的需求！</p>
                    <img src="/assets/img/about_us.png">
                </div>
            </div>
        </div>

        """),_display_(/*35.10*/pageFooter()),format.raw/*35.22*/("""
        """),format.raw/*36.9*/("""<script src="http://cdn.staticfile.org/jquery/1.11.0/jquery.min.js" type="text/javascript"></script>
        <script src="http://cdn.staticfile.org/jquery-cookie/1.4.0/jquery.cookie.min.js"></script>
        <script src="/assets/js/main.js"></script>
        <script src="/assets/js/login.js"></script>
        <script src="http://7bvan6.com2.z0.glb.qiniucdn.com/unslider-min.js"></script>
        <script src="/assets/js/index.js"></script>
        <div style="display:none">
            <script src="http://s11.cnzz.com/z_stat.php?id=1258858023&web_id=1258858023" language="JavaScript"></script>
        </div>
    </body>
</html>

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
object index extends index_Scope0.index
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/index.scala.html
                  HASH: 2ea96b2137a318ff38ac1a8826049c5771a7559f
                  MATRIX: 553->1|694->47|722->49|801->102|831->112|866->121|1309->537|1342->549|1379->559|2156->1309|2189->1321|2225->1330
                  LINES: 20->1|25->1|27->3|30->6|30->6|31->7|38->14|38->14|40->16|59->35|59->35|60->36
                  -- GENERATED --
              */
          