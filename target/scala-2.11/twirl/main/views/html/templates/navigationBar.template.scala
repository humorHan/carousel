
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object navigationBar_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class navigationBar extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit param: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.params._

Seq[Any](format.raw/*1.44*/("""
"""),format.raw/*3.1*/("""
"""),format.raw/*4.1*/("""<div class="box header-nav">
    <div class="container">
        """),_display_(/*6.10*/if(param.isHome)/*6.26*/ {_display_(Seq[Any](format.raw/*6.28*/("""
        """),format.raw/*7.9*/("""<div class="all_print show">
        """)))}/*8.11*/else/*8.16*/{_display_(Seq[Any](format.raw/*8.17*/("""
        """),format.raw/*9.9*/("""<div class="all_print">
        """)))}),format.raw/*10.10*/("""
            """),format.raw/*11.13*/("""<a href="/"><img class="all-print-img" src="/assets/img/catalog.png">全部商品分类</a>
            <div class="nav-catalog">
                <ul class="nav-catalog-list">
                    """),_display_(/*14.22*/for(category <- param.categories) yield /*14.55*/ {_display_(Seq[Any](format.raw/*14.57*/("""
                        """),format.raw/*15.25*/("""<!-- 一级分类 -->
                        <li class="nav-catalog-item">
                            <a class="nav-catalog-content">
                                <span class="title">"""),_display_(/*18.54*/category/*18.62*/.name),format.raw/*18.67*/("""</span>
                                <p class="descript">
                                    """),_display_(/*20.38*/Html(category.description)),format.raw/*20.64*/("""
                                """),format.raw/*21.33*/("""</p>
                            </a>
                            <!-- 二级分类 -->
                            <div class="child-catalog">
                                """),_display_(/*25.34*/for(products <- category.productGroups) yield /*25.73*/ {_display_(Seq[Any](format.raw/*25.75*/("""
                                    """),format.raw/*26.37*/("""<!-- 每一列显示7个 -->
                                    <ul>
                                        """),_display_(/*28.42*/for(product <- products) yield /*28.66*/ {_display_(Seq[Any](format.raw/*28.68*/("""
                                            """),format.raw/*29.45*/("""<li>
                                                <a href="/product?id="""),_display_(/*30.71*/product/*30.78*/.id),format.raw/*30.81*/("""">
                                                    <img src=""""),_display_(/*31.64*/product/*31.71*/.coverUrl),format.raw/*31.80*/("""?imageView2/1/w/40/h/40/">
                                                    <span class="text">"""),_display_(/*32.73*/product/*32.80*/.brief),format.raw/*32.86*/("""</span>
                                                </a>
                                            </li>
                                        """)))}),format.raw/*35.42*/("""
                                    """),format.raw/*36.37*/("""</ul>
                                """)))}),format.raw/*37.34*/("""
                            """),format.raw/*38.29*/("""</div>
                        </li>
                    """)))}),format.raw/*40.22*/("""
                    """),format.raw/*41.21*/("""<li class="nav-catalog-item">
                        <a class="nav-catalog-content" href="/equipmentLeasing">
                            <span class="title">设备租赁 </span>
                            <p class="descript">灯光 音响 视频 道具</p>
                        </a>
                    </li>
                    <li class="nav-catalog-item">
                        <a class="nav-catalog-content" href="/design">
                            <span class="title">设计服务</span>
                            <p class="descript">主视觉 延展设计 偶发设计</p>
                        </a>
                    </li>
                    <li class="nav-catalog-item">
                        <a class="nav-catalog-content" href="http://pr.soyyin.com/" target="_blank">
                            <span class="title">公关会展</span>
                            <p class="descript">整体策划 会议执行 公关传播</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="nav-tab">
            <li class="special-product">
                <a>特价商品</a>
                <div class="special-triangle"></div>
                <ul class="special-list">
                    <li><a class="special yilabao" href="/product?id=57">特价易拉宝</a></li>
                    <li><a class="special zhanjia" href="/product?id=58">特价门型展架</a></li>
                    <li><a class="special danye" href="/product?id=59">特价单页</a></li>
                </ul>
            </li>
            <li><a href="/product/custom">按需定制</a></li>
            <li><a href="http://pr.soyyin.com/" target="_blank">公关会展</a></li>
        </ul>
    </div>
</div>
"""))
      }
    }
  }

  def render(param:views.params.PageParam): play.twirl.api.HtmlFormat.Appendable = apply()(param)

  def f:(() => (views.params.PageParam) => play.twirl.api.HtmlFormat.Appendable) = () => (param) => apply()(param)

  def ref: this.type = this

}


}

/**/
object navigationBar extends navigationBar_Scope0.navigationBar
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/navigationBar.scala.html
                  HASH: 5a7e64b18fd86acf5e818d19ec28438f32c3eb85
                  MATRIX: 569->1|727->43|754->67|781->68|873->134|897->150|936->152|971->161|1027->200|1039->205|1077->206|1112->215|1176->248|1217->261|1429->446|1478->479|1518->481|1571->506|1779->687|1796->695|1822->700|1947->798|1994->824|2055->857|2251->1026|2306->1065|2346->1067|2411->1104|2537->1203|2577->1227|2617->1229|2690->1274|2792->1349|2808->1356|2832->1359|2925->1425|2941->1432|2971->1441|3097->1540|3113->1547|3140->1553|3323->1705|3388->1742|3458->1781|3515->1810|3604->1868|3653->1889
                  LINES: 20->1|25->1|26->3|27->4|29->6|29->6|29->6|30->7|31->8|31->8|31->8|32->9|33->10|34->11|37->14|37->14|37->14|38->15|41->18|41->18|41->18|43->20|43->20|44->21|48->25|48->25|48->25|49->26|51->28|51->28|51->28|52->29|53->30|53->30|53->30|54->31|54->31|54->31|55->32|55->32|55->32|58->35|59->36|60->37|61->38|63->40|64->41
                  -- GENERATED --
              */
          