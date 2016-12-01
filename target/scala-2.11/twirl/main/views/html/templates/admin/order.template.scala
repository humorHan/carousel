
package views.html.templates.admin

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
import views.html.templates.{order => _, _}

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("后台订单详情")/*4.16*/ {_display_(Seq[Any](format.raw/*4.18*/("""
	"""),format.raw/*5.2*/("""<link rel="stylesheet" type="text/css" href="/assets/css/order.css">
""")))}/*6.2*/ {_display_(Seq[Any](format.raw/*6.4*/("""
	"""),format.raw/*7.2*/("""<div class="box">
        <div class="container" id="admin_order_container">
        </div>
    </div>
    <script id="admin_template" type="text/x-jquery-tmpl">
        <p class="breadcrumb">当前位置：<a href="/">首页</a> > <a href="/admin/order/list ">订单列表</a> > <a class="current">订单：$"""),format.raw/*12.120*/("""{"""),format.raw/*12.121*/("""id"""),format.raw/*12.123*/("""}"""),format.raw/*12.124*/("""</a></p>
        <div class="order-status-area" id="status_change" data-id="$"""),format.raw/*13.69*/("""{"""),format.raw/*13.70*/("""id"""),format.raw/*13.72*/("""}"""),format.raw/*13.73*/("""">
            <span class="order-number">订单号：$"""),format.raw/*14.45*/("""{"""),format.raw/*14.46*/("""id"""),format.raw/*14.48*/("""}"""),format.raw/*14.49*/("""</span>
            <span class="order-status">订单状态：<span style="color: #66cc66">$"""),format.raw/*15.75*/("""{"""),format.raw/*15.76*/("""status_t"""),format.raw/*15.84*/("""}"""),format.raw/*15.85*/("""</span></span>
            """),format.raw/*16.13*/("""{"""),format.raw/*16.14*/("""{"""),format.raw/*16.15*/("""html change_status_btn"""),format.raw/*16.37*/("""}"""),format.raw/*16.38*/("""}"""),format.raw/*16.39*/("""
            """),format.raw/*17.13*/("""{"""),format.raw/*17.14*/("""{"""),format.raw/*17.15*/("""if status === 'ONLINE_PAID' && payment === 'ONLINE' """),format.raw/*17.67*/("""}"""),format.raw/*17.68*/("""}"""),format.raw/*17.69*/("""
                """),format.raw/*18.17*/("""<span class="cancel-order"><a id="admin_cancel_order_refund" href="javascript:;" title="在线支付取消订单时可以直接退款">取消订单并退款</a></span>
            """),format.raw/*19.13*/("""{"""),format.raw/*19.14*/("""{"""),format.raw/*19.15*/("""/if"""),format.raw/*19.18*/("""}"""),format.raw/*19.19*/("""}"""),format.raw/*19.20*/("""
            """),format.raw/*20.13*/("""{"""),format.raw/*20.14*/("""{"""),format.raw/*20.15*/("""if status !== 'FINISHED' && status !== 'CANCELED'"""),format.raw/*20.64*/("""}"""),format.raw/*20.65*/("""}"""),format.raw/*20.66*/("""
                """),format.raw/*21.17*/("""<span class="cancel-order"><a id="admin_cancel_order" href="javascript:;">取消订单</a></span>
            """),format.raw/*22.13*/("""{"""),format.raw/*22.14*/("""{"""),format.raw/*22.15*/("""/if"""),format.raw/*22.18*/("""}"""),format.raw/*22.19*/("""}"""),format.raw/*22.20*/("""
        """),format.raw/*23.9*/("""</div>
        <div class="order-prompt">
        """),format.raw/*25.9*/("""{"""),format.raw/*25.10*/("""{"""),format.raw/*25.11*/("""if status === 'SUBMITTED'"""),format.raw/*25.36*/("""}"""),format.raw/*25.37*/("""}"""),format.raw/*25.38*/("""
            """),format.raw/*26.13*/("""{"""),format.raw/*26.14*/("""{"""),format.raw/*26.15*/("""if !is_priced"""),format.raw/*26.28*/("""}"""),format.raw/*26.29*/("""}"""),format.raw/*26.30*/("""
                """),format.raw/*27.17*/("""订单已提交，该订单包含未知价格的按需定制商品，请尽快确定订单金额，以便进行下一步操作。
            """),format.raw/*28.13*/("""{"""),format.raw/*28.14*/("""{"""),format.raw/*28.15*/("""else"""),format.raw/*28.19*/("""}"""),format.raw/*28.20*/("""}"""),format.raw/*28.21*/("""
                """),format.raw/*29.17*/("""{"""),format.raw/*29.18*/("""{"""),format.raw/*29.19*/("""if payment === 'ONLINE'"""),format.raw/*29.42*/("""}"""),format.raw/*29.43*/("""}"""),format.raw/*29.44*/("""
                    """),format.raw/*30.21*/("""订单已提交，等待客户付款。
                """),format.raw/*31.17*/("""{"""),format.raw/*31.18*/("""{"""),format.raw/*31.19*/("""else"""),format.raw/*31.23*/("""}"""),format.raw/*31.24*/("""}"""),format.raw/*31.25*/("""
                    """),format.raw/*32.21*/("""订单已提交，请尽快确定是否接单。
                """),format.raw/*33.17*/("""{"""),format.raw/*33.18*/("""{"""),format.raw/*33.19*/("""/if"""),format.raw/*33.22*/("""}"""),format.raw/*33.23*/("""}"""),format.raw/*33.24*/("""
            """),format.raw/*34.13*/("""{"""),format.raw/*34.14*/("""{"""),format.raw/*34.15*/("""/if"""),format.raw/*34.18*/("""}"""),format.raw/*34.19*/("""}"""),format.raw/*34.20*/(""" 
        """),format.raw/*35.9*/("""{"""),format.raw/*35.10*/("""{"""),format.raw/*35.11*/("""else status === 'DELIVERY_CONFIRMED'"""),format.raw/*35.47*/("""}"""),format.raw/*35.48*/("""}"""),format.raw/*35.49*/("""
            """),format.raw/*36.13*/("""已接单，等待客户付款。如果客户已通过线下方式支付了款项，请进行“确认付款”操作。
        """),format.raw/*37.9*/("""{"""),format.raw/*37.10*/("""{"""),format.raw/*37.11*/("""else status === 'ONLINE_PAID'"""),format.raw/*37.40*/("""}"""),format.raw/*37.41*/("""}"""),format.raw/*37.42*/("""
            """),format.raw/*38.13*/("""客户付款成功，请尽快确定是否接单。
        """),format.raw/*39.9*/("""{"""),format.raw/*39.10*/("""{"""),format.raw/*39.11*/("""else status === 'DELIVERY_PAID' || status === 'ONLINE_CONFIRMED'"""),format.raw/*39.75*/("""}"""),format.raw/*39.76*/("""}"""),format.raw/*39.77*/("""
            """),format.raw/*40.13*/("""请在确认客户收到货物后，请进行“完成订单”操作。
        """),format.raw/*41.9*/("""{"""),format.raw/*41.10*/("""{"""),format.raw/*41.11*/("""else status === 'FINISHED'"""),format.raw/*41.37*/("""}"""),format.raw/*41.38*/("""}"""),format.raw/*41.39*/("""
            """),format.raw/*42.13*/("""订单已经完成。
        """),format.raw/*43.9*/("""{"""),format.raw/*43.10*/("""{"""),format.raw/*43.11*/("""else status === 'CANCELED'"""),format.raw/*43.37*/("""}"""),format.raw/*43.38*/("""}"""),format.raw/*43.39*/("""
            """),format.raw/*44.13*/("""订单已经取消。
        """),format.raw/*45.9*/("""{"""),format.raw/*45.10*/("""{"""),format.raw/*45.11*/("""/if"""),format.raw/*45.14*/("""}"""),format.raw/*45.15*/("""}"""),format.raw/*45.16*/("""
        """),format.raw/*46.9*/("""</div>
        <div class="order-process">
            <span class="process-container">
                """),format.raw/*49.17*/("""{"""),format.raw/*49.18*/("""{"""),format.raw/*49.19*/("""html process"""),format.raw/*49.31*/("""}"""),format.raw/*49.32*/("""}"""),format.raw/*49.33*/("""
            """),format.raw/*50.13*/("""</span>
        </div>
        <div class="form">
            <div class="form-title">
                <span class="form-title-span">商品清单</span>
                """),format.raw/*55.17*/("""{"""),format.raw/*55.18*/("""{"""),format.raw/*55.19*/("""if is_edit"""),format.raw/*55.29*/("""}"""),format.raw/*55.30*/("""}"""),format.raw/*55.31*/("""
                    """),format.raw/*56.21*/("""<span class="edit-order"><a href="/admin/order/edit?id=$"""),format.raw/*56.77*/("""{"""),format.raw/*56.78*/("""id"""),format.raw/*56.80*/("""}"""),format.raw/*56.81*/("""">编辑订单</a></span>
                """),format.raw/*57.17*/("""{"""),format.raw/*57.18*/("""{"""),format.raw/*57.19*/("""/if"""),format.raw/*57.22*/("""}"""),format.raw/*57.23*/("""}"""),format.raw/*57.24*/("""
            """),format.raw/*58.13*/("""</div>
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
                    """),format.raw/*70.21*/("""{"""),format.raw/*70.22*/("""{"""),format.raw/*70.23*/("""each(i,item) items"""),format.raw/*70.41*/("""}"""),format.raw/*70.42*/("""}"""),format.raw/*70.43*/("""
                        """),format.raw/*71.25*/("""<tr data-id="$"""),format.raw/*71.39*/("""{"""),format.raw/*71.40*/("""item.id"""),format.raw/*71.47*/("""}"""),format.raw/*71.48*/("""">
                            <td class="item-product">
                                <div>
                                    <div class="item-product-img">
                                        <a href="/product?id=$"""),format.raw/*75.63*/("""{"""),format.raw/*75.64*/("""item.product_id"""),format.raw/*75.79*/("""}"""),format.raw/*75.80*/("""#$"""),format.raw/*75.82*/("""{"""),format.raw/*75.83*/("""item.brief"""),format.raw/*75.93*/("""}"""),format.raw/*75.94*/(""""><img src="$"""),format.raw/*75.107*/("""{"""),format.raw/*75.108*/("""img_link+item.image_key"""),format.raw/*75.131*/("""}"""),format.raw/*75.132*/("""?imageView2/1/w/80/h/80/"></a>
                                    </div>
                                    <div class="item-product-describe">
                                        <a href="/product?id=$"""),format.raw/*78.63*/("""{"""),format.raw/*78.64*/("""item.product_id"""),format.raw/*78.79*/("""}"""),format.raw/*78.80*/("""#$"""),format.raw/*78.82*/("""{"""),format.raw/*78.83*/("""item.brief"""),format.raw/*78.93*/("""}"""),format.raw/*78.94*/("""">
                                            <p class="title">$"""),format.raw/*79.63*/("""{"""),format.raw/*79.64*/("""item.title"""),format.raw/*79.74*/("""}"""),format.raw/*79.75*/("""</p>
                                            <p class="describe">$"""),format.raw/*80.66*/("""{"""),format.raw/*80.67*/("""item.brief"""),format.raw/*80.77*/("""}"""),format.raw/*80.78*/("""</p>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td class="item-price">
                                <div>$"""),format.raw/*86.39*/("""{"""),format.raw/*86.40*/("""processData.processPrice(item.price)"""),format.raw/*86.76*/("""}"""),format.raw/*86.77*/("""</div>
                            </td>
                            <td class="item-num">x$"""),format.raw/*88.52*/("""{"""),format.raw/*88.53*/("""item.quantity"""),format.raw/*88.66*/("""}"""),format.raw/*88.67*/("""</td>
                            <td class="item-deal">
                                """),format.raw/*90.33*/("""{"""),format.raw/*90.34*/("""{"""),format.raw/*90.35*/("""if item.file"""),format.raw/*90.47*/("""}"""),format.raw/*90.48*/("""}"""),format.raw/*90.49*/("""
                                """),format.raw/*91.33*/("""<a class="deal-block upload-file" href="$"""),format.raw/*91.74*/("""{"""),format.raw/*91.75*/("""img_link+item.file.file_key"""),format.raw/*91.102*/("""}"""),format.raw/*91.103*/("""" target="_blank" title="$"""),format.raw/*91.129*/("""{"""),format.raw/*91.130*/("""item.file.file_name"""),format.raw/*91.149*/("""}"""),format.raw/*91.150*/("""" style="display:block">$"""),format.raw/*91.175*/("""{"""),format.raw/*91.176*/("""item.file.file_name"""),format.raw/*91.195*/("""}"""),format.raw/*91.196*/("""</a>
                                """),format.raw/*92.33*/("""{"""),format.raw/*92.34*/("""{"""),format.raw/*92.35*/("""else"""),format.raw/*92.39*/("""}"""),format.raw/*92.40*/("""}"""),format.raw/*92.41*/("""
                                """),format.raw/*93.33*/("""<a class="deal-block upload-file" href="" target="_blank"></a>
                                """),format.raw/*94.33*/("""{"""),format.raw/*94.34*/("""{"""),format.raw/*94.35*/("""/if"""),format.raw/*94.38*/("""}"""),format.raw/*94.39*/("""}"""),format.raw/*94.40*/("""
                                """),format.raw/*95.33*/("""<a class="deal-block add-file">上传文件<input class="hide-file" type="file"></a>
                                """),format.raw/*96.33*/("""{"""),format.raw/*96.34*/("""{"""),format.raw/*96.35*/("""if item.file"""),format.raw/*96.47*/("""}"""),format.raw/*96.48*/("""}"""),format.raw/*96.49*/("""
                                """),format.raw/*97.33*/("""<a class="deal-block delete-file" style="display:block">删除</a>
                                """),format.raw/*98.33*/("""{"""),format.raw/*98.34*/("""{"""),format.raw/*98.35*/("""else"""),format.raw/*98.39*/("""}"""),format.raw/*98.40*/("""}"""),format.raw/*98.41*/("""
                                """),format.raw/*99.33*/("""<a class="deal-block delete-file">删除</a>
                                """),format.raw/*100.33*/("""{"""),format.raw/*100.34*/("""{"""),format.raw/*100.35*/("""/if"""),format.raw/*100.38*/("""}"""),format.raw/*100.39*/("""}"""),format.raw/*100.40*/("""
                            """),format.raw/*101.29*/("""</td>
                        </tr>
                    """),format.raw/*103.21*/("""{"""),format.raw/*103.22*/("""{"""),format.raw/*103.23*/("""/each"""),format.raw/*103.28*/("""}"""),format.raw/*103.29*/("""}"""),format.raw/*103.30*/("""
                    """),format.raw/*104.21*/("""<!-- 按需定制 -->
                    """),format.raw/*105.21*/("""{"""),format.raw/*105.22*/("""{"""),format.raw/*105.23*/("""if custom_items.length !== 0"""),format.raw/*105.51*/("""}"""),format.raw/*105.52*/("""}"""),format.raw/*105.53*/("""
                        """),format.raw/*106.25*/("""<tr class="on-demand">
                            <td colspan="4">
                                <div class="on-demand-title">按需定制商品<span>（客服MM将与您进一步沟通并确定价格）</span></div>
                            </td>
                        </tr>
                        """),format.raw/*111.25*/("""{"""),format.raw/*111.26*/("""{"""),format.raw/*111.27*/("""each(i,custom) custom_items"""),format.raw/*111.54*/("""}"""),format.raw/*111.55*/("""}"""),format.raw/*111.56*/("""
                        """),format.raw/*112.25*/("""<tr data-id="$"""),format.raw/*112.39*/("""{"""),format.raw/*112.40*/("""custom.id"""),format.raw/*112.49*/("""}"""),format.raw/*112.50*/("""" data-detail="$"""),format.raw/*112.66*/("""{"""),format.raw/*112.67*/("""JSON.stringify(custom.detail)"""),format.raw/*112.96*/("""}"""),format.raw/*112.97*/("""">
                            <td class="item-product">
                                <div>
                                    <div class="item-product-img">
                                        <a class="demand-pop"><img src="$"""),format.raw/*116.74*/("""{"""),format.raw/*116.75*/("""img_link+custom.image_key"""),format.raw/*116.100*/("""}"""),format.raw/*116.101*/("""?imageView2/1/w/80/h/80/"></a>
                                    </div>
                                    <div class="item-product-describe">
                                        <a class="demand-pop">
                                            <p class="title">$"""),format.raw/*120.63*/("""{"""),format.raw/*120.64*/("""custom.title"""),format.raw/*120.76*/("""}"""),format.raw/*120.77*/("""</p>
                                            <p class="describe">$"""),format.raw/*121.66*/("""{"""),format.raw/*121.67*/("""custom.brief"""),format.raw/*121.79*/("""}"""),format.raw/*121.80*/("""</p>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td class="item-price">
                                """),format.raw/*127.33*/("""{"""),format.raw/*127.34*/("""{"""),format.raw/*127.35*/("""if custom.price === 0"""),format.raw/*127.56*/("""}"""),format.raw/*127.57*/("""}"""),format.raw/*127.58*/("""
                                """),format.raw/*128.33*/("""<div>待定</div>
                                """),format.raw/*129.33*/("""{"""),format.raw/*129.34*/("""{"""),format.raw/*129.35*/("""else"""),format.raw/*129.39*/("""}"""),format.raw/*129.40*/("""}"""),format.raw/*129.41*/("""
                                """),format.raw/*130.33*/("""<div>$"""),format.raw/*130.39*/("""{"""),format.raw/*130.40*/("""processData.processPrice(custom.price)"""),format.raw/*130.78*/("""}"""),format.raw/*130.79*/("""</div>
                                """),format.raw/*131.33*/("""{"""),format.raw/*131.34*/("""{"""),format.raw/*131.35*/("""/if"""),format.raw/*131.38*/("""}"""),format.raw/*131.39*/("""}"""),format.raw/*131.40*/("""
                            """),format.raw/*132.29*/("""</td>
                            <td class="item-num">x1</td>
                            <td class="item-deal">
                                """),format.raw/*135.33*/("""{"""),format.raw/*135.34*/("""{"""),format.raw/*135.35*/("""if custom.file"""),format.raw/*135.49*/("""}"""),format.raw/*135.50*/("""}"""),format.raw/*135.51*/("""
                                """),format.raw/*136.33*/("""<a class="deal-block upload-file" href="$"""),format.raw/*136.74*/("""{"""),format.raw/*136.75*/("""img_link+custom.file.file_key"""),format.raw/*136.104*/("""}"""),format.raw/*136.105*/("""" target="_blank" title="$"""),format.raw/*136.131*/("""{"""),format.raw/*136.132*/("""custom.file.file_name"""),format.raw/*136.153*/("""}"""),format.raw/*136.154*/("""" style="display:block">$"""),format.raw/*136.179*/("""{"""),format.raw/*136.180*/("""custom.file.file_name"""),format.raw/*136.201*/("""}"""),format.raw/*136.202*/("""</a>
                                """),format.raw/*137.33*/("""{"""),format.raw/*137.34*/("""{"""),format.raw/*137.35*/("""else"""),format.raw/*137.39*/("""}"""),format.raw/*137.40*/("""}"""),format.raw/*137.41*/("""
                                """),format.raw/*138.33*/("""<a class="deal-block upload-file" href="" target="_blank"></a>
                                """),format.raw/*139.33*/("""{"""),format.raw/*139.34*/("""{"""),format.raw/*139.35*/("""/if"""),format.raw/*139.38*/("""}"""),format.raw/*139.39*/("""}"""),format.raw/*139.40*/("""
                                """),format.raw/*140.33*/("""<a class="deal-block add-file">上传文件<input class="hide-file" type="file"></a>
                                """),format.raw/*141.33*/("""{"""),format.raw/*141.34*/("""{"""),format.raw/*141.35*/("""if custom.file"""),format.raw/*141.49*/("""}"""),format.raw/*141.50*/("""}"""),format.raw/*141.51*/("""
                                """),format.raw/*142.33*/("""<a class="deal-block delete-file" style="display:block">删除</a>
                                """),format.raw/*143.33*/("""{"""),format.raw/*143.34*/("""{"""),format.raw/*143.35*/("""else"""),format.raw/*143.39*/("""}"""),format.raw/*143.40*/("""}"""),format.raw/*143.41*/("""
                                """),format.raw/*144.33*/("""<a class="deal-block delete-file">删除</a>
                                """),format.raw/*145.33*/("""{"""),format.raw/*145.34*/("""{"""),format.raw/*145.35*/("""/if"""),format.raw/*145.38*/("""}"""),format.raw/*145.39*/("""}"""),format.raw/*145.40*/("""
                            """),format.raw/*146.29*/("""</td>
                        </tr>
                        """),format.raw/*148.25*/("""{"""),format.raw/*148.26*/("""{"""),format.raw/*148.27*/("""/each"""),format.raw/*148.32*/("""}"""),format.raw/*148.33*/("""}"""),format.raw/*148.34*/("""
                    """),format.raw/*149.21*/("""{"""),format.raw/*149.22*/("""{"""),format.raw/*149.23*/("""/if"""),format.raw/*149.26*/("""}"""),format.raw/*149.27*/("""}"""),format.raw/*149.28*/("""
                    """),format.raw/*150.21*/("""</tbody>
                </table>
            </div>
        </div>
        <div class="form order-info" style="margin-bottom:20px;">
            <div class="form-title">
                <span class="form-title-span">订单信息</span>
            </div>
            <div class="form-body" style="margin-top: 20px;">
                <div class="order-info-right">
                    <div>
                        <span class="info-item-name">支付方式：</span>
                        <span class="text-content">$"""),format.raw/*162.53*/("""{"""),format.raw/*162.54*/("""payment_t"""),format.raw/*162.63*/("""}"""),format.raw/*162.64*/("""</span>
                    </div>
                    <div>
                        <span class="info-item-name">配送方式：</span>
                        <span class="text-content">普通快递</span>
                    </div>
                    <div>
                        <span class="info-item-name">商品金额：</span>
                        <span class="text-content">￥$"""),format.raw/*170.54*/("""{"""),format.raw/*170.55*/("""amount_t"""),format.raw/*170.63*/("""}"""),format.raw/*170.64*/("""</span>
                    </div>
                    <div>
                        <span class="info-item-name">配送费用：</span>
                        <span class="text-content">￥$"""),format.raw/*174.54*/("""{"""),format.raw/*174.55*/("""freight_t"""),format.raw/*174.64*/("""}"""),format.raw/*174.65*/("""</span>
                    </div>
                    <div>
                        <span class="info-item-name">订单金额：</span>
                        <span class="text-content" style="line-height: 40px; color: #f54404; font-size: 24px;">￥$"""),format.raw/*178.114*/("""{"""),format.raw/*178.115*/("""total"""),format.raw/*178.120*/("""}"""),format.raw/*178.121*/("""</span>
                    </div>
                </div>
                <div class="order-info-left">
                    <div>
                        <span class="info-item-name">收货人信息：</span>
                        <span style="margin-left:5px">$"""),format.raw/*184.56*/("""{"""),format.raw/*184.57*/("""consignee_name"""),format.raw/*184.71*/("""}"""),format.raw/*184.72*/("""</span>
                        <span style="margin-left:10px">$"""),format.raw/*185.57*/("""{"""),format.raw/*185.58*/("""consignee_phone"""),format.raw/*185.73*/("""}"""),format.raw/*185.74*/("""</span>
                        <span style="margin-left:10px; max-width:500px; overflow:hidden;height: 30px;">$"""),format.raw/*186.105*/("""{"""),format.raw/*186.106*/("""address"""),format.raw/*186.113*/("""}"""),format.raw/*186.114*/("""</span>
                        <span style="margin-left:10px">$"""),format.raw/*187.57*/("""{"""),format.raw/*187.58*/("""post_code"""),format.raw/*187.67*/("""}"""),format.raw/*187.68*/("""</span>
                    </div>
                    <div>
                        <span class="info-item-name">需求联系人：</span>
                        """),format.raw/*191.25*/("""{"""),format.raw/*191.26*/("""{"""),format.raw/*191.27*/("""if contact_name"""),format.raw/*191.42*/("""}"""),format.raw/*191.43*/("""}"""),format.raw/*191.44*/("""
                            """),format.raw/*192.29*/("""<span style="margin-left:5px">$"""),format.raw/*192.60*/("""{"""),format.raw/*192.61*/("""contact_name"""),format.raw/*192.73*/("""}"""),format.raw/*192.74*/("""</span>
                        """),format.raw/*193.25*/("""{"""),format.raw/*193.26*/("""{"""),format.raw/*193.27*/("""else"""),format.raw/*193.31*/("""}"""),format.raw/*193.32*/("""}"""),format.raw/*193.33*/("""
                            """),format.raw/*194.29*/("""<span style="margin-left:5px">$"""),format.raw/*194.60*/("""{"""),format.raw/*194.61*/("""consignee_name"""),format.raw/*194.75*/("""}"""),format.raw/*194.76*/("""</span>
                        """),format.raw/*195.25*/("""{"""),format.raw/*195.26*/("""{"""),format.raw/*195.27*/("""/if"""),format.raw/*195.30*/("""}"""),format.raw/*195.31*/("""}"""),format.raw/*195.32*/("""
                        """),format.raw/*196.25*/("""{"""),format.raw/*196.26*/("""{"""),format.raw/*196.27*/("""if contact_phone"""),format.raw/*196.43*/("""}"""),format.raw/*196.44*/("""}"""),format.raw/*196.45*/("""
                            """),format.raw/*197.29*/("""<span style="margin-left:10px">$"""),format.raw/*197.61*/("""{"""),format.raw/*197.62*/("""contact_phone"""),format.raw/*197.75*/("""}"""),format.raw/*197.76*/("""</span>
                        """),format.raw/*198.25*/("""{"""),format.raw/*198.26*/("""{"""),format.raw/*198.27*/("""else"""),format.raw/*198.31*/("""}"""),format.raw/*198.32*/("""}"""),format.raw/*198.33*/("""
                            """),format.raw/*199.29*/("""<span style="margin-left:5px">$"""),format.raw/*199.60*/("""{"""),format.raw/*199.61*/("""consignee_phone"""),format.raw/*199.76*/("""}"""),format.raw/*199.77*/("""</span>
                        """),format.raw/*200.25*/("""{"""),format.raw/*200.26*/("""{"""),format.raw/*200.27*/("""/if"""),format.raw/*200.30*/("""}"""),format.raw/*200.31*/("""}"""),format.raw/*200.32*/("""
                        """),format.raw/*201.25*/("""{"""),format.raw/*201.26*/("""{"""),format.raw/*201.27*/("""if contact_qq"""),format.raw/*201.40*/("""}"""),format.raw/*201.41*/("""}"""),format.raw/*201.42*/("""
                            """),format.raw/*202.29*/("""<span style="margin-left:10px">QQ：$"""),format.raw/*202.64*/("""{"""),format.raw/*202.65*/("""contact_qq"""),format.raw/*202.75*/("""}"""),format.raw/*202.76*/("""</span>
                        """),format.raw/*203.25*/("""{"""),format.raw/*203.26*/("""{"""),format.raw/*203.27*/("""/if"""),format.raw/*203.30*/("""}"""),format.raw/*203.31*/("""}"""),format.raw/*203.32*/("""
                    """),format.raw/*204.21*/("""</div>
                    """),format.raw/*205.21*/("""{"""),format.raw/*205.22*/("""{"""),format.raw/*205.23*/("""if invoice_title"""),format.raw/*205.39*/("""}"""),format.raw/*205.40*/("""}"""),format.raw/*205.41*/("""
                        """),format.raw/*206.25*/("""<div>
                            <span class="info-item-name">发票抬头：</span>
                            <span style="margin-left:17px; max-width:650px; overflow:hidden;height: 30px;">$"""),format.raw/*208.109*/("""{"""),format.raw/*208.110*/("""invoice_title"""),format.raw/*208.123*/("""}"""),format.raw/*208.124*/("""</span>
                        </div>
                    """),format.raw/*210.21*/("""{"""),format.raw/*210.22*/("""{"""),format.raw/*210.23*/("""/if"""),format.raw/*210.26*/("""}"""),format.raw/*210.27*/("""}"""),format.raw/*210.28*/("""
                    """),format.raw/*211.21*/("""{"""),format.raw/*211.22*/("""{"""),format.raw/*211.23*/("""if remark"""),format.raw/*211.32*/("""}"""),format.raw/*211.33*/("""}"""),format.raw/*211.34*/("""
                        """),format.raw/*212.25*/("""<div>
                            <span class="info-item-name" style="vertical-align: top;">备注信息：</span>
                            <span style="margin:3px 0 3px 17px; max-width:650px; line-height: 24px; vertical-align: top;word-break: break-all;">$"""),format.raw/*214.146*/("""{"""),format.raw/*214.147*/("""remark"""),format.raw/*214.153*/("""}"""),format.raw/*214.154*/("""</span>
                        </div>
                    """),format.raw/*216.21*/("""{"""),format.raw/*216.22*/("""{"""),format.raw/*216.23*/("""/if"""),format.raw/*216.26*/("""}"""),format.raw/*216.27*/("""}"""),format.raw/*216.28*/("""
                """),format.raw/*217.17*/("""</div>
            </div>
        </div>
        <div class="form admin-info">
        	<span class="title">用户可见信息</span>
        	<div class="form-item">
                <label>
                    <span class="field">配送时间：</span>
                    <input class="textbox" type="text" value="$"""),format.raw/*225.64*/("""{"""),format.raw/*225.65*/("""delivery_time"""),format.raw/*225.78*/("""}"""),format.raw/*225.79*/("""" id="delivery_time">
                    <span id="delivery_time_tip" class="tip input-tip">配送时间过长</span>
                </label>
            </div>
            <div class="form-item">
                <label>
                    <span class="field">专属客服：</span>
                    <input class="textbox" type="text" value="$"""),format.raw/*232.64*/("""{"""),format.raw/*232.65*/("""support"""),format.raw/*232.72*/("""}"""),format.raw/*232.73*/("""" id="support">
                    <span id="support_tip" class="tip input-tip">专属客服过长</span>
                </label>
            </div>
            <span class="title">仅后台使用信息</span>
            <span style="font-size:12px; color:#999999">（不会出现在客户的订单详情中）</span>
            <div class="form-item">
                <label>
                    <span class="field">供应商信息：</span>
                    <input class="textbox" type="text" value="$"""),format.raw/*241.64*/("""{"""),format.raw/*241.65*/("""supplier"""),format.raw/*241.73*/("""}"""),format.raw/*241.74*/("""" id="supplier">
                    <span id="supplier_tip" class="tip input-tip">供应商信息过长</span>
                </label>
            </div>
            <div class="form-item">
                <label>
                    <span class="field">后台备注：</span>
                    <textarea class="textarea" id="admin_remark">$"""),format.raw/*248.67*/("""{"""),format.raw/*248.68*/("""admin_remark"""),format.raw/*248.80*/("""}"""),format.raw/*248.81*/("""</textarea>
                    <span id="admin_remark_tip" class="tip input-tip">后台备注过长</span>
                </label>
            </div>
            <a class="confirm-update" id="confirm_update">确认修改</a>
        </div>
    </script>

    <div class="modal-layer"></div>
    <div class="modal" id="admin_cancel_order_modal">
        <div class="modal-head"><a class="close"></a></div>
        <div class="modal-body">
            <div class="tip">
                <div class="message sad">确定要取消订单吗？</div>
            </div>
        </div>
        <div class="modal-foot"><a class="btn left no-stay">取消</a><a class="btn right">确定</a></div>
    </div>
    <div class="modal" id="change_status_modal">
        <div class="modal-head"><a class="close"></a></div>
        <div class="modal-body">
            <div class="tip">
                <div class="message sad">确定要接单吗？</div>
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
""")))}/*307.2*/ {_display_(Seq[Any](format.raw/*307.4*/("""
    """),format.raw/*308.5*/("""<script type="text/javascript" src="/assets/js/jquery.tmpl.min.js"></script>
	<script type="text/javascript" src="/assets/js/common.js"></script>
    <script type="text/javascript" src="/assets/js/admin/order.js"></script>
""")))}),format.raw/*311.2*/("""
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
                  DATE: Tue Nov 15 15:01:43 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/admin/order.scala.html
                  HASH: bc1e9d17f8d2d7921ab5e71cfcaf4e8652685376
                  MATRIX: 559->1|743->47|770->93|797->95|819->109|858->111|886->113|973->183|1011->185|1039->187|1349->468|1379->469|1410->471|1440->472|1545->549|1574->550|1604->552|1633->553|1708->600|1737->601|1767->603|1796->604|1906->686|1935->687|1971->695|2000->696|2055->723|2084->724|2113->725|2163->747|2192->748|2221->749|2262->762|2291->763|2320->764|2400->816|2429->817|2458->818|2503->835|2667->971|2696->972|2725->973|2756->976|2785->977|2814->978|2855->991|2884->992|2913->993|2990->1042|3019->1043|3048->1044|3093->1061|3223->1163|3252->1164|3281->1165|3312->1168|3341->1169|3370->1170|3406->1179|3483->1229|3512->1230|3541->1231|3594->1256|3623->1257|3652->1258|3693->1271|3722->1272|3751->1273|3792->1286|3821->1287|3850->1288|3895->1305|3979->1361|4008->1362|4037->1363|4069->1367|4098->1368|4127->1369|4172->1386|4201->1387|4230->1388|4281->1411|4310->1412|4339->1413|4388->1434|4446->1464|4475->1465|4504->1466|4536->1470|4565->1471|4594->1472|4643->1493|4704->1526|4733->1527|4762->1528|4793->1531|4822->1532|4851->1533|4892->1546|4921->1547|4950->1548|4981->1551|5010->1552|5039->1553|5076->1563|5105->1564|5134->1565|5198->1601|5227->1602|5256->1603|5297->1616|5373->1665|5402->1666|5431->1667|5488->1696|5517->1697|5546->1698|5587->1711|5640->1737|5669->1738|5698->1739|5790->1803|5819->1804|5848->1805|5889->1818|5949->1851|5978->1852|6007->1853|6061->1879|6090->1880|6119->1881|6160->1894|6203->1910|6232->1911|6261->1912|6315->1938|6344->1939|6373->1940|6414->1953|6457->1969|6486->1970|6515->1971|6546->1974|6575->1975|6604->1976|6640->1985|6772->2089|6801->2090|6830->2091|6870->2103|6899->2104|6928->2105|6969->2118|7158->2279|7187->2280|7216->2281|7254->2291|7283->2292|7312->2293|7361->2314|7445->2370|7474->2371|7504->2373|7533->2374|7595->2408|7624->2409|7653->2410|7684->2413|7713->2414|7742->2415|7783->2428|8322->2939|8351->2940|8380->2941|8426->2959|8455->2960|8484->2961|8537->2986|8579->3000|8608->3001|8643->3008|8672->3009|8924->3233|8953->3234|8996->3249|9025->3250|9055->3252|9084->3253|9122->3263|9151->3264|9193->3277|9223->3278|9275->3301|9305->3302|9541->3510|9570->3511|9613->3526|9642->3527|9672->3529|9701->3530|9739->3540|9768->3541|9861->3606|9890->3607|9928->3617|9957->3618|10055->3688|10084->3689|10122->3699|10151->3700|10435->3956|10464->3957|10528->3993|10557->3994|10677->4086|10706->4087|10747->4100|10776->4101|10893->4190|10922->4191|10951->4192|10991->4204|11020->4205|11049->4206|11110->4239|11179->4280|11208->4281|11264->4308|11294->4309|11349->4335|11379->4336|11427->4355|11457->4356|11511->4381|11541->4382|11589->4401|11619->4402|11684->4439|11713->4440|11742->4441|11774->4445|11803->4446|11832->4447|11893->4480|12016->4575|12045->4576|12074->4577|12105->4580|12134->4581|12163->4582|12224->4615|12361->4724|12390->4725|12419->4726|12459->4738|12488->4739|12517->4740|12578->4773|12701->4868|12730->4869|12759->4870|12791->4874|12820->4875|12849->4876|12910->4909|13012->4982|13042->4983|13072->4984|13104->4987|13134->4988|13164->4989|13222->5018|13307->5074|13337->5075|13367->5076|13401->5081|13431->5082|13461->5083|13511->5104|13574->5138|13604->5139|13634->5140|13691->5168|13721->5169|13751->5170|13805->5195|14096->5457|14126->5458|14156->5459|14212->5486|14242->5487|14272->5488|14326->5513|14369->5527|14399->5528|14437->5537|14467->5538|14512->5554|14542->5555|14600->5584|14630->5585|14894->5820|14924->5821|14979->5846|15010->5847|15310->6118|15340->6119|15381->6131|15411->6132|15510->6202|15540->6203|15581->6215|15611->6216|15890->6466|15920->6467|15950->6468|16000->6489|16030->6490|16060->6491|16122->6524|16197->6570|16227->6571|16257->6572|16290->6576|16320->6577|16350->6578|16412->6611|16447->6617|16477->6618|16544->6656|16574->6657|16642->6696|16672->6697|16702->6698|16734->6701|16764->6702|16794->6703|16852->6732|17027->6878|17057->6879|17087->6880|17130->6894|17160->6895|17190->6896|17252->6929|17322->6970|17352->6971|17411->7000|17442->7001|17498->7027|17529->7028|17580->7049|17611->7050|17666->7075|17697->7076|17748->7097|17779->7098|17845->7135|17875->7136|17905->7137|17938->7141|17968->7142|17998->7143|18060->7176|18184->7271|18214->7272|18244->7273|18276->7276|18306->7277|18336->7278|18398->7311|18536->7420|18566->7421|18596->7422|18639->7436|18669->7437|18699->7438|18761->7471|18885->7566|18915->7567|18945->7568|18978->7572|19008->7573|19038->7574|19100->7607|19202->7680|19232->7681|19262->7682|19294->7685|19324->7686|19354->7687|19412->7716|19501->7776|19531->7777|19561->7778|19595->7783|19625->7784|19655->7785|19705->7806|19735->7807|19765->7808|19797->7811|19827->7812|19857->7813|19907->7834|20437->8335|20467->8336|20505->8345|20535->8346|20926->8708|20956->8709|20993->8717|21023->8718|21232->8898|21262->8899|21300->8908|21330->8909|21600->9149|21631->9150|21666->9155|21697->9156|21978->9408|22008->9409|22051->9423|22081->9424|22174->9488|22204->9489|22248->9504|22278->9505|22420->9617|22451->9618|22488->9625|22519->9626|22612->9690|22642->9691|22680->9700|22710->9701|22891->9853|22921->9854|22951->9855|22995->9870|23025->9871|23055->9872|23113->9901|23173->9932|23203->9933|23244->9945|23274->9946|23335->9978|23365->9979|23395->9980|23428->9984|23458->9985|23488->9986|23546->10015|23606->10046|23636->10047|23679->10061|23709->10062|23770->10094|23800->10095|23830->10096|23862->10099|23892->10100|23922->10101|23976->10126|24006->10127|24036->10128|24081->10144|24111->10145|24141->10146|24199->10175|24260->10207|24290->10208|24332->10221|24362->10222|24423->10254|24453->10255|24483->10256|24516->10260|24546->10261|24576->10262|24634->10291|24694->10322|24724->10323|24768->10338|24798->10339|24859->10371|24889->10372|24919->10373|24951->10376|24981->10377|25011->10378|25065->10403|25095->10404|25125->10405|25167->10418|25197->10419|25227->10420|25285->10449|25349->10484|25379->10485|25418->10495|25448->10496|25509->10528|25539->10529|25569->10530|25601->10533|25631->10534|25661->10535|25711->10556|25767->10583|25797->10584|25827->10585|25872->10601|25902->10602|25932->10603|25986->10628|26200->10812|26231->10813|26274->10826|26305->10827|26393->10886|26423->10887|26453->10888|26485->10891|26515->10892|26545->10893|26595->10914|26625->10915|26655->10916|26693->10925|26723->10926|26753->10927|26807->10952|27087->11202|27118->11203|27154->11209|27185->11210|27273->11269|27303->11270|27333->11271|27365->11274|27395->11275|27425->11276|27471->11293|27795->11588|27825->11589|27867->11602|27897->11603|28253->11930|28283->11931|28319->11938|28349->11939|28820->12381|28850->12382|28887->12390|28917->12391|29267->12712|29297->12713|29338->12725|29368->12726|31503->14842|31543->14844|31576->14849|31831->15073
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|29->6|29->6|30->7|35->12|35->12|35->12|35->12|36->13|36->13|36->13|36->13|37->14|37->14|37->14|37->14|38->15|38->15|38->15|38->15|39->16|39->16|39->16|39->16|39->16|39->16|40->17|40->17|40->17|40->17|40->17|40->17|41->18|42->19|42->19|42->19|42->19|42->19|42->19|43->20|43->20|43->20|43->20|43->20|43->20|44->21|45->22|45->22|45->22|45->22|45->22|45->22|46->23|48->25|48->25|48->25|48->25|48->25|48->25|49->26|49->26|49->26|49->26|49->26|49->26|50->27|51->28|51->28|51->28|51->28|51->28|51->28|52->29|52->29|52->29|52->29|52->29|52->29|53->30|54->31|54->31|54->31|54->31|54->31|54->31|55->32|56->33|56->33|56->33|56->33|56->33|56->33|57->34|57->34|57->34|57->34|57->34|57->34|58->35|58->35|58->35|58->35|58->35|58->35|59->36|60->37|60->37|60->37|60->37|60->37|60->37|61->38|62->39|62->39|62->39|62->39|62->39|62->39|63->40|64->41|64->41|64->41|64->41|64->41|64->41|65->42|66->43|66->43|66->43|66->43|66->43|66->43|67->44|68->45|68->45|68->45|68->45|68->45|68->45|69->46|72->49|72->49|72->49|72->49|72->49|72->49|73->50|78->55|78->55|78->55|78->55|78->55|78->55|79->56|79->56|79->56|79->56|79->56|80->57|80->57|80->57|80->57|80->57|80->57|81->58|93->70|93->70|93->70|93->70|93->70|93->70|94->71|94->71|94->71|94->71|94->71|98->75|98->75|98->75|98->75|98->75|98->75|98->75|98->75|98->75|98->75|98->75|98->75|101->78|101->78|101->78|101->78|101->78|101->78|101->78|101->78|102->79|102->79|102->79|102->79|103->80|103->80|103->80|103->80|109->86|109->86|109->86|109->86|111->88|111->88|111->88|111->88|113->90|113->90|113->90|113->90|113->90|113->90|114->91|114->91|114->91|114->91|114->91|114->91|114->91|114->91|114->91|114->91|114->91|114->91|114->91|115->92|115->92|115->92|115->92|115->92|115->92|116->93|117->94|117->94|117->94|117->94|117->94|117->94|118->95|119->96|119->96|119->96|119->96|119->96|119->96|120->97|121->98|121->98|121->98|121->98|121->98|121->98|122->99|123->100|123->100|123->100|123->100|123->100|123->100|124->101|126->103|126->103|126->103|126->103|126->103|126->103|127->104|128->105|128->105|128->105|128->105|128->105|128->105|129->106|134->111|134->111|134->111|134->111|134->111|134->111|135->112|135->112|135->112|135->112|135->112|135->112|135->112|135->112|135->112|139->116|139->116|139->116|139->116|143->120|143->120|143->120|143->120|144->121|144->121|144->121|144->121|150->127|150->127|150->127|150->127|150->127|150->127|151->128|152->129|152->129|152->129|152->129|152->129|152->129|153->130|153->130|153->130|153->130|153->130|154->131|154->131|154->131|154->131|154->131|154->131|155->132|158->135|158->135|158->135|158->135|158->135|158->135|159->136|159->136|159->136|159->136|159->136|159->136|159->136|159->136|159->136|159->136|159->136|159->136|159->136|160->137|160->137|160->137|160->137|160->137|160->137|161->138|162->139|162->139|162->139|162->139|162->139|162->139|163->140|164->141|164->141|164->141|164->141|164->141|164->141|165->142|166->143|166->143|166->143|166->143|166->143|166->143|167->144|168->145|168->145|168->145|168->145|168->145|168->145|169->146|171->148|171->148|171->148|171->148|171->148|171->148|172->149|172->149|172->149|172->149|172->149|172->149|173->150|185->162|185->162|185->162|185->162|193->170|193->170|193->170|193->170|197->174|197->174|197->174|197->174|201->178|201->178|201->178|201->178|207->184|207->184|207->184|207->184|208->185|208->185|208->185|208->185|209->186|209->186|209->186|209->186|210->187|210->187|210->187|210->187|214->191|214->191|214->191|214->191|214->191|214->191|215->192|215->192|215->192|215->192|215->192|216->193|216->193|216->193|216->193|216->193|216->193|217->194|217->194|217->194|217->194|217->194|218->195|218->195|218->195|218->195|218->195|218->195|219->196|219->196|219->196|219->196|219->196|219->196|220->197|220->197|220->197|220->197|220->197|221->198|221->198|221->198|221->198|221->198|221->198|222->199|222->199|222->199|222->199|222->199|223->200|223->200|223->200|223->200|223->200|223->200|224->201|224->201|224->201|224->201|224->201|224->201|225->202|225->202|225->202|225->202|225->202|226->203|226->203|226->203|226->203|226->203|226->203|227->204|228->205|228->205|228->205|228->205|228->205|228->205|229->206|231->208|231->208|231->208|231->208|233->210|233->210|233->210|233->210|233->210|233->210|234->211|234->211|234->211|234->211|234->211|234->211|235->212|237->214|237->214|237->214|237->214|239->216|239->216|239->216|239->216|239->216|239->216|240->217|248->225|248->225|248->225|248->225|255->232|255->232|255->232|255->232|264->241|264->241|264->241|264->241|271->248|271->248|271->248|271->248|330->307|330->307|331->308|334->311
                  -- GENERATED --
              */
          