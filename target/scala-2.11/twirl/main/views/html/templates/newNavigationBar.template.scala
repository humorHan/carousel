
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object newNavigationBar_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class newNavigationBar extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit param: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.params._

Seq[Any](format.raw/*1.44*/("""
"""),format.raw/*3.1*/("""
"""),format.raw/*4.1*/("""<div class="product-wrap auto w1200">
    """),_display_(/*5.6*/if(param.isHome)/*5.22*/ {_display_(Seq[Any](format.raw/*5.24*/("""
        """),format.raw/*6.9*/("""<div class="total-product show block">
    """)))}/*7.7*/else/*7.12*/{_display_(Seq[Any](format.raw/*7.13*/("""
        """),format.raw/*8.9*/("""<div class="total-product block">
    """)))}),format.raw/*9.6*/("""
            """),format.raw/*10.13*/("""<div class="font16 pointer pl20 bold line40">全部商品分类</div>
            <ul class="nav-list">
                """),_display_(/*12.18*/for(category <- param.categories) yield /*12.51*/ {_display_(Seq[Any](format.raw/*12.53*/("""
                    """),format.raw/*13.21*/("""<li>
                        <div class="first-menu-wrap">
                            <i class="first-menu-i floatRight"></i>
                            <!-- 一级菜单名字-->
                            <span class="first-menu font14 white">"""),_display_(/*17.68*/category/*17.76*/.name),format.raw/*17.81*/("""</span>
                            <div class="summary font12">
                                <!-- 循环输出商品摘要以及摘要名称-->
                                <span class="summary-item">"""),_display_(/*20.61*/Html(category.description)),format.raw/*20.87*/("""</span>
                            </div>

                            <div class="second-menu font14">
                                <!-- 循环输出<多列>二级菜单-->
                                """),_display_(/*25.34*/for(products <- category.productGroups) yield /*25.73*/ {_display_(Seq[Any](format.raw/*25.75*/("""
                                    """),format.raw/*26.37*/("""<ul>
                                        """),_display_(/*27.42*/for(product <- products) yield /*27.66*/ {_display_(Seq[Any](format.raw/*27.68*/("""
                                            """),format.raw/*28.45*/("""<li>
                                                <div class="second-menu-item">
                                                    <a href="/product?id="""),_display_(/*30.75*/product/*30.82*/.id),format.raw/*30.85*/("""">
                                                        <img class="middle" src=""""),_display_(/*31.83*/product/*31.90*/.coverUrl),format.raw/*31.99*/("""?imageView2/1/w/40/h/40/" alt="" height="36" width="36"/>
                                                        <span class="ml10">"""),_display_(/*32.77*/product/*32.84*/.brief),format.raw/*32.90*/("""</span>
                                                    </a>
                                                </div>
                                            </li>
                                        """)))}),format.raw/*36.42*/("""
                                    """),format.raw/*37.37*/("""</ul>
                                """)))}),format.raw/*38.34*/("""
                            """),format.raw/*39.29*/("""</div>
                        </div>
                    </li>
                """)))}),format.raw/*42.18*/("""
            """),format.raw/*43.13*/("""</ul>
        </div>
        <ul class="nav-tab-wrap font16 block bold">
            <li class="special-goods-wrap">
                <span>特价商品</span>
                <ul class="special-goods font14">
                    <li>
                        <a class="special-good-item" href="/product?id=57">
                            <img src="/assets/img/special/special3.png"/>
                            <div class="special-good-name center">特价易拉宝</div>
                        </a>
                    </li>
                    <li class="special-line"></li>
                    <li>
                        <a class="special-good-item" href="/product?id=58">
                            <img src="/assets/img/special/special2.png"/>
                            <div class="special-good-name center">特价门型展架</div>
                        </a>
                    </li>
                    <li class="special-line"></li>
                    <li>
                        <a class="special-good-item" href="/product?id=59">
                            <img src="/assets/img/special/special1.png"/>
                            <div class="special-good-name center">特价单页</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/product/custom">按需定制</a>
            </li>
            <!--<li>设计频道</li>
            <li>案例展示</li>
            <li>印刷常识</li>-->
            <li>
                <a href="http://pr.soyyin.com/">酱油传媒</a>
            </li>
        </ul>
</div>

<div class="fix-top-wrap">
    <div class="product-wrap auto w1200 clearFix">
        <a class="middle block" href="/new">
            <img src="/assets/img/fixed-logo.png" height="24px" width="54px">
        </a>
        <div class="fix-total-product block">
            <div class="ml40 font16 pointer bold hover-red line50">全部商品分类</div>
            <ul class="nav-list">
                """),_display_(/*91.18*/for(category <- param.categories) yield /*91.51*/ {_display_(Seq[Any](format.raw/*91.53*/("""
                """),format.raw/*92.17*/("""<li>
                    <div class="first-menu-wrap">
                        <i class="first-menu-i floatRight"></i>
                        <!-- 一级菜单名字-->
                        <span class="first-menu font14 white">"""),_display_(/*96.64*/category/*96.72*/.name),format.raw/*96.77*/("""</span>
                        <div class="summary font12">
                            <!-- 循环输出商品摘要以及摘要名称-->
                            <span class="summary-item">"""),_display_(/*99.57*/Html(category.description)),format.raw/*99.83*/("""</span>
                        </div>

                        <div class="second-menu font14">
                            <!-- 循环输出<多列>二级菜单-->
                            """),_display_(/*104.30*/for(products <- category.productGroups) yield /*104.69*/ {_display_(Seq[Any](format.raw/*104.71*/("""
                            """),format.raw/*105.29*/("""<ul>
                                """),_display_(/*106.34*/for(product <- products) yield /*106.58*/ {_display_(Seq[Any](format.raw/*106.60*/("""
                                """),format.raw/*107.33*/("""<li>
                                    <div class="second-menu-item">
                                        <a href="/product?id="""),_display_(/*109.63*/product/*109.70*/.id),format.raw/*109.73*/("""">
                                            <img class="middle" src=""""),_display_(/*110.71*/product/*110.78*/.coverUrl),format.raw/*110.87*/("""?imageView2/1/w/40/h/40/" alt="" height="36" width="36"/>
                                            <span class="ml10">"""),_display_(/*111.65*/product/*111.72*/.brief),format.raw/*111.78*/("""</span>
                                        </a>
                                    </div>
                                </li>
                                """)))}),format.raw/*115.34*/("""
                            """),format.raw/*116.29*/("""</ul>
                            """)))}),format.raw/*117.30*/("""
                        """),format.raw/*118.25*/("""</div>
                    </div>
                </li>
                """)))}),format.raw/*121.18*/("""
            """),format.raw/*122.13*/("""</ul>
        </div>
        <ul class="nav-tab-wrap font16 block bold line50" style="line-height: 50px; height: 50px;">
            <li class="special-goods-wrap">
                <span>特价商品</span>
                <ul class="special-goods font14">
                    <li>
                        <a class="special-good-item" href="/product?id=57">
                            <img src="/assets/img/special/special3.png"/>
                            <div class="special-good-name center">特价易拉宝</div>
                        </a>
                    </li>
                    <li class="special-line"></li>
                    <li>
                        <a class="special-good-item" href="/product?id=58">
                            <img src="/assets/img/special/special2.png"/>
                            <div class="special-good-name center">特价门型展架</div>
                        </a>
                    </li>
                    <li class="special-line"></li>
                    <li>
                        <a class="special-good-item" href="/product?id=59">
                            <img src="/assets/img/special/special1.png"/>
                            <div class="special-good-name center">特价单页</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/product/custom">按需定制</a>
            </li>
            <!--<li>设计频道</li>
            <li>案例展示</li>
            <li>印刷常识</li>-->
            <li>
                <a href="http://pr.soyyin.com/">酱油传媒</a>
            </li>
        </ul>
        <div class="floatRight">
            <ul class="site-nav-handle floatRight font12">
                <li class="login mr10 pointer status1">登录</li>
                <li class="mr10 pointer ver status1">|</li>
                <li class="mr20 pointer status1">
                    <a href="/static/register.html">注册</a>
                </li>
                <li class="login-status pointer relative none">
                    <i class="fix-user-bg block middle"></i>
                    <span class="block">欢迎您，酱油君</span>
                    <i class="login-status-bg block"></i>
                    <ul class="login-out none line30">
                        <li><a href="/home">我的订单</a></li>
                        <li class="login-out-btn">退出</li>
                    </ul>
                </li>
                <li class="fix-cart-num-wrap">
                    <span class="fix-cart block">
                        <span class="fix-cart-bg block middle"></span>
                        <span class="fix-cart-num block"></span>
                    </span>
                    <div class="cart-products-wrap none"></div>
                </li>
            </ul>
        </div>
    </div>
</div>"""))
      }
    }
  }

  def render(param:views.params.PageParam): play.twirl.api.HtmlFormat.Appendable = apply()(param)

  def f:(() => (views.params.PageParam) => play.twirl.api.HtmlFormat.Appendable) = () => (param) => apply()(param)

  def ref: this.type = this

}


}

/**/
object newNavigationBar extends newNavigationBar_Scope0.newNavigationBar
              /*
                  -- GENERATED --
                  DATE: Tue Nov 29 18:53:47 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/newNavigationBar.scala.html
                  HASH: 790b207746460ad218b01c816f27db7028b59500
                  MATRIX: 575->1|733->43|760->67|787->68|855->111|879->127|918->129|953->138|1014->183|1026->188|1064->189|1099->198|1167->237|1208->250|1344->359|1393->392|1433->394|1482->415|1746->652|1763->660|1789->665|1996->845|2043->871|2261->1062|2316->1101|2356->1103|2421->1140|2494->1186|2534->1210|2574->1212|2647->1257|2832->1415|2848->1422|2872->1425|2984->1510|3000->1517|3030->1526|3191->1660|3207->1667|3234->1673|3476->1884|3541->1921|3611->1960|3668->1989|3780->2070|3821->2083|5791->4026|5840->4059|5880->4061|5925->4078|6173->4299|6190->4307|6216->4312|6411->4480|6458->4506|6661->4681|6717->4720|6758->4722|6816->4751|6882->4789|6923->4813|6964->4815|7026->4848|7188->4982|7205->4989|7230->4992|7331->5065|7348->5072|7379->5081|7529->5203|7546->5210|7574->5216|7773->5383|7831->5412|7898->5447|7952->5472|8057->5545|8099->5558
                  LINES: 20->1|25->1|26->3|27->4|28->5|28->5|28->5|29->6|30->7|30->7|30->7|31->8|32->9|33->10|35->12|35->12|35->12|36->13|40->17|40->17|40->17|43->20|43->20|48->25|48->25|48->25|49->26|50->27|50->27|50->27|51->28|53->30|53->30|53->30|54->31|54->31|54->31|55->32|55->32|55->32|59->36|60->37|61->38|62->39|65->42|66->43|114->91|114->91|114->91|115->92|119->96|119->96|119->96|122->99|122->99|127->104|127->104|127->104|128->105|129->106|129->106|129->106|130->107|132->109|132->109|132->109|133->110|133->110|133->110|134->111|134->111|134->111|138->115|139->116|140->117|141->118|144->121|145->122
                  -- GENERATED --
              */
          