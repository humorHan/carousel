
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object order_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class order extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.48*/("""

"""),_display_(/*3.2*/main("订单详情")/*3.14*/ {_display_(Seq[Any](format.raw/*3.16*/("""
	"""),format.raw/*4.2*/("""<link rel="stylesheet" type="text/css" href="/assets/css/order.css">
""")))}/*5.2*/ {_display_(Seq[Any](format.raw/*5.4*/("""
	"""),format.raw/*6.2*/("""<div class="box">
        <div class="container" id="order_container">
        </div>
    </div>
    <script id="template" type="text/x-jquery-tmpl">
        <p class="breadcrumb">当前位置：<a href="/">首页</a> > <a href="/home">我的订单</a> > <a class="current">订单：$"""),format.raw/*11.107*/("""{"""),format.raw/*11.108*/("""id"""),format.raw/*11.110*/("""}"""),format.raw/*11.111*/("""</a></p>
        <div class="order-status-area" id="status_change" data-id="$"""),format.raw/*12.69*/("""{"""),format.raw/*12.70*/("""id"""),format.raw/*12.72*/("""}"""),format.raw/*12.73*/("""">
            <span class="order-number">订单号：$"""),format.raw/*13.45*/("""{"""),format.raw/*13.46*/("""id"""),format.raw/*13.48*/("""}"""),format.raw/*13.49*/("""</span>
            <span class="order-status">订单状态：<span style="color: #66cc66">$"""),format.raw/*14.75*/("""{"""),format.raw/*14.76*/("""status_t"""),format.raw/*14.84*/("""}"""),format.raw/*14.85*/("""</span></span>
            """),format.raw/*15.13*/("""{"""),format.raw/*15.14*/("""{"""),format.raw/*15.15*/("""if (payment === 'ONLINE' && status === 'SUBMITTED') || (payment === 'CASH_ON_DELIVERY' && status === 'DELIVERY_CONFIRMED')"""),format.raw/*15.137*/("""}"""),format.raw/*15.138*/("""}"""),format.raw/*15.139*/("""
                """),format.raw/*16.17*/("""<span class="order-op">
                """),format.raw/*17.17*/("""{"""),format.raw/*17.18*/("""{"""),format.raw/*17.19*/("""if is_priced"""),format.raw/*17.31*/("""}"""),format.raw/*17.32*/("""}"""),format.raw/*17.33*/("""
                    """),format.raw/*18.21*/("""<a href="pay?order_id=$"""),format.raw/*18.44*/("""{"""),format.raw/*18.45*/("""id"""),format.raw/*18.47*/("""}"""),format.raw/*18.48*/("""">立即支付</a>
                """),format.raw/*19.17*/("""{"""),format.raw/*19.18*/("""{"""),format.raw/*19.19*/("""else"""),format.raw/*19.23*/("""}"""),format.raw/*19.24*/("""}"""),format.raw/*19.25*/("""
                    """),format.raw/*20.21*/("""<a class="unable"><span class="prompt">等待客服MM与您确定订单需求及金额后才可以支付哦~</span>立即支付></a>
                """),format.raw/*21.17*/("""{"""),format.raw/*21.18*/("""{"""),format.raw/*21.19*/("""/if"""),format.raw/*21.22*/("""}"""),format.raw/*21.23*/("""}"""),format.raw/*21.24*/("""
                """),format.raw/*22.17*/("""</span>
            """),format.raw/*23.13*/("""{"""),format.raw/*23.14*/("""{"""),format.raw/*23.15*/("""/if"""),format.raw/*23.18*/("""}"""),format.raw/*23.19*/("""}"""),format.raw/*23.20*/("""
            """),format.raw/*24.13*/("""<span class="cancel-order">
                """),format.raw/*25.17*/("""{"""),format.raw/*25.18*/("""{"""),format.raw/*25.19*/("""if status === 'SUBMITTED' || status === 'ONLINE_PAID'"""),format.raw/*25.72*/("""}"""),format.raw/*25.73*/("""}"""),format.raw/*25.74*/("""
                    """),format.raw/*26.21*/("""<a id="cancel_order" href="javascript:;">取消订单</a>
                """),format.raw/*27.17*/("""{"""),format.raw/*27.18*/("""{"""),format.raw/*27.19*/("""else status === 'DELIVERY_CONFIRMED' || status === 'ONLINE_CONFIRMED'"""),format.raw/*27.88*/("""}"""),format.raw/*27.89*/("""}"""),format.raw/*27.90*/("""
                    """),format.raw/*28.21*/("""<a class="unable"><span class="prompt">商家已接单，请联系酱印网客服提交取消订单的申请，如印品已开始制作，将无法取消订单。</span>取消订单</a>
                """),format.raw/*29.17*/("""{"""),format.raw/*29.18*/("""{"""),format.raw/*29.19*/("""/if"""),format.raw/*29.22*/("""}"""),format.raw/*29.23*/("""}"""),format.raw/*29.24*/("""
            """),format.raw/*30.13*/("""</span>
        </div>
        <div class="order-prompt">
        """),format.raw/*33.9*/("""{"""),format.raw/*33.10*/("""{"""),format.raw/*33.11*/("""if status === 'SUBMITTED'"""),format.raw/*33.36*/("""}"""),format.raw/*33.37*/("""}"""),format.raw/*33.38*/("""
            """),format.raw/*34.13*/("""{"""),format.raw/*34.14*/("""{"""),format.raw/*34.15*/("""if is_priced"""),format.raw/*34.27*/("""}"""),format.raw/*34.28*/("""}"""),format.raw/*34.29*/("""
                """),format.raw/*35.17*/("""{"""),format.raw/*35.18*/("""{"""),format.raw/*35.19*/("""if payment === 'ONLINE'"""),format.raw/*35.42*/("""}"""),format.raw/*35.43*/("""}"""),format.raw/*35.44*/("""
                """),format.raw/*36.17*/("""尊敬的客户，我们还未收到该订单的款项，请您尽快付款。支付完成后，酱印网客服才能接单。
                """),format.raw/*37.17*/("""{"""),format.raw/*37.18*/("""{"""),format.raw/*37.19*/("""else"""),format.raw/*37.23*/("""}"""),format.raw/*37.24*/("""}"""),format.raw/*37.25*/("""
                """),format.raw/*38.17*/("""尊敬的客户，该订单已经成功提交，请等待客服MM接单。
                """),format.raw/*39.17*/("""{"""),format.raw/*39.18*/("""{"""),format.raw/*39.19*/("""/if"""),format.raw/*39.22*/("""}"""),format.raw/*39.23*/("""}"""),format.raw/*39.24*/("""
            """),format.raw/*40.13*/("""{"""),format.raw/*40.14*/("""{"""),format.raw/*40.15*/("""else"""),format.raw/*40.19*/("""}"""),format.raw/*40.20*/("""}"""),format.raw/*40.21*/("""
                """),format.raw/*41.17*/("""尊敬的客户，该订单包含未知价格的按需定制商品，我们的客服MM稍后将联系您，以确定订单金额，请耐心等待。
            """),format.raw/*42.13*/("""{"""),format.raw/*42.14*/("""{"""),format.raw/*42.15*/("""/if"""),format.raw/*42.18*/("""}"""),format.raw/*42.19*/("""}"""),format.raw/*42.20*/("""
        """),format.raw/*43.9*/("""{"""),format.raw/*43.10*/("""{"""),format.raw/*43.11*/("""else status === 'DELIVERY_CONFIRMED' || status === 'ONLINE_CONFIRMED'"""),format.raw/*43.80*/("""}"""),format.raw/*43.81*/("""}"""),format.raw/*43.82*/("""
            """),format.raw/*44.13*/("""客服MM已经接单，您的商品即将开始制作，请耐心等待。
        """),format.raw/*45.9*/("""{"""),format.raw/*45.10*/("""{"""),format.raw/*45.11*/("""else status === 'ONLINE_PAID'"""),format.raw/*45.40*/("""}"""),format.raw/*45.41*/("""}"""),format.raw/*45.42*/("""
            """),format.raw/*46.13*/("""尊敬的客户，您已成功支付了订单，请等待客服MM已经接单。
        """),format.raw/*47.9*/("""{"""),format.raw/*47.10*/("""{"""),format.raw/*47.11*/("""else status === 'DELIVERY_PAID'"""),format.raw/*47.42*/("""}"""),format.raw/*47.43*/("""}"""),format.raw/*47.44*/("""
            """),format.raw/*48.13*/("""尊敬的客户，您已成功支付了订单，请等待货物送达。
        """),format.raw/*49.9*/("""{"""),format.raw/*49.10*/("""{"""),format.raw/*49.11*/("""else status === 'FINISHED'"""),format.raw/*49.37*/("""}"""),format.raw/*49.38*/("""}"""),format.raw/*49.39*/("""
            """),format.raw/*50.13*/("""订单已经完成，感谢您在酱印网购物，欢迎您继续选购其他商品。
        """),format.raw/*51.9*/("""{"""),format.raw/*51.10*/("""{"""),format.raw/*51.11*/("""else status === 'CANCELED'"""),format.raw/*51.37*/("""}"""),format.raw/*51.38*/("""}"""),format.raw/*51.39*/("""
            """),format.raw/*52.13*/("""订单已经取消，感谢您在酱印网购物，欢迎您继续选购其他商品。
        """),format.raw/*53.9*/("""{"""),format.raw/*53.10*/("""{"""),format.raw/*53.11*/("""/if"""),format.raw/*53.14*/("""}"""),format.raw/*53.15*/("""}"""),format.raw/*53.16*/("""
        """),format.raw/*54.9*/("""</div>
        <div class="order-process">
            <span class="process-container">
            """),format.raw/*57.13*/("""{"""),format.raw/*57.14*/("""{"""),format.raw/*57.15*/("""html process"""),format.raw/*57.27*/("""}"""),format.raw/*57.28*/("""}"""),format.raw/*57.29*/("""
            """),format.raw/*58.13*/("""</span>
        </div>
        <div class="form">
            <div class="form-title">
                <span class="form-title-span">商品清单</span>
            </div>
            <div class="form-body">
                <table class="products-table">
                    <thead class="products-table-th">
                    <tr>
                        <th style="text-align:left;padding-left:110px;">商品信息</th>
                        <th>单价（元）</th>
                        <th>数量</th>
                        <th>印刷文件</th>
                    </tr>
                    </thead>
                    <tbody id="product_item" class="products-table-tb">
                    """),format.raw/*75.21*/("""{"""),format.raw/*75.22*/("""{"""),format.raw/*75.23*/("""each(i,item) items"""),format.raw/*75.41*/("""}"""),format.raw/*75.42*/("""}"""),format.raw/*75.43*/("""
                        """),format.raw/*76.25*/("""<tr data-id="$"""),format.raw/*76.39*/("""{"""),format.raw/*76.40*/("""item.id"""),format.raw/*76.47*/("""}"""),format.raw/*76.48*/("""">
                            <td class="item-product">
                                <div>
                                    <div class="item-product-img">
                                        <a href="/product?id=$"""),format.raw/*80.63*/("""{"""),format.raw/*80.64*/("""item.product_id"""),format.raw/*80.79*/("""}"""),format.raw/*80.80*/("""#$"""),format.raw/*80.82*/("""{"""),format.raw/*80.83*/("""item.brief"""),format.raw/*80.93*/("""}"""),format.raw/*80.94*/(""""><img src="$"""),format.raw/*80.107*/("""{"""),format.raw/*80.108*/("""img_link+item.image_key"""),format.raw/*80.131*/("""}"""),format.raw/*80.132*/("""?imageView2/1/w/80/h/80/"></a>
                                    </div>
                                    <div class="item-product-describe">
                                        <a href="/product?id=$"""),format.raw/*83.63*/("""{"""),format.raw/*83.64*/("""item.product_id"""),format.raw/*83.79*/("""}"""),format.raw/*83.80*/("""#$"""),format.raw/*83.82*/("""{"""),format.raw/*83.83*/("""item.brief"""),format.raw/*83.93*/("""}"""),format.raw/*83.94*/("""">
                                            <p class="title">$"""),format.raw/*84.63*/("""{"""),format.raw/*84.64*/("""item.title"""),format.raw/*84.74*/("""}"""),format.raw/*84.75*/("""</p>
                                            <p class="describe">$"""),format.raw/*85.66*/("""{"""),format.raw/*85.67*/("""item.brief"""),format.raw/*85.77*/("""}"""),format.raw/*85.78*/("""</p>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td class="item-price">
                                <div>$"""),format.raw/*91.39*/("""{"""),format.raw/*91.40*/("""processData.processPrice(item.price)"""),format.raw/*91.76*/("""}"""),format.raw/*91.77*/("""</div>
                            </td>
                            <td class="item-num">x$"""),format.raw/*93.52*/("""{"""),format.raw/*93.53*/("""item.quantity"""),format.raw/*93.66*/("""}"""),format.raw/*93.67*/("""</td>
                            <td class="item-deal">
                                """),format.raw/*95.33*/("""{"""),format.raw/*95.34*/("""{"""),format.raw/*95.35*/("""if item.file"""),format.raw/*95.47*/("""}"""),format.raw/*95.48*/("""}"""),format.raw/*95.49*/("""
                                """),format.raw/*96.33*/("""<a class="deal-block upload-file" href="$"""),format.raw/*96.74*/("""{"""),format.raw/*96.75*/("""img_link+item.file.file_key"""),format.raw/*96.102*/("""}"""),format.raw/*96.103*/("""" target="_blank" title="$"""),format.raw/*96.129*/("""{"""),format.raw/*96.130*/("""item.file.file_name"""),format.raw/*96.149*/("""}"""),format.raw/*96.150*/("""" style="display:block">$"""),format.raw/*96.175*/("""{"""),format.raw/*96.176*/("""item.file.file_name"""),format.raw/*96.195*/("""}"""),format.raw/*96.196*/("""</a>
                                """),format.raw/*97.33*/("""{"""),format.raw/*97.34*/("""{"""),format.raw/*97.35*/("""else"""),format.raw/*97.39*/("""}"""),format.raw/*97.40*/("""}"""),format.raw/*97.41*/("""
                                """),format.raw/*98.33*/("""<a class="deal-block upload-file" href="" target="_blank"></a>
                                """),format.raw/*99.33*/("""{"""),format.raw/*99.34*/("""{"""),format.raw/*99.35*/("""/if"""),format.raw/*99.38*/("""}"""),format.raw/*99.39*/("""}"""),format.raw/*99.40*/("""
                                """),format.raw/*100.33*/("""<a class="deal-block add-file">上传文件<input class="hide-file" type="file"></a>
                                """),format.raw/*101.33*/("""{"""),format.raw/*101.34*/("""{"""),format.raw/*101.35*/("""if item.file"""),format.raw/*101.47*/("""}"""),format.raw/*101.48*/("""}"""),format.raw/*101.49*/("""
                                """),format.raw/*102.33*/("""<a class="deal-block delete-file" style="display:block">删除</a>
                                """),format.raw/*103.33*/("""{"""),format.raw/*103.34*/("""{"""),format.raw/*103.35*/("""else"""),format.raw/*103.39*/("""}"""),format.raw/*103.40*/("""}"""),format.raw/*103.41*/("""
                                """),format.raw/*104.33*/("""<a class="deal-block delete-file">删除</a>
                                """),format.raw/*105.33*/("""{"""),format.raw/*105.34*/("""{"""),format.raw/*105.35*/("""/if"""),format.raw/*105.38*/("""}"""),format.raw/*105.39*/("""}"""),format.raw/*105.40*/("""
                            """),format.raw/*106.29*/("""</td>
                        </tr>
                    """),format.raw/*108.21*/("""{"""),format.raw/*108.22*/("""{"""),format.raw/*108.23*/("""/each"""),format.raw/*108.28*/("""}"""),format.raw/*108.29*/("""}"""),format.raw/*108.30*/("""
                    """),format.raw/*109.21*/("""<!-- 按需定制 -->
                    """),format.raw/*110.21*/("""{"""),format.raw/*110.22*/("""{"""),format.raw/*110.23*/("""if custom_items.length !== 0"""),format.raw/*110.51*/("""}"""),format.raw/*110.52*/("""}"""),format.raw/*110.53*/("""
                        """),format.raw/*111.25*/("""<tr class="on-demand">
                            <td colspan="4">
                                <div class="on-demand-title">按需定制商品<span>（客服MM将与您进一步沟通并确定价格）</span></div>
                            </td>
                        </tr>
                        """),format.raw/*116.25*/("""{"""),format.raw/*116.26*/("""{"""),format.raw/*116.27*/("""each(i,custom) custom_items"""),format.raw/*116.54*/("""}"""),format.raw/*116.55*/("""}"""),format.raw/*116.56*/("""
                        """),format.raw/*117.25*/("""<tr data-id="$"""),format.raw/*117.39*/("""{"""),format.raw/*117.40*/("""custom.id"""),format.raw/*117.49*/("""}"""),format.raw/*117.50*/("""" data-detail="$"""),format.raw/*117.66*/("""{"""),format.raw/*117.67*/("""JSON.stringify(custom.detail)"""),format.raw/*117.96*/("""}"""),format.raw/*117.97*/("""">
                            <td class="item-product">
                                <div>
                                    <div class="item-product-img">
                                        <a class="demand-pop"><img src="$"""),format.raw/*121.74*/("""{"""),format.raw/*121.75*/("""img_link+custom.image_key"""),format.raw/*121.100*/("""}"""),format.raw/*121.101*/("""?imageView2/1/w/80/h/80/"></a>
                                    </div>
                                    <div class="item-product-describe">
                                        <a class="demand-pop">
                                            <p class="title">$"""),format.raw/*125.63*/("""{"""),format.raw/*125.64*/("""custom.title"""),format.raw/*125.76*/("""}"""),format.raw/*125.77*/("""</p>
                                            <p class="describe">$"""),format.raw/*126.66*/("""{"""),format.raw/*126.67*/("""custom.brief"""),format.raw/*126.79*/("""}"""),format.raw/*126.80*/("""</p>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td class="item-price">
                                """),format.raw/*132.33*/("""{"""),format.raw/*132.34*/("""{"""),format.raw/*132.35*/("""if custom.price === 0"""),format.raw/*132.56*/("""}"""),format.raw/*132.57*/("""}"""),format.raw/*132.58*/("""
                                """),format.raw/*133.33*/("""<div>待定</div>
                                """),format.raw/*134.33*/("""{"""),format.raw/*134.34*/("""{"""),format.raw/*134.35*/("""else"""),format.raw/*134.39*/("""}"""),format.raw/*134.40*/("""}"""),format.raw/*134.41*/("""
                                """),format.raw/*135.33*/("""<div>$"""),format.raw/*135.39*/("""{"""),format.raw/*135.40*/("""processData.processPrice(custom.price)"""),format.raw/*135.78*/("""}"""),format.raw/*135.79*/("""</div>
                                """),format.raw/*136.33*/("""{"""),format.raw/*136.34*/("""{"""),format.raw/*136.35*/("""/if"""),format.raw/*136.38*/("""}"""),format.raw/*136.39*/("""}"""),format.raw/*136.40*/("""
                            """),format.raw/*137.29*/("""</td>
                            <td class="item-num">x1</td>
                            <td class="item-deal">
                                """),format.raw/*140.33*/("""{"""),format.raw/*140.34*/("""{"""),format.raw/*140.35*/("""if custom.file"""),format.raw/*140.49*/("""}"""),format.raw/*140.50*/("""}"""),format.raw/*140.51*/("""
                                """),format.raw/*141.33*/("""<a class="deal-block upload-file" href="$"""),format.raw/*141.74*/("""{"""),format.raw/*141.75*/("""img_link+custom.file.file_key"""),format.raw/*141.104*/("""}"""),format.raw/*141.105*/("""" target="_blank" title="$"""),format.raw/*141.131*/("""{"""),format.raw/*141.132*/("""custom.file.file_name"""),format.raw/*141.153*/("""}"""),format.raw/*141.154*/("""" style="display:block">$"""),format.raw/*141.179*/("""{"""),format.raw/*141.180*/("""custom.file.file_name"""),format.raw/*141.201*/("""}"""),format.raw/*141.202*/("""</a>
                                """),format.raw/*142.33*/("""{"""),format.raw/*142.34*/("""{"""),format.raw/*142.35*/("""else"""),format.raw/*142.39*/("""}"""),format.raw/*142.40*/("""}"""),format.raw/*142.41*/("""
                                """),format.raw/*143.33*/("""<a class="deal-block upload-file" href="" target="_blank"></a>
                                """),format.raw/*144.33*/("""{"""),format.raw/*144.34*/("""{"""),format.raw/*144.35*/("""/if"""),format.raw/*144.38*/("""}"""),format.raw/*144.39*/("""}"""),format.raw/*144.40*/("""
                                """),format.raw/*145.33*/("""<a class="deal-block add-file">上传文件<input class="hide-file" type="file"></a>
                                """),format.raw/*146.33*/("""{"""),format.raw/*146.34*/("""{"""),format.raw/*146.35*/("""if custom.file"""),format.raw/*146.49*/("""}"""),format.raw/*146.50*/("""}"""),format.raw/*146.51*/("""
                                """),format.raw/*147.33*/("""<a class="deal-block delete-file" style="display:block">删除</a>
                                """),format.raw/*148.33*/("""{"""),format.raw/*148.34*/("""{"""),format.raw/*148.35*/("""else"""),format.raw/*148.39*/("""}"""),format.raw/*148.40*/("""}"""),format.raw/*148.41*/("""
                                """),format.raw/*149.33*/("""<a class="deal-block delete-file">删除</a>
                                """),format.raw/*150.33*/("""{"""),format.raw/*150.34*/("""{"""),format.raw/*150.35*/("""/if"""),format.raw/*150.38*/("""}"""),format.raw/*150.39*/("""}"""),format.raw/*150.40*/("""
                            """),format.raw/*151.29*/("""</td>
                        </tr>
                        """),format.raw/*153.25*/("""{"""),format.raw/*153.26*/("""{"""),format.raw/*153.27*/("""/each"""),format.raw/*153.32*/("""}"""),format.raw/*153.33*/("""}"""),format.raw/*153.34*/("""
                    """),format.raw/*154.21*/("""{"""),format.raw/*154.22*/("""{"""),format.raw/*154.23*/("""/if"""),format.raw/*154.26*/("""}"""),format.raw/*154.27*/("""}"""),format.raw/*154.28*/("""
                    """),format.raw/*155.21*/("""</tbody>
                </table>
            </div>
        </div>
        <div class="form order-info">
            <div class="form-title">
                <span class="form-title-span">订单信息</span>
            </div>
            <div class="form-body" style="margin-top: 20px;">
                <div class="order-info-right">
                    <div>
                        <span class="info-item-name">支付方式：</span>
                        <span class="text-content">$"""),format.raw/*167.53*/("""{"""),format.raw/*167.54*/("""payment_t"""),format.raw/*167.63*/("""}"""),format.raw/*167.64*/("""</span>
                    </div>
                    <div>
                        <span class="info-item-name">配送方式：</span>
                        <span class="text-content">普通快递</span>
                    </div>
                    <div>
                        <span class="info-item-name">商品金额：</span>
                        <span class="text-content">￥$"""),format.raw/*175.54*/("""{"""),format.raw/*175.55*/("""amount_t"""),format.raw/*175.63*/("""}"""),format.raw/*175.64*/("""</span>
                    </div>
                    <div>
                        <span class="info-item-name">配送费用：</span>
                        <span class="text-content">￥$"""),format.raw/*179.54*/("""{"""),format.raw/*179.55*/("""freight_t"""),format.raw/*179.64*/("""}"""),format.raw/*179.65*/("""</span>
                    </div>
                    <div>
                        <span class="info-item-name">订单金额：</span>
                        <span class="text-content" style="line-height: 40px; color: #f54404; font-size: 24px;">￥$"""),format.raw/*183.114*/("""{"""),format.raw/*183.115*/("""total"""),format.raw/*183.120*/("""}"""),format.raw/*183.121*/("""</span>
                    </div>
                </div>
                <div class="order-info-left">
                    <div>
                        <span class="info-item-name">收货人信息：</span>
                        <span style="margin-left:5px">$"""),format.raw/*189.56*/("""{"""),format.raw/*189.57*/("""consignee_name"""),format.raw/*189.71*/("""}"""),format.raw/*189.72*/("""</span>
                        <span style="margin-left:10px">$"""),format.raw/*190.57*/("""{"""),format.raw/*190.58*/("""consignee_phone"""),format.raw/*190.73*/("""}"""),format.raw/*190.74*/("""</span>
                        <span style="margin-left:10px; max-width:500px; overflow:hidden;height: 30px;">$"""),format.raw/*191.105*/("""{"""),format.raw/*191.106*/("""address"""),format.raw/*191.113*/("""}"""),format.raw/*191.114*/("""</span>
                        <span style="margin-left:10px">$"""),format.raw/*192.57*/("""{"""),format.raw/*192.58*/("""post_code"""),format.raw/*192.67*/("""}"""),format.raw/*192.68*/("""</span>
                    </div>
                    <div>
                        <span class="info-item-name">需求联系人：</span>
                        """),format.raw/*196.25*/("""{"""),format.raw/*196.26*/("""{"""),format.raw/*196.27*/("""if contact_name"""),format.raw/*196.42*/("""}"""),format.raw/*196.43*/("""}"""),format.raw/*196.44*/("""
                            """),format.raw/*197.29*/("""<span style="margin-left:5px">$"""),format.raw/*197.60*/("""{"""),format.raw/*197.61*/("""contact_name"""),format.raw/*197.73*/("""}"""),format.raw/*197.74*/("""</span>
                        """),format.raw/*198.25*/("""{"""),format.raw/*198.26*/("""{"""),format.raw/*198.27*/("""else"""),format.raw/*198.31*/("""}"""),format.raw/*198.32*/("""}"""),format.raw/*198.33*/("""
                            """),format.raw/*199.29*/("""<span style="margin-left:5px">$"""),format.raw/*199.60*/("""{"""),format.raw/*199.61*/("""consignee_name"""),format.raw/*199.75*/("""}"""),format.raw/*199.76*/("""</span>
                        """),format.raw/*200.25*/("""{"""),format.raw/*200.26*/("""{"""),format.raw/*200.27*/("""/if"""),format.raw/*200.30*/("""}"""),format.raw/*200.31*/("""}"""),format.raw/*200.32*/("""
                        """),format.raw/*201.25*/("""{"""),format.raw/*201.26*/("""{"""),format.raw/*201.27*/("""if contact_phone"""),format.raw/*201.43*/("""}"""),format.raw/*201.44*/("""}"""),format.raw/*201.45*/("""
                            """),format.raw/*202.29*/("""<span style="margin-left:10px">$"""),format.raw/*202.61*/("""{"""),format.raw/*202.62*/("""contact_phone"""),format.raw/*202.75*/("""}"""),format.raw/*202.76*/("""</span>
                        """),format.raw/*203.25*/("""{"""),format.raw/*203.26*/("""{"""),format.raw/*203.27*/("""else"""),format.raw/*203.31*/("""}"""),format.raw/*203.32*/("""}"""),format.raw/*203.33*/("""
                            """),format.raw/*204.29*/("""<span style="margin-left:5px">$"""),format.raw/*204.60*/("""{"""),format.raw/*204.61*/("""consignee_phone"""),format.raw/*204.76*/("""}"""),format.raw/*204.77*/("""</span>
                        """),format.raw/*205.25*/("""{"""),format.raw/*205.26*/("""{"""),format.raw/*205.27*/("""/if"""),format.raw/*205.30*/("""}"""),format.raw/*205.31*/("""}"""),format.raw/*205.32*/("""
                        """),format.raw/*206.25*/("""{"""),format.raw/*206.26*/("""{"""),format.raw/*206.27*/("""if contact_qq"""),format.raw/*206.40*/("""}"""),format.raw/*206.41*/("""}"""),format.raw/*206.42*/("""
                            """),format.raw/*207.29*/("""<span style="margin-left:10px">QQ：$"""),format.raw/*207.64*/("""{"""),format.raw/*207.65*/("""contact_qq"""),format.raw/*207.75*/("""}"""),format.raw/*207.76*/("""</span>
                        """),format.raw/*208.25*/("""{"""),format.raw/*208.26*/("""{"""),format.raw/*208.27*/("""/if"""),format.raw/*208.30*/("""}"""),format.raw/*208.31*/("""}"""),format.raw/*208.32*/("""
                    """),format.raw/*209.21*/("""</div>
                    """),format.raw/*210.21*/("""{"""),format.raw/*210.22*/("""{"""),format.raw/*210.23*/("""if invoice_title"""),format.raw/*210.39*/("""}"""),format.raw/*210.40*/("""}"""),format.raw/*210.41*/("""
                        """),format.raw/*211.25*/("""<div>
                            <span class="info-item-name">发票抬头：</span>
                            <span style="margin-left:17px; max-width:650px; overflow:hidden;height: 30px;">$"""),format.raw/*213.109*/("""{"""),format.raw/*213.110*/("""invoice_title"""),format.raw/*213.123*/("""}"""),format.raw/*213.124*/("""</span>
                        </div>
                    """),format.raw/*215.21*/("""{"""),format.raw/*215.22*/("""{"""),format.raw/*215.23*/("""/if"""),format.raw/*215.26*/("""}"""),format.raw/*215.27*/("""}"""),format.raw/*215.28*/("""
                    """),format.raw/*216.21*/("""{"""),format.raw/*216.22*/("""{"""),format.raw/*216.23*/("""if remark"""),format.raw/*216.32*/("""}"""),format.raw/*216.33*/("""}"""),format.raw/*216.34*/("""
                        """),format.raw/*217.25*/("""<div>
                            <span class="info-item-name" style="vertical-align: top;">备注信息：</span>
                            <span style="margin:3px 0 3px 17px; max-width:650px; line-height: 24px; vertical-align: top;word-break: break-all;">$"""),format.raw/*219.146*/("""{"""),format.raw/*219.147*/("""remark"""),format.raw/*219.153*/("""}"""),format.raw/*219.154*/("""</span>
                        </div>
                    """),format.raw/*221.21*/("""{"""),format.raw/*221.22*/("""{"""),format.raw/*221.23*/("""/if"""),format.raw/*221.26*/("""}"""),format.raw/*221.27*/("""}"""),format.raw/*221.28*/("""
                    """),format.raw/*222.21*/("""{"""),format.raw/*222.22*/("""{"""),format.raw/*222.23*/("""if delivery_time"""),format.raw/*222.39*/("""}"""),format.raw/*222.40*/("""}"""),format.raw/*222.41*/("""
                        """),format.raw/*223.25*/("""<div>
                            <span class="info-item-name">配送时间：</span>
                            <span style="margin-left:17px; max-width:650px; overflow:hidden;height: 30px; color:#f54404">$"""),format.raw/*225.123*/("""{"""),format.raw/*225.124*/("""delivery_time"""),format.raw/*225.137*/("""}"""),format.raw/*225.138*/("""</span>
                        </div>
                    """),format.raw/*227.21*/("""{"""),format.raw/*227.22*/("""{"""),format.raw/*227.23*/("""/if"""),format.raw/*227.26*/("""}"""),format.raw/*227.27*/("""}"""),format.raw/*227.28*/("""
                    """),format.raw/*228.21*/("""{"""),format.raw/*228.22*/("""{"""),format.raw/*228.23*/("""if support"""),format.raw/*228.33*/("""}"""),format.raw/*228.34*/("""}"""),format.raw/*228.35*/("""
                        """),format.raw/*229.25*/("""<div>
                            <span class="info-item-name">专属客服：</span>
                            <span style="margin-left:17px; max-width:450px; overflow:hidden;height: 30px; color:#f54404">$"""),format.raw/*231.123*/("""{"""),format.raw/*231.124*/("""support"""),format.raw/*231.131*/("""}"""),format.raw/*231.132*/("""</span>
                            <span style="font-size:12px; ">（有问题直接联系专属客服）</span>
                        </div>
                    """),format.raw/*234.21*/("""{"""),format.raw/*234.22*/("""{"""),format.raw/*234.23*/("""/if"""),format.raw/*234.26*/("""}"""),format.raw/*234.27*/("""}"""),format.raw/*234.28*/("""
                """),format.raw/*235.17*/("""</div>
            </div>
        </div>
    </script>

    <div class="modal-layer"></div>
    <div class="modal" id="cancel_order_modal">
        <div class="modal-head"><a class="close"></a></div>
        <div class="modal-body">
            <div class="tip">
                <div class="message sad">确定要取消订单吗？</div>
            </div>
        </div>
        <div class="modal-foot"><a class="btn left no-stay">取消</a><a class="btn right">确定</a></div>
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
""")))}/*282.2*/ {_display_(Seq[Any](format.raw/*282.4*/("""
    """),format.raw/*283.5*/("""<script type="text/javascript" src="/assets/js/jquery.tmpl.min.js"></script>
	<script type="text/javascript" src="/assets/js/common.js"></script>
    <script type="text/javascript" src="/assets/js/order.js"></script>
""")))}),format.raw/*286.2*/("""
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
object order extends order_Scope0.order
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/order.scala.html
                  HASH: b77aa2e2ef1d185ebace0d69e82b43ed44662dde
                  MATRIX: 553->1|694->47|722->50|742->62|781->64|809->66|896->136|934->138|962->140|1247->396|1277->397|1308->399|1338->400|1443->477|1472->478|1502->480|1531->481|1606->528|1635->529|1665->531|1694->532|1804->614|1833->615|1869->623|1898->624|1953->651|1982->652|2011->653|2162->775|2192->776|2222->777|2267->794|2335->834|2364->835|2393->836|2433->848|2462->849|2491->850|2540->871|2591->894|2620->895|2650->897|2679->898|2734->925|2763->926|2792->927|2824->931|2853->932|2882->933|2931->954|3056->1051|3085->1052|3114->1053|3145->1056|3174->1057|3203->1058|3248->1075|3296->1095|3325->1096|3354->1097|3385->1100|3414->1101|3443->1102|3484->1115|3556->1159|3585->1160|3614->1161|3695->1214|3724->1215|3753->1216|3802->1237|3896->1303|3925->1304|3954->1305|4051->1374|4080->1375|4109->1376|4158->1397|4298->1509|4327->1510|4356->1511|4387->1514|4416->1515|4445->1516|4486->1529|4579->1595|4608->1596|4637->1597|4690->1622|4719->1623|4748->1624|4789->1637|4818->1638|4847->1639|4887->1651|4916->1652|4945->1653|4990->1670|5019->1671|5048->1672|5099->1695|5128->1696|5157->1697|5202->1714|5289->1773|5318->1774|5347->1775|5379->1779|5408->1780|5437->1781|5482->1798|5553->1841|5582->1842|5611->1843|5642->1846|5671->1847|5700->1848|5741->1861|5770->1862|5799->1863|5831->1867|5860->1868|5889->1869|5934->1886|6026->1950|6055->1951|6084->1952|6115->1955|6144->1956|6173->1957|6209->1966|6238->1967|6267->1968|6364->2037|6393->2038|6422->2039|6463->2052|6525->2087|6554->2088|6583->2089|6640->2118|6669->2119|6698->2120|6739->2133|6803->2170|6832->2171|6861->2172|6920->2203|6949->2204|6978->2205|7019->2218|7079->2251|7108->2252|7137->2253|7191->2279|7220->2280|7249->2281|7290->2294|7355->2332|7384->2333|7413->2334|7467->2360|7496->2361|7525->2362|7566->2375|7631->2413|7660->2414|7689->2415|7720->2418|7749->2419|7778->2420|7814->2429|7942->2529|7971->2530|8000->2531|8040->2543|8069->2544|8098->2545|8139->2558|8835->3226|8864->3227|8893->3228|8939->3246|8968->3247|8997->3248|9050->3273|9092->3287|9121->3288|9156->3295|9185->3296|9437->3520|9466->3521|9509->3536|9538->3537|9568->3539|9597->3540|9635->3550|9664->3551|9706->3564|9736->3565|9788->3588|9818->3589|10054->3797|10083->3798|10126->3813|10155->3814|10185->3816|10214->3817|10252->3827|10281->3828|10374->3893|10403->3894|10441->3904|10470->3905|10568->3975|10597->3976|10635->3986|10664->3987|10948->4243|10977->4244|11041->4280|11070->4281|11190->4373|11219->4374|11260->4387|11289->4388|11406->4477|11435->4478|11464->4479|11504->4491|11533->4492|11562->4493|11623->4526|11692->4567|11721->4568|11777->4595|11807->4596|11862->4622|11892->4623|11940->4642|11970->4643|12024->4668|12054->4669|12102->4688|12132->4689|12197->4726|12226->4727|12255->4728|12287->4732|12316->4733|12345->4734|12406->4767|12529->4862|12558->4863|12587->4864|12618->4867|12647->4868|12676->4869|12738->4902|12876->5011|12906->5012|12936->5013|12977->5025|13007->5026|13037->5027|13099->5060|13223->5155|13253->5156|13283->5157|13316->5161|13346->5162|13376->5163|13438->5196|13540->5269|13570->5270|13600->5271|13632->5274|13662->5275|13692->5276|13750->5305|13835->5361|13865->5362|13895->5363|13929->5368|13959->5369|13989->5370|14039->5391|14102->5425|14132->5426|14162->5427|14219->5455|14249->5456|14279->5457|14333->5482|14624->5744|14654->5745|14684->5746|14740->5773|14770->5774|14800->5775|14854->5800|14897->5814|14927->5815|14965->5824|14995->5825|15040->5841|15070->5842|15128->5871|15158->5872|15422->6107|15452->6108|15507->6133|15538->6134|15838->6405|15868->6406|15909->6418|15939->6419|16038->6489|16068->6490|16109->6502|16139->6503|16418->6753|16448->6754|16478->6755|16528->6776|16558->6777|16588->6778|16650->6811|16725->6857|16755->6858|16785->6859|16818->6863|16848->6864|16878->6865|16940->6898|16975->6904|17005->6905|17072->6943|17102->6944|17170->6983|17200->6984|17230->6985|17262->6988|17292->6989|17322->6990|17380->7019|17555->7165|17585->7166|17615->7167|17658->7181|17688->7182|17718->7183|17780->7216|17850->7257|17880->7258|17939->7287|17970->7288|18026->7314|18057->7315|18108->7336|18139->7337|18194->7362|18225->7363|18276->7384|18307->7385|18373->7422|18403->7423|18433->7424|18466->7428|18496->7429|18526->7430|18588->7463|18712->7558|18742->7559|18772->7560|18804->7563|18834->7564|18864->7565|18926->7598|19064->7707|19094->7708|19124->7709|19167->7723|19197->7724|19227->7725|19289->7758|19413->7853|19443->7854|19473->7855|19506->7859|19536->7860|19566->7861|19628->7894|19730->7967|19760->7968|19790->7969|19822->7972|19852->7973|19882->7974|19940->8003|20029->8063|20059->8064|20089->8065|20123->8070|20153->8071|20183->8072|20233->8093|20263->8094|20293->8095|20325->8098|20355->8099|20385->8100|20435->8121|20937->8594|20967->8595|21005->8604|21035->8605|21426->8967|21456->8968|21493->8976|21523->8977|21732->9157|21762->9158|21800->9167|21830->9168|22100->9408|22131->9409|22166->9414|22197->9415|22478->9667|22508->9668|22551->9682|22581->9683|22674->9747|22704->9748|22748->9763|22778->9764|22920->9876|22951->9877|22988->9884|23019->9885|23112->9949|23142->9950|23180->9959|23210->9960|23391->10112|23421->10113|23451->10114|23495->10129|23525->10130|23555->10131|23613->10160|23673->10191|23703->10192|23744->10204|23774->10205|23835->10237|23865->10238|23895->10239|23928->10243|23958->10244|23988->10245|24046->10274|24106->10305|24136->10306|24179->10320|24209->10321|24270->10353|24300->10354|24330->10355|24362->10358|24392->10359|24422->10360|24476->10385|24506->10386|24536->10387|24581->10403|24611->10404|24641->10405|24699->10434|24760->10466|24790->10467|24832->10480|24862->10481|24923->10513|24953->10514|24983->10515|25016->10519|25046->10520|25076->10521|25134->10550|25194->10581|25224->10582|25268->10597|25298->10598|25359->10630|25389->10631|25419->10632|25451->10635|25481->10636|25511->10637|25565->10662|25595->10663|25625->10664|25667->10677|25697->10678|25727->10679|25785->10708|25849->10743|25879->10744|25918->10754|25948->10755|26009->10787|26039->10788|26069->10789|26101->10792|26131->10793|26161->10794|26211->10815|26267->10842|26297->10843|26327->10844|26372->10860|26402->10861|26432->10862|26486->10887|26700->11071|26731->11072|26774->11085|26805->11086|26893->11145|26923->11146|26953->11147|26985->11150|27015->11151|27045->11152|27095->11173|27125->11174|27155->11175|27193->11184|27223->11185|27253->11186|27307->11211|27587->11461|27618->11462|27654->11468|27685->11469|27773->11528|27803->11529|27833->11530|27865->11533|27895->11534|27925->11535|27975->11556|28005->11557|28035->11558|28080->11574|28110->11575|28140->11576|28194->11601|28422->11799|28453->11800|28496->11813|28527->11814|28615->11873|28645->11874|28675->11875|28707->11878|28737->11879|28767->11880|28817->11901|28847->11902|28877->11903|28916->11913|28946->11914|28976->11915|29030->11940|29258->12138|29289->12139|29326->12146|29357->12147|29525->12286|29555->12287|29585->12288|29617->12291|29647->12292|29677->12293|29723->12310|31299->13867|31339->13869|31372->13874|31621->14092
                  LINES: 20->1|25->1|27->3|27->3|27->3|28->4|29->5|29->5|30->6|35->11|35->11|35->11|35->11|36->12|36->12|36->12|36->12|37->13|37->13|37->13|37->13|38->14|38->14|38->14|38->14|39->15|39->15|39->15|39->15|39->15|39->15|40->16|41->17|41->17|41->17|41->17|41->17|41->17|42->18|42->18|42->18|42->18|42->18|43->19|43->19|43->19|43->19|43->19|43->19|44->20|45->21|45->21|45->21|45->21|45->21|45->21|46->22|47->23|47->23|47->23|47->23|47->23|47->23|48->24|49->25|49->25|49->25|49->25|49->25|49->25|50->26|51->27|51->27|51->27|51->27|51->27|51->27|52->28|53->29|53->29|53->29|53->29|53->29|53->29|54->30|57->33|57->33|57->33|57->33|57->33|57->33|58->34|58->34|58->34|58->34|58->34|58->34|59->35|59->35|59->35|59->35|59->35|59->35|60->36|61->37|61->37|61->37|61->37|61->37|61->37|62->38|63->39|63->39|63->39|63->39|63->39|63->39|64->40|64->40|64->40|64->40|64->40|64->40|65->41|66->42|66->42|66->42|66->42|66->42|66->42|67->43|67->43|67->43|67->43|67->43|67->43|68->44|69->45|69->45|69->45|69->45|69->45|69->45|70->46|71->47|71->47|71->47|71->47|71->47|71->47|72->48|73->49|73->49|73->49|73->49|73->49|73->49|74->50|75->51|75->51|75->51|75->51|75->51|75->51|76->52|77->53|77->53|77->53|77->53|77->53|77->53|78->54|81->57|81->57|81->57|81->57|81->57|81->57|82->58|99->75|99->75|99->75|99->75|99->75|99->75|100->76|100->76|100->76|100->76|100->76|104->80|104->80|104->80|104->80|104->80|104->80|104->80|104->80|104->80|104->80|104->80|104->80|107->83|107->83|107->83|107->83|107->83|107->83|107->83|107->83|108->84|108->84|108->84|108->84|109->85|109->85|109->85|109->85|115->91|115->91|115->91|115->91|117->93|117->93|117->93|117->93|119->95|119->95|119->95|119->95|119->95|119->95|120->96|120->96|120->96|120->96|120->96|120->96|120->96|120->96|120->96|120->96|120->96|120->96|120->96|121->97|121->97|121->97|121->97|121->97|121->97|122->98|123->99|123->99|123->99|123->99|123->99|123->99|124->100|125->101|125->101|125->101|125->101|125->101|125->101|126->102|127->103|127->103|127->103|127->103|127->103|127->103|128->104|129->105|129->105|129->105|129->105|129->105|129->105|130->106|132->108|132->108|132->108|132->108|132->108|132->108|133->109|134->110|134->110|134->110|134->110|134->110|134->110|135->111|140->116|140->116|140->116|140->116|140->116|140->116|141->117|141->117|141->117|141->117|141->117|141->117|141->117|141->117|141->117|145->121|145->121|145->121|145->121|149->125|149->125|149->125|149->125|150->126|150->126|150->126|150->126|156->132|156->132|156->132|156->132|156->132|156->132|157->133|158->134|158->134|158->134|158->134|158->134|158->134|159->135|159->135|159->135|159->135|159->135|160->136|160->136|160->136|160->136|160->136|160->136|161->137|164->140|164->140|164->140|164->140|164->140|164->140|165->141|165->141|165->141|165->141|165->141|165->141|165->141|165->141|165->141|165->141|165->141|165->141|165->141|166->142|166->142|166->142|166->142|166->142|166->142|167->143|168->144|168->144|168->144|168->144|168->144|168->144|169->145|170->146|170->146|170->146|170->146|170->146|170->146|171->147|172->148|172->148|172->148|172->148|172->148|172->148|173->149|174->150|174->150|174->150|174->150|174->150|174->150|175->151|177->153|177->153|177->153|177->153|177->153|177->153|178->154|178->154|178->154|178->154|178->154|178->154|179->155|191->167|191->167|191->167|191->167|199->175|199->175|199->175|199->175|203->179|203->179|203->179|203->179|207->183|207->183|207->183|207->183|213->189|213->189|213->189|213->189|214->190|214->190|214->190|214->190|215->191|215->191|215->191|215->191|216->192|216->192|216->192|216->192|220->196|220->196|220->196|220->196|220->196|220->196|221->197|221->197|221->197|221->197|221->197|222->198|222->198|222->198|222->198|222->198|222->198|223->199|223->199|223->199|223->199|223->199|224->200|224->200|224->200|224->200|224->200|224->200|225->201|225->201|225->201|225->201|225->201|225->201|226->202|226->202|226->202|226->202|226->202|227->203|227->203|227->203|227->203|227->203|227->203|228->204|228->204|228->204|228->204|228->204|229->205|229->205|229->205|229->205|229->205|229->205|230->206|230->206|230->206|230->206|230->206|230->206|231->207|231->207|231->207|231->207|231->207|232->208|232->208|232->208|232->208|232->208|232->208|233->209|234->210|234->210|234->210|234->210|234->210|234->210|235->211|237->213|237->213|237->213|237->213|239->215|239->215|239->215|239->215|239->215|239->215|240->216|240->216|240->216|240->216|240->216|240->216|241->217|243->219|243->219|243->219|243->219|245->221|245->221|245->221|245->221|245->221|245->221|246->222|246->222|246->222|246->222|246->222|246->222|247->223|249->225|249->225|249->225|249->225|251->227|251->227|251->227|251->227|251->227|251->227|252->228|252->228|252->228|252->228|252->228|252->228|253->229|255->231|255->231|255->231|255->231|258->234|258->234|258->234|258->234|258->234|258->234|259->235|306->282|306->282|307->283|310->286
                  -- GENERATED --
              */
          