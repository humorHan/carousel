
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object equipmentLeasing_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class equipmentLeasing extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.48*/("""

"""),_display_(/*3.2*/main("设备租赁")/*3.14*/ {_display_(Seq[Any](format.raw/*3.16*/("""
    """),format.raw/*4.5*/("""<style type="text/css">
        .equipment-leasing-table """),format.raw/*5.34*/("""{"""),format.raw/*5.35*/("""
            """),format.raw/*6.13*/("""border-collapse: collapse;
            margin: 50px auto 100px;
        """),format.raw/*8.9*/("""}"""),format.raw/*8.10*/("""

        """),format.raw/*10.9*/(""".equipment-leasing-table thead """),format.raw/*10.40*/("""{"""),format.raw/*10.41*/("""
            """),format.raw/*11.13*/("""font-size: 16px;
            color: #222;
            font-weight: bold;
        """),format.raw/*14.9*/("""}"""),format.raw/*14.10*/("""

        """),format.raw/*16.9*/(""".equipment-leasing-table .title """),format.raw/*16.41*/("""{"""),format.raw/*16.42*/("""
            """),format.raw/*17.13*/("""color: black;
            font-size: 20px;
        """),format.raw/*19.9*/("""}"""),format.raw/*19.10*/("""

        """),format.raw/*21.9*/(""".equipment-leasing-table tbody """),format.raw/*21.40*/("""{"""),format.raw/*21.41*/("""
            """),format.raw/*22.13*/("""font-size: 15px;
            color: #222;
        """),format.raw/*24.9*/("""}"""),format.raw/*24.10*/("""

        """),format.raw/*26.9*/(""".equipment-leasing-table td """),format.raw/*26.37*/("""{"""),format.raw/*26.38*/("""
            """),format.raw/*27.13*/("""border: 2px solid #b8b8b8;
            text-align: center;
            vertical-align: middle;
            padding: 12px 10px;
        """),format.raw/*31.9*/("""}"""),format.raw/*31.10*/("""

        """),format.raw/*33.9*/(""".equipment-leasing-table tfoot """),format.raw/*33.40*/("""{"""),format.raw/*33.41*/("""
            """),format.raw/*34.13*/("""color: #555;
            font-size: 14px;
        """),format.raw/*36.9*/("""}"""),format.raw/*36.10*/("""
    """),format.raw/*37.5*/("""</style>
""")))}/*38.2*/ {_display_(Seq[Any](format.raw/*38.4*/("""
	"""),format.raw/*39.2*/("""<div class="box">
        <div class="container">
        	<p class="breadcrumb">当前位置：<a href="/">首页</a> > <a>租赁类</a> > <a class="current" href="#">设备租赁</a></p>
		    <table class="equipment-leasing-table">
		        <thead>
		            <tr class="title">
		                <td colspan="6">设备租赁报价</td>
		            </tr>
		            <tr>
		                <td>分类</td>
		                <td>设备名称</td>
		                <td>详情</td>
		                <td>单位</td>
		                <td>单价（元）</td>
		                <td>备注</td>
		            </tr>
		        </thead>
		        <tbody>
		            <tr>
		                <td rowspan="10">灯光</td>
		                <td>电脑光束灯</td>
		                <td></td>
		                <td>个</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>电脑染色灯</td>
		                <td></td>
		                <td>个</td>
		                <td>550</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>电脑图案灯</td>
		                <td></td>
		                <td>个</td>
		                <td>650</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>logo片</td>
		                <td></td>
		                <td>个</td>
		                <td>200</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>LEDpar灯</td>
		                <td></td>
		                <td>个</td>
		                <td>80</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>追光灯</td>
		                <td></td>
		                <td>个</td>
		                <td>700</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>雾机</td>
		                <td></td>
		                <td>个</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>泡泡机</td>
		                <td></td>
		                <td>个</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>调光台</td>
		                <td></td>
		                <td>个</td>
		                <td>500</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>灯光师</td>
		                <td></td>
		                <td>名</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td rowspan="9">音响</td>
		                <td>主音箱</td>
		                <td></td>
		                <td>个</td>
		                <td>600</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>低音</td>
		                <td></td>
		                <td>个</td>
		                <td>600</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>返送</td>
		                <td></td>
		                <td>个</td>
		                <td>450</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>功放</td>
		                <td></td>
		                <td>个</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>耳麦</td>
		                <td></td>
		                <td>个</td>
		                <td>150</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>手持麦</td>
		                <td></td>
		                <td>个</td>
		                <td>150</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>鹅颈麦</td>
		                <td></td>
		                <td>个</td>
		                <td>150</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>对讲机</td>
		                <td></td>
		                <td>个</td>
		                <td>100</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>音响师</td>
		                <td></td>
		                <td>名</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td rowspan="11">视频</td>
		                <td rowspan="2">LED屏</td>
		                <td>P3屏</td>
		                <td>平米</td>
		                <td>350</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>P4屏</td>
		                <td>平米</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>视频切换器</td>
		                <td></td>
		                <td>个</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>视频监视器</td>
		                <td></td>
		                <td>个</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>视频控制台</td>
		                <td></td>
		                <td>个</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>调频师</td>
		                <td></td>
		                <td>名</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>笔记本电脑</td>
		                <td></td>
		                <td>个</td>
		                <td>150</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>6m大摇臂（带摄像）</td>
		                <td></td>
		                <td>个</td>
		                <td>3800</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td rowspan="2">导播台</td>
		                <td>高清</td>
		                <td>个</td>
		                <td>4500</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>标清</td>
		                <td>个</td>
		                <td>3000</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>高清摄像机（带人）	</td>
		                <td></td>
		                <td>套</td>
		                <td>2000</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td rowspan="46">户外道具</td>
		                <td>折叠帐篷</td>
		                <td>3*3m</td>
		                <td>个</td>
		                <td>120</td>
		                <td>不含围布</td>
		            </tr>
		            <tr>
		                <td rowspan="2">A字板</td>
		                <td>1*2m</td>
		                <td>块</td>
		                <td>220</td>
		                <td>包含画面三角堵</td>
		            </tr>
		            <tr>
		                <td>1*3m</td>
		                <td>块</td>
		                <td>280</td>
		                <td>包含画面三角堵</td>
		            </tr>
		            <tr>
		                <td>舞台</td>
		                <td></td>
		                <td>平米</td>
		                <td>80</td>
		                <td>含地毯</td>
		            </tr>
		            <tr>
		                <td>看台</td>
		                <td></td>
		                <td>平米</td>
		                <td>220</td>
		                <td>座位外加20元</td>
		            </tr>
		            <tr>
		                <td>桁架</td>
		                <td></td>
		                <td>平米</td>
		                <td>85</td>
		                <td>包含普通喷绘布</td>
		            </tr>
		            <tr>
		                <td rowspan="4">篷房</td>
		                <td>3*3m</td>
		                <td>顶</td>
		                <td>800</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>5*5m</td>
		                <td>顶</td>
		                <td>1500</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>跨度10m</td>
		                <td>平米</td>
		                <td>40</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>跨度15m</td>
		                <td>平米</td>
		                <td>50</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td rowspan="3">道旗</td>
		                <td>3m</td>
		                <td>个</td>
		                <td>20</td>
		                <td>不含画面（40元/平米丝网印）</td>
		            </tr>
		            <tr>
		                <td>5m</td>
		                <td>个</td>
		                <td>150</td>
		                <td>不含画面（40元/平米丝网印）</td>
		            </tr>
		            <tr>
		                <td>5m注水</td>
		                <td>个</td>
		                <td>100</td>
		                <td>不含画面（40元/平米丝网印）</td>
		            </tr>
		            <tr>
		                <td>铁马</td>
		                <td>1.2*2m</td>
		                <td>个</td>
		                <td>35</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>不锈钢铁马</td>
		                <td>1.2*2m</td>
		                <td>个</td>
		                <td>40</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>水马</td>
		                <td>长1500mm上宽250mm<br/>下宽480mm高800mm</td>
		                <td>个</td>
		                <td>50</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>地毯</td>
		                <td></td>
		                <td>平米</td>
		                <td>10</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>广告伞</td>
		                <td>直径2.4m</td>
		                <td>个</td>
		                <td>30</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>高档侧臂伞</td>
		                <td></td>
		                <td>个</td>
		                <td>150</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>排椅</td>
		                <td></td>
		                <td>座</td>
		                <td>10</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>公园椅</td>
		                <td></td>
		                <td>个</td>
		                <td>100</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td rowspan="3">垃圾桶</td>
		                <td>240L</td>
		                <td>个</td>
		                <td>50</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>1100L</td>
		                <td>个</td>
		                <td>400</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>30L</td>
		                <td>个</td>
		                <td>30</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>指示牌</td>
		                <td></td>
		                <td>个</td>
		                <td>50</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>白一米线</td>
		                <td></td>
		                <td>根</td>
		                <td>20</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>黑一米线</td>
		                <td></td>
		                <td>根</td>
		                <td>30</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>挂绳栏杆</td>
		                <td></td>
		                <td>根</td>
		                <td>30</td>
		                <td>钛金、不锈钢</td>
		            </tr>
		            <tr>
		                <td>围栏</td>
		                <td>2.5m高</td>
		                <td>米</td>
		                <td>100</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>庙会篷</td>
		                <td>2.5*2.5m</td>
		                <td>间</td>
		                <td>150</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>桩桶</td>
		                <td>0.3*0.5*0.7*0.9m</td>
		                <td>个</td>
		                <td>5</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>减速带</td>
		                <td>长1m</td>
		                <td>块</td>
		                <td>15</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>过线板</td>
		                <td>长0.9m</td>
		                <td>块</td>
		                <td>30</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>看台</td>
		                <td></td>
		                <td>平米</td>
		                <td>220</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>合唱台合影台</td>
		                <td>3层，2m</td>
		                <td>组</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>折叠椅</td>
		                <td></td>
		                <td>把</td>
		                <td>5</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>折叠桌</td>
		                <td></td>
		                <td>张</td>
		                <td>35</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>吧桌</td>
		                <td></td>
		                <td>张</td>
		                <td>50</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>吧椅</td>
		                <td></td>
		                <td>把</td>
		                <td>30</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>宴会椅</td>
		                <td></td>
		                <td>把</td>
		                <td>10</td>
		                <td>不含蝴蝶结</td>
		            </tr>
		            <tr>
		                <td>厕所</td>
		                <td></td>
		                <td>个</td>
		                <td>600</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>沙发</td>
		                <td></td>
		                <td>个</td>
		                <td>200</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>茶几</td>
		                <td></td>
		                <td>个</td>
		                <td>70</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>演讲台</td>
		                <td></td>
		                <td>个</td>
		                <td>300</td>
		                <td></td>
		            </tr>
		            <tr>
		                <td>采暖炉</td>
		                <td></td>
		                <td>个</td>
		                <td>350</td>
		                <td>含液化气</td>
		            </tr>
		            <tr>
		                <td>空调</td>
		                <td>5匹</td>
		                <td>个</td>
		                <td>800</td>
		                <td></td>
		            </tr>
		        </tbody>
		        <tfoot>
		            <tr>
		                <td colspan="6">注：特殊要求另议，此价格根据实际资料和要求高低而变化，以最终商定为准。</td>
		            </tr>
		        </tfoot>
		    </table>
		</div>
    </div>
""")))}/*592.2*/ {_display_(Seq[Any](format.raw/*592.4*/("""
""")))}),format.raw/*593.2*/("""
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
object equipmentLeasing extends equipmentLeasing_Scope0.equipmentLeasing
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/equipmentLeasing.scala.html
                  HASH: ce351c208a1fb26d365532254368d08a5a3b231d
                  MATRIX: 575->1|716->47|744->50|764->62|803->64|834->69|918->126|946->127|986->140|1084->212|1112->213|1149->223|1208->254|1237->255|1278->268|1386->349|1415->350|1452->360|1512->392|1541->393|1582->406|1660->457|1689->458|1726->468|1785->499|1814->500|1855->513|1932->563|1961->564|1998->574|2054->602|2083->603|2124->616|2286->751|2315->752|2352->762|2411->793|2440->794|2481->807|2558->857|2587->858|2619->863|2647->873|2686->875|2715->877|17853->15996|17893->15998|17926->16000
                  LINES: 20->1|25->1|27->3|27->3|27->3|28->4|29->5|29->5|30->6|32->8|32->8|34->10|34->10|34->10|35->11|38->14|38->14|40->16|40->16|40->16|41->17|43->19|43->19|45->21|45->21|45->21|46->22|48->24|48->24|50->26|50->26|50->26|51->27|55->31|55->31|57->33|57->33|57->33|58->34|60->36|60->36|61->37|62->38|62->38|63->39|616->592|616->592|617->593
                  -- GENERATED --
              */
          