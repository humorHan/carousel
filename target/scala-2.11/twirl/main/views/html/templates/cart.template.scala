
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object cart_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class cart extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.48*/("""


"""),_display_(/*4.2*/main("购物车")/*4.13*/ {_display_(Seq[Any](format.raw/*4.15*/("""
    """),format.raw/*5.5*/("""<!-- css 们 -->
    <link rel="stylesheet" type="text/css" href="/assets/css/cart.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/on-demand.css">
""")))}/*8.2*/ {_display_(Seq[Any](format.raw/*8.4*/("""
    """),format.raw/*9.5*/("""<!-- 网页主体 -->
    <div class="cart-box box">
        <div class="container">
            <div class="cart-banner"><img src="/assets/img/flow_cart.png"></div>
            <div class="empty" id="empty_cart_box">
                <div class="content">
                    <p>您的购物车暂时还没有任何商品哦，快去挑选心仪的商品吧~</p>
                    <p><a class="btn" href="/">马上去选购</a></p>
                </div>
            </div>
            <div class="my-cart" id="my_cart_box">
                <div class="cart-table-th">
                    <a href="/">继续购物></a>
                    全部商品 <span id="my_cart_count"></span>
                </div>
                <table class="cart-table-table">
                    <thead>
                    <tr class="all-select">
                        <td class="item-select">
                            <a class="check-box checked">
                                <input id="select_all_cart1" type="checkbox">
                                <label for="select_all_cart1">全选</label>
                            </a>
                        </td>
                        <td>
                            商品信息
                        </td>
                        <td>单价(元)</td>
                        <td width="237">数量</td>
                        <td>小计(元)</td>
                        <td>操作</td>
                    </tr>
                    </thead>
                    <tbody id="product_item" class="cart-table-tb"></tbody>
                </table>
                <div class="cart-table-tf all-select">
                    <a class="submit-btn" id="go_to_confirm">去结算 ></a>
                    <div class="price-sum">总计<span class="txt">（不含运费）：</span><span id="total_price" class="price">￥0.00</span></div>
                    <div class="item-select">
                        <a class="check-box checked">
                            <input id="select_all_cart2" type="checkbox">
                            <label for="select_all_cart2">全选</label>
                        </a>
                    </div>
                    <a class="deleteSelect">删除选中商品</a>
                </div>
            </div>
        </div>
    </div>

    <div class="modal-layer"></div>
    <div class="modal" id="delete_product">
        <div class="modal-head"><a class="close"></a></div>
        <div class="modal-body">
            <div class="tip">
                <div class="message sad">确认要删除选中商品吗</div>
            </div>
        </div>
        <div class="modal-foot"><a class="btn left no-stay">取消</a><a class="btn right">确认</a></div>
    </div>
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
    <div class="modal" id="edit_demand_detail" style="top: 12%; width: 610px; margin-left: -305px;">
        <div class="modal-head">
            <a class="close"></a>
            <div>编辑按需定制商品详情</div>
        </div>
        <div class="modal-body">
            <div class="divide-bar" style="width: 608px;"></div>
            <div class="on-demand-body">
                <div class="form-item">
                    <label>
                        <span class="field">产品名称：</span>
                        <input class="textbox on-demand-item-content" type="text" id="on_demand_product_name_input" value="">
                        <b class="required">*</b>
                        <i class="msg">请填写产品名称</i>
                        <input class="textbox placeholder" value="如：手提袋" autocomplete="off" type="text" style="position: absolute; left: 89px; top: 18px;">
                    </label>
                </div>
                <div class="form-item">
                    <label>
                        <span class="field">数量：</span>
                        <input class="textbox on-demand-item-content" type="text" id="on_demand_product_quantity_input" value="">
                        <b class="required">*</b>
                        <i class="msg">请填写数量</i>
                        <span class="alt">数量+单位</span>
                        <input class="textbox placeholder" value="如：100本" autocomplete="off" type="text" style="position: absolute; left: 89px; top: 18px;">
                    </label>
                </div>
                <div class="form-item">
                    <label>
                        <span class="field">产品尺寸：</span>
                        <input class="textbox on-demand-item-content" type="text" id="on_demand_product_size_input" value="">
                        <i class="msg">字数过多</i>
                        <span class="alt">单位：毫米(mm)</span>
                        <input class="textbox placeholder" value="如：长100*宽80*高60" autocomplete="off" type="text" style="position: absolute; left: 89px; top: 18px;">
                    </label>
                </div>
                <div class="form-item">
                    <label>
                        <span class="field">材质：</span>
                        <input class="textbox on-demand-item-content" type="text" id="on_demand_product_caizhi_input" value="">
                        <i class="msg">材质不能超过50个字</i>
                        <input class="textbox placeholder" value="如：150g铜版纸" autocomplete="off" type="text" style="position: absolute; left: 89px; top: 18px;">
                    </label>
                </div>
                <div class="form-item">
                    <label>
                        <span class="field">其他要求：</span>
                        <textarea class="textarea on-demand-item-content" style="width: 400px; height: 40px" id="on_demand_product_others_input"></textarea>
                        <i class="msg" style="margin-left: 90px;">其他要求不能超过500个字</i>
                        <textarea class="textarea placeholder" autocomplete="off" style="position: absolute; left: 89px; top: 18px; width: 400px; height: 40px">如：需要烫金</textarea>
                    </label>
                </div>
            </div>
        </div>
        <div class="modal-foot">
            <a class="btn left no-stay">取消</a><a class="btn right">确认修改</a>
        </div>
    </div>
""")))}/*159.2*/ {_display_(Seq[Any](format.raw/*159.4*/("""
    """),format.raw/*160.5*/("""<!-- js 们 -->
    <script type="text/javascript" src="/assets/js/common.js"></script>
    <script type="text/javascript" src="/assets/js/on-demand.js"></script>
    <script type="text/javascript" src="/assets/js/cart.js"></script>
""")))}),format.raw/*164.2*/("""
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
object cart extends cart_Scope0.cart
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:41 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/cart.scala.html
                  HASH: d67a16f990b45076589344867afd29aef672ca23
                  MATRIX: 551->1|692->47|721->51|740->62|779->64|810->69|992->234|1030->236|1061->241|8125->7286|8165->7288|8198->7293|8461->7525
                  LINES: 20->1|25->1|28->4|28->4|28->4|29->5|32->8|32->8|33->9|183->159|183->159|184->160|188->164
                  -- GENERATED --
              */
          