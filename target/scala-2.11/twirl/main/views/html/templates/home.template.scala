
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object home_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class home extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.48*/("""

"""),_display_(/*3.2*/main("我的订单")/*3.14*/ {_display_(Seq[Any](format.raw/*3.16*/("""
    """),format.raw/*4.5*/("""<!-- css 们 -->
    <link rel="stylesheet" type="text/css" href="/assets/css/home.css">
""")))}/*6.2*/ {_display_(Seq[Any](format.raw/*6.4*/("""
    """),format.raw/*7.5*/("""<!-- 网页主体 -->
    <div class="box">
        <div class="container">
            <div class="sidebar">
                <a class="sidebar-title order"><img src="/assets/img/home_order.png">订单中心</a>
                <a class="sidebar-link active" href="/home">我的订单</a>
                <a class="sidebar-title account"><img src="/assets/img/home_account.png">账户中心</a>
                <a class="sidebar-link" href="/">修改密码</a>
                <a class="sidebar-link" href="/">换绑手机</a>
                <a class="sidebar-title help"><img src="/assets/img/home_help.png">其他</a>
                <a class="sidebar-link" href="/faq/account">帮助中心</a>
            </div>
            <div class="main-area">
                <div class="search-query">
                    <a id="" class="active" data-status="">全部订单</a>
                    <a id="" data-status="SUBMITTED">待商家接单</a>
                    <a id="" data-status="DELIVERY_CONFIRMED">待支付</a>
                    <a id="" data-status="FINISHED">已完成</a>
                    <a id="" data-status="CANCELED">已取消</a>
                </div>
                <div class="order-list-box" id="my_order_list"></div>
                <div class="pagination" id="show_pagination"></div>
            </div>
        </div>
    </div>
    <div class="modal-layer"></div>
    <div class="modal" id="demand_detail">
        <div class="modal-head">
            <a class="close"></a>
            <div>按需定制商品详情</div>
        </div>
        <div class="modal-body">
            <div class="divide-bar"></div>
            <table class="product-detail">
                <tr>
                    <td class="product-item">产品名称：</td>
                    <td id="demand_name"></td>
                </tr>
                <tr>
                    <td class="product-item">数量：</td>
                    <td id="demand_num"></td>
                </tr>
                <tr>
                    <td class="product-item">产品尺寸：</td>
                    <td id="demand_size"></td>
                </tr>
                <tr>
                    <td class="product-item">材质：</td>
                    <td id="demand_caizhi"></td>
                </tr>
                <tr>
                    <td class="product-item">其他要求：</td>
                    <td id="demand_others"></td>
                </tr>
            </table>
        </div>
        <div class="modal-foot"></div>
    </div>
""")))}/*65.2*/ {_display_(Seq[Any](format.raw/*65.4*/("""
    """),format.raw/*66.5*/("""<script type="text/javascript" src="/assets/js/common.js"></script>
    <script type="text/javascript" src="/assets/js/home.js"></script>
""")))}),format.raw/*68.2*/("""
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
object home extends home_Scope0.home
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/home.scala.html
                  HASH: d7e29c5fb3526d4eecd15ff9001d5c9e2220e41f
                  MATRIX: 551->1|692->47|720->50|740->62|779->64|810->69|915->157|953->159|984->164|3393->2555|3432->2557|3464->2562|3633->2701
                  LINES: 20->1|25->1|27->3|27->3|27->3|28->4|30->6|30->6|31->7|89->65|89->65|90->66|92->68
                  -- GENERATED --
              */
          