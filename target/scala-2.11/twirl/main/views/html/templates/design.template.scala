
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object design_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class design extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.48*/("""

"""),_display_(/*3.2*/main("设计报价")/*3.14*/ {_display_(Seq[Any](format.raw/*3.16*/("""
    """),format.raw/*4.5*/("""<style type="text/css">
        .design-table """),format.raw/*5.23*/("""{"""),format.raw/*5.24*/("""
            """),format.raw/*6.13*/("""border-collapse: collapse;
            margin: 50px auto 100px;
        """),format.raw/*8.9*/("""}"""),format.raw/*8.10*/("""

        """),format.raw/*10.9*/(""".design-table thead """),format.raw/*10.29*/("""{"""),format.raw/*10.30*/("""
            """),format.raw/*11.13*/("""font-size: 16px;
            color: #222;
            font-weight: bold;
        """),format.raw/*14.9*/("""}"""),format.raw/*14.10*/("""

        """),format.raw/*16.9*/(""".design-table .title """),format.raw/*16.30*/("""{"""),format.raw/*16.31*/("""
            """),format.raw/*17.13*/("""color: black;
            font-size: 20px;
        """),format.raw/*19.9*/("""}"""),format.raw/*19.10*/("""

        """),format.raw/*21.9*/(""".design-table tbody """),format.raw/*21.29*/("""{"""),format.raw/*21.30*/("""
            """),format.raw/*22.13*/("""font-size: 15px;
            color: #222;
        """),format.raw/*24.9*/("""}"""),format.raw/*24.10*/("""

        """),format.raw/*26.9*/(""".design-table td """),format.raw/*26.26*/("""{"""),format.raw/*26.27*/("""
            """),format.raw/*27.13*/("""border: 2px solid #b8b8b8;
            text-align: center;
            vertical-align: middle;
            padding: 12px 10px;
        """),format.raw/*31.9*/("""}"""),format.raw/*31.10*/("""

        """),format.raw/*33.9*/(""".design-table tfoot """),format.raw/*33.29*/("""{"""),format.raw/*33.30*/("""
            """),format.raw/*34.13*/("""color: #555;
            font-size: 14px;
        """),format.raw/*36.9*/("""}"""),format.raw/*36.10*/("""
    """),format.raw/*37.5*/("""</style>
""")))}/*38.2*/ {_display_(Seq[Any](format.raw/*38.4*/("""
	"""),format.raw/*39.2*/("""<div class="box">
        <div class="container">
        	<p class="breadcrumb">当前位置：<a href="/">首页</a> > <a>设计类</a> > <a class="current" href="#">设计报价</a></p>
		    <table class="design-table">
		        <thead>
		            <tr class="title">
		                <td colspan="5">设计类报价</td>
		            </tr>
		            <tr>
		                <td>分类</td>
		                <td>设计服务</td>
		                <td>详情</td>
		                <td>单位</td>
		                <td>设计单价（元）</td>
		            </tr>
		        </thead>
		        <tbody>
		            <tr>
		                <td rowspan="4">主视觉</td>
		                <td>广告画面设计</td>
		                <td></td>
		                <td>幅</td>
		                <td>500</td>
		            </tr>
		            <tr>
		                <td rowspan="2">海报设计</td>
		                <td>普通海报</td>
		                <td>幅</td>
		                <td>500</td>
		            </tr>
		            <tr>
		                <td>创意海报</td>
		                <td>幅</td>
		                <td>1000</td>
		            </tr>
		            <tr>
		                <td>活动背景板设计</td>
		                <td>留影板、签到板、舞台背板等</td>
		                <td>个</td>
		                <td>500</td>
		            </tr>
		            <tr>
		                <td rowspan="11">延展设计</td>
		                <td>易拉宝简单设计</td>
		                <td></td>
		                <td>个</td>
		                <td>200</td>
		            </tr>
		            <tr>
		                <td>易拉宝创意设计</td>
		                <td></td>
		                <td>个</td>
		                <td>500</td>
		            </tr>
		            <tr>
		                <td rowspan="3">单页宣传品设计</td>
		                <td>单页</td>
		                <td>套</td>
		                <td>500</td>
		            </tr>
		            <tr>
		                <td>对折页</td>
		                <td>套</td>
		                <td>800</td>
		            </tr>
		            <tr>
		                <td>三折页</td>
		                <td>套</td>
		                <td>1000</td>
		            </tr>
		            <tr>
		                <td>手提袋</td>
		                <td>单面300/双面500</td>
		                <td>面</td>
		                <td>300</td>
		            </tr>
		            <tr>
		                <td>门票/优惠券</td>
		                <td>单面300/双面500</td>
		                <td>面</td>
		                <td>300</td>
		            </tr>
		            <tr>
		                <td>封面设计</td>
		                <td>封面封底</td>
		                <td>套</td>
		                <td>1200</td>
		            </tr>
		            <tr>
		                <td>画册设计</td>
		                <td>根据数量和要求调整，最低至80元/P，最高至400元/P</td>
		                <td>P</td>
		                <td>300</td>
		            </tr>
		            <tr>
		                <td rowspan="2">杂志书刊广告页设计</td>
		                <td>排版类</td>
		                <td>张</td>
		                <td>200</td>
		            </tr>
		            <tr>
		                <td>形象类</td>
		                <td>张</td>
		                <td>500</td>
		            </tr>
		            <tr>
		                <td rowspan="13">偶发设计</td>
		                <td>图片修改</td>
		                <td></td>
		                <td>张</td>
		                <td>300</td>
		            </tr>
		            <tr>
		                <td>网站页面设计</td>
		                <td></td>
		                <td>套</td>
		                <td>2500</td>
		            </tr>
		            <tr>
		                <td>logo标志设计</td>
		                <td></td>
		                <td>套</td>
		                <td>1800</td>
		            </tr>
		            <tr>
		                <td rowspan="2">VI设计</td>
		                <td>基础部分</td>
		                <td>项</td>
		                <td>300</td>
		            </tr>
		            <tr>
		                <td>应用部分（含手册排版，logo和吉祥物/卡通形象除外）</td>
		                <td>项</td>
		                <td>200-400</td>
		            </tr>
		            <tr>
		                <td rowspan="3">产品包装设计</td>
		                <td>简易包装或瓶贴</td>
		                <td>款</td>
		                <td>4000</td>
		            </tr>
		            <tr>
		                <td>包装盒、包装袋</td>
		                <td>款</td>
		                <td>8000</td>
		            </tr>
		            <tr>
		                <td>精品包装</td>
		                <td>款</td>
		                <td>15000</td>
		            </tr>
		            <tr>
		                <td>CD设计</td>
		                <td>封面+封底（CD包装外盒）+CD盘面</td>
		                <td>套</td>
		                <td>900</td>
		            </tr>
		            <tr>
		                <td>名片设计</td>
		                <td>正背</td>
		                <td>张</td>
		                <td>300</td>
		            </tr>
		            <tr>
		                <td>卡类（会员卡、贵宾卡等）</td>
		                <td>正背</td>
		                <td>张</td>
		                <td>300</td>
		            </tr>
		            <tr>
		                <td rowspan="2">吉祥物/卡通形象设计</td>
		                <td>标准卡通形象设计</td>
		                <td>套</td>
		                <td>3000</td>
		            </tr>
		            <tr>
		                <td>标准卡通形象设计以及6个不同动作神态延展</td>
		                <td>套</td>
		                <td>6000</td>
		            </tr>
		        </tbody>
		        <tfoot>
		            <tr>
		                <td colspan="5">注：同系列设计价格减半，特殊要求另议，此价格根据实际资料和要求高低而变化，以最终商定为准。</td>
		            </tr>
		        </tfoot>
		    </table>
		</div>
    </div>
""")))}/*228.2*/ {_display_(Seq[Any](format.raw/*228.4*/("""
""")))}),format.raw/*229.2*/("""
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
object design extends design_Scope0.design
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/design.scala.html
                  HASH: 1c256dc1bac074261c96d8630e3a9817a63df4cc
                  MATRIX: 555->1|696->47|724->50|744->62|783->64|814->69|887->115|915->116|955->129|1053->201|1081->202|1118->212|1166->232|1195->233|1236->246|1344->327|1373->328|1410->338|1459->359|1488->360|1529->373|1607->424|1636->425|1673->435|1721->455|1750->456|1791->469|1868->519|1897->520|1934->530|1979->547|2008->548|2049->561|2211->696|2240->697|2277->707|2325->727|2354->728|2395->741|2472->791|2501->792|2533->797|2561->807|2600->809|2629->811|8055->6218|8095->6220|8128->6222
                  LINES: 20->1|25->1|27->3|27->3|27->3|28->4|29->5|29->5|30->6|32->8|32->8|34->10|34->10|34->10|35->11|38->14|38->14|40->16|40->16|40->16|41->17|43->19|43->19|45->21|45->21|45->21|46->22|48->24|48->24|50->26|50->26|50->26|51->27|55->31|55->31|57->33|57->33|57->33|58->34|60->36|60->36|61->37|62->38|62->38|63->39|252->228|252->228|253->229
                  -- GENERATED --
              */
          