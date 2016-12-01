
package views.html.templates.admin

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object editOrder_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class editOrder extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates.{order => _, _}

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("编辑订单")/*4.14*/ {_display_(Seq[Any](format.raw/*4.16*/("""
    """),format.raw/*5.5*/("""<!-- css 们 -->
    <link rel="stylesheet" href="http://7bvan6.com2.z0.glb.qiniucdn.com/chosen.css"/>
    <link rel="stylesheet" type="text/css" href="/assets/css/confirm-order.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/on-demand.css">

""")))}/*10.2*/ {_display_(Seq[Any](format.raw/*10.4*/("""
    """),format.raw/*11.5*/("""<!-- 网页主体 -->
    <div class="confirm-box box">
        <div class="container" id="edit_order_box"></div>
    </div>
    <script type="text/x-jquery-tmpl" id="template">
        <p class="breadcrumb"><a href="/">首页</a> > <a href="/admin/order/list ">订单列表</a> > <a  href="/admin/order?id=$"""),format.raw/*16.119*/("""{"""),format.raw/*16.120*/("""id"""),format.raw/*16.122*/("""}"""),format.raw/*16.123*/(""" """),format.raw/*16.124*/("""">订单：$"""),format.raw/*16.130*/("""{"""),format.raw/*16.131*/("""id"""),format.raw/*16.133*/("""}"""),format.raw/*16.134*/("""</a> > <a class="current">编辑</a></p>
        <div class="form">
            <div class="form-title">
                <!-- <a class="save-btn add-demand" id="admin_add_demand">添加按需定制商品</a> -->
                <span>商品清单</span>
            </div>
            <div class="form-body admin-control">
                <table class="cart-table-table">
                    <thead>
                    <tr class="all-select">
                        <td>
                            商品信息
                        </td>
                        <td>单价(元)</td>
                        <td>数量</td>
                        <td>印刷文件</td>
                        <td>操作</td>
                    </tr>
                    </thead>
                    <tbody id="product_item" class="cart-table-tb">
                    """),format.raw/*36.21*/("""{"""),format.raw/*36.22*/("""{"""),format.raw/*36.23*/("""each(i,item) items"""),format.raw/*36.41*/("""}"""),format.raw/*36.42*/("""}"""),format.raw/*36.43*/("""
                        """),format.raw/*37.25*/("""<tr data-id="$"""),format.raw/*37.39*/("""{"""),format.raw/*37.40*/("""item.id"""),format.raw/*37.47*/("""}"""),format.raw/*37.48*/("""">
                            <td class="item-product">
                                <div>
                                    <div class="item-product-img">
                                        <a href="/product?id=$"""),format.raw/*41.63*/("""{"""),format.raw/*41.64*/("""item.product_id"""),format.raw/*41.79*/("""}"""),format.raw/*41.80*/("""#$"""),format.raw/*41.82*/("""{"""),format.raw/*41.83*/("""item.brief"""),format.raw/*41.93*/("""}"""),format.raw/*41.94*/(""""><img src="$"""),format.raw/*41.107*/("""{"""),format.raw/*41.108*/("""img_link+item.image_key"""),format.raw/*41.131*/("""}"""),format.raw/*41.132*/("""?imageView2/1/w/80/h/80/"></a>
                                    </div>
                                    <div class="item-product-describe">
                                        <a href="/product?id=$"""),format.raw/*44.63*/("""{"""),format.raw/*44.64*/("""item.product_id"""),format.raw/*44.79*/("""}"""),format.raw/*44.80*/("""#$"""),format.raw/*44.82*/("""{"""),format.raw/*44.83*/("""item.brief"""),format.raw/*44.93*/("""}"""),format.raw/*44.94*/("""">
                                            <p class="title">$"""),format.raw/*45.63*/("""{"""),format.raw/*45.64*/("""item.title"""),format.raw/*45.74*/("""}"""),format.raw/*45.75*/("""</p>
                                            <p class="describe">$"""),format.raw/*46.66*/("""{"""),format.raw/*46.67*/("""item.brief"""),format.raw/*46.77*/("""}"""),format.raw/*46.78*/("""</p>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td class="item-price">
                                <div class="product-display">
                                    <span class="admin-show-num">$"""),format.raw/*53.67*/("""{"""),format.raw/*53.68*/("""processData.processPrice(item.price)"""),format.raw/*53.104*/("""}"""),format.raw/*53.105*/("""</span>
                                    <a class="admin-edit-order">修改</a>
                                </div>
                                <div class="product-edit">
                                    <input type="text" class="admin-input admin-price" value="$"""),format.raw/*57.96*/("""{"""),format.raw/*57.97*/("""processData.processPrice(item.price)"""),format.raw/*57.133*/("""}"""),format.raw/*57.134*/("""">
                                    <a class="admin-save-order">保存</a>
                                    <a class="admin-cancel-order">取消</a>
                                </div>
                            </td>
                            <td class="item-num">
                                <div class="product-display">
                                    <span class="admin-show-num">$"""),format.raw/*64.67*/("""{"""),format.raw/*64.68*/("""item.quantity"""),format.raw/*64.81*/("""}"""),format.raw/*64.82*/("""</span>
                                    <a class="admin-edit-order">修改</a>
                                </div>
                                <div class="product-edit">
                                    <input type="text" class="admin-input admin-num" value="$"""),format.raw/*68.94*/("""{"""),format.raw/*68.95*/("""item.quantity"""),format.raw/*68.108*/("""}"""),format.raw/*68.109*/("""">
                                    <a class="admin-save-order">保存</a>
                                    <a class="admin-cancel-order">取消</a>
                                </div>
                            </td>
                            <td class="item-total">  
                                """),format.raw/*74.33*/("""{"""),format.raw/*74.34*/("""{"""),format.raw/*74.35*/("""if item.file"""),format.raw/*74.47*/("""}"""),format.raw/*74.48*/("""}"""),format.raw/*74.49*/("""
                                """),format.raw/*75.33*/("""<a href="$"""),format.raw/*75.43*/("""{"""),format.raw/*75.44*/("""img_link+item.file.file_key"""),format.raw/*75.71*/("""}"""),format.raw/*75.72*/("""" title="$"""),format.raw/*75.82*/("""{"""),format.raw/*75.83*/("""item.file.file_name"""),format.raw/*75.102*/("""}"""),format.raw/*75.103*/("""">$"""),format.raw/*75.106*/("""{"""),format.raw/*75.107*/("""item.file.file_name"""),format.raw/*75.126*/("""}"""),format.raw/*75.127*/("""</a>
                                """),format.raw/*76.33*/("""{"""),format.raw/*76.34*/("""{"""),format.raw/*76.35*/("""else"""),format.raw/*76.39*/("""}"""),format.raw/*76.40*/("""}"""),format.raw/*76.41*/("""
                                """),format.raw/*77.33*/("""<a>未上传</a>
                                """),format.raw/*78.33*/("""{"""),format.raw/*78.34*/("""{"""),format.raw/*78.35*/("""/if"""),format.raw/*78.38*/("""}"""),format.raw/*78.39*/("""}"""),format.raw/*78.40*/("""
                            """),format.raw/*79.29*/("""</td>
                            <td class="item-deal"><a class="delete-product">删除</a></td>
                        </tr>
                    """),format.raw/*82.21*/("""{"""),format.raw/*82.22*/("""{"""),format.raw/*82.23*/("""/each"""),format.raw/*82.28*/("""}"""),format.raw/*82.29*/("""}"""),format.raw/*82.30*/("""

                    """),format.raw/*84.21*/("""{"""),format.raw/*84.22*/("""{"""),format.raw/*84.23*/("""if custom_items.length > 0"""),format.raw/*84.49*/("""}"""),format.raw/*84.50*/("""}"""),format.raw/*84.51*/("""
                        """),format.raw/*85.25*/("""<tr class="on-demand">
                            <td colspan="6">
                                <div class="on-demand-title">按需定制商品</div>
                            </td>
                        </tr>
                        """),format.raw/*90.25*/("""{"""),format.raw/*90.26*/("""{"""),format.raw/*90.27*/("""each(i,custom) custom_items"""),format.raw/*90.54*/("""}"""),format.raw/*90.55*/("""}"""),format.raw/*90.56*/("""
                        """),format.raw/*91.25*/("""<tr data-id="$"""),format.raw/*91.39*/("""{"""),format.raw/*91.40*/("""custom.id"""),format.raw/*91.49*/("""}"""),format.raw/*91.50*/("""" data-detail="$"""),format.raw/*91.66*/("""{"""),format.raw/*91.67*/("""JSON.stringify(custom.detail)"""),format.raw/*91.96*/("""}"""),format.raw/*91.97*/("""">
                            <td class="item-product">
                                <div>
                                    <div class="item-product-img">
                                        <a class="demand-pop"><img src="$"""),format.raw/*95.74*/("""{"""),format.raw/*95.75*/("""img_link+custom.image_key"""),format.raw/*95.100*/("""}"""),format.raw/*95.101*/("""?imageView2/1/w/80/h/80/"></a>
                                    </div>
                                    <div class="item-product-describe">
                                        <a class="demand-pop">
                                            <p class="title">$"""),format.raw/*99.63*/("""{"""),format.raw/*99.64*/("""custom.title"""),format.raw/*99.76*/("""}"""),format.raw/*99.77*/("""</p>
                                            <p class="describe">$"""),format.raw/*100.66*/("""{"""),format.raw/*100.67*/("""custom.brief"""),format.raw/*100.79*/("""}"""),format.raw/*100.80*/("""</p>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td class="item-price">
                                <div class="product-display">
                                    <span>$"""),format.raw/*107.44*/("""{"""),format.raw/*107.45*/("""custom.price?processData.processPrice(custom.price):'暂无'"""),format.raw/*107.101*/("""}"""),format.raw/*107.102*/("""</span>
                                    <a class="admin-edit-order">修改</a>
                                </div>
                                <div class="product-edit">
                                    <input type="text" class="admin-input admin-price admin-demand" value="$"""),format.raw/*111.109*/("""{"""),format.raw/*111.110*/("""custom.price?processData.processPrice(custom.price):'暂无'"""),format.raw/*111.166*/("""}"""),format.raw/*111.167*/("""">
                                    <a class="admin-save-order">保存</a>
                                    <a class="admin-cancel-order">取消</a>
                                </div>
                            </td>
                            <td class="item-num">1</td>
                            <td class="item-total">  
                                """),format.raw/*118.33*/("""{"""),format.raw/*118.34*/("""{"""),format.raw/*118.35*/("""if custom.file"""),format.raw/*118.49*/("""}"""),format.raw/*118.50*/("""}"""),format.raw/*118.51*/("""
                                """),format.raw/*119.33*/("""<a href="$"""),format.raw/*119.43*/("""{"""),format.raw/*119.44*/("""img_link+custom.file.file_key"""),format.raw/*119.73*/("""}"""),format.raw/*119.74*/("""" title="$"""),format.raw/*119.84*/("""{"""),format.raw/*119.85*/("""custom.file.file_name"""),format.raw/*119.106*/("""}"""),format.raw/*119.107*/("""">$"""),format.raw/*119.110*/("""{"""),format.raw/*119.111*/("""custom.file.file_name"""),format.raw/*119.132*/("""}"""),format.raw/*119.133*/("""</a>
                                """),format.raw/*120.33*/("""{"""),format.raw/*120.34*/("""{"""),format.raw/*120.35*/("""else"""),format.raw/*120.39*/("""}"""),format.raw/*120.40*/("""}"""),format.raw/*120.41*/("""
                                """),format.raw/*121.33*/("""<a>未上传</a>
                                """),format.raw/*122.33*/("""{"""),format.raw/*122.34*/("""{"""),format.raw/*122.35*/("""/if"""),format.raw/*122.38*/("""}"""),format.raw/*122.39*/("""}"""),format.raw/*122.40*/("""
                            """),format.raw/*123.29*/("""</td>
                            <td class="item-deal">
                                <a class="edit-product">编辑</a>
                                <a class="delete-product">删除</a>
                            </td>
                        </tr>
                        """),format.raw/*129.25*/("""{"""),format.raw/*129.26*/("""{"""),format.raw/*129.27*/("""/each"""),format.raw/*129.32*/("""}"""),format.raw/*129.33*/("""}"""),format.raw/*129.34*/("""
                    """),format.raw/*130.21*/("""{"""),format.raw/*130.22*/("""{"""),format.raw/*130.23*/("""/if"""),format.raw/*130.26*/("""}"""),format.raw/*130.27*/("""}"""),format.raw/*130.28*/("""
                    """),format.raw/*131.21*/("""</tbody>
                </table>
                <div class="admin-total-amount">总计：<span id="amount_money">$"""),format.raw/*133.77*/("""{"""),format.raw/*133.78*/("""total"""),format.raw/*133.83*/("""}"""),format.raw/*133.84*/("""</span>元</div>
            </div>
        </div>
        <div class="form">
            <div class="form-title">
                <span>支付方式</span>
            </div>
            <div class="form-body" id="change_pay_method">
                <a class="pay-method$"""),format.raw/*141.38*/("""{"""),format.raw/*141.39*/("""payment === 'ONLINE'?' selected':''"""),format.raw/*141.74*/("""}"""),format.raw/*141.75*/("""" data-value="ONLINE">在线支付</a>
                <a class="pay-method$"""),format.raw/*142.38*/("""{"""),format.raw/*142.39*/("""payment === 'CASH_ON_DELIVERY'?' selected':''"""),format.raw/*142.84*/("""}"""),format.raw/*142.85*/("""" data-value="CASH_ON_DELIVERY">货到付款</a>
            </div>
        </div>
        <div class="form">
            <div class="form-title">
                <span>收货信息</span>
            </div>
            <div class="form-body">
                <div>
                    <div class="form-control">
                        <label for="receiver_name" class="form-label">收件人姓名</label>
                        <input id="receiver_name" type="text" class="form-input" placeholder="请准确填写真实姓名" value="$"""),format.raw/*153.114*/("""{"""),format.raw/*153.115*/("""consignee_name"""),format.raw/*153.129*/("""}"""),format.raw/*153.130*/("""">
                        <span class="tip">*</span><span id="receiver_name_tip" class="tip input-tip">收货人姓名1-25个字</span>
                    </div>
                    <div class="form-control">
                        <label for="receiver_province" class="form-label">地址</label>
                        <select id="receiver_province" class="form-input select" data-placeholder="请选择">
                            <option value="110100" class="selected">北京</option>
                        </select>
                        <select id="receiver_city" class="form-input select" data-placeholder="请选择">
                            <option></option>
                        </select>
                        <select id="receiver_county" class="form-input select" data-placeholder="请选择">
                            <option></option>
                        </select>
                        <span class="tip">*</span><span id="receiver_region_tip" class="tip input-tip">请选择配送范围</span>
                    </div>
                    <div class="form-control">
                        <label for="receiver_address" class="form-label">详细地址</label>
                        <input id="receiver_address" type="text" class="form-input" placeholder="请填写详细地址" value="$"""),format.raw/*171.115*/("""{"""),format.raw/*171.116*/("""address"""),format.raw/*171.123*/("""}"""),format.raw/*171.124*/("""">
                        <span class="tip">*</span><span id="receiver_address_tip" class="tip input-tip">详细地址不超过50字</span>
                    </div>
                    <div class="form-control">
                        <label for="receiver_code" class="form-label">邮编</label>
                        <input id="receiver_code" class="form-input" placeholder="请输入邮编" value="$"""),format.raw/*176.98*/("""{"""),format.raw/*176.99*/("""post_code"""),format.raw/*176.108*/("""}"""),format.raw/*176.109*/("""">
                        <span id="receiver_code_tip" class="tip input-tip">请输入正确的邮编</span>
                    </div>
                    <div class="form-control">
                        <label for="receiver_phone" class="form-label">联系电话</label>
                        <input id="receiver_phone" type="text" class="form-input" placeholder="请填写常用手机号码" value="$"""),format.raw/*181.115*/("""{"""),format.raw/*181.116*/("""consignee_phone"""),format.raw/*181.131*/("""}"""),format.raw/*181.132*/("""">
                        <span class="tip">*</span><span id="receiver_phone_tip" class="tip input-tip">请填写正确的手机号码</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="form">
            <div class="form-title">
                <span>需求联系人信息</span>
            </div>
            <div class="form-body admin-control">
                <div class="extra-service">
                    <span>（按需定制或设计出现问题时客服MM将与需求联系人沟通）</span>
                </div>
                <div id="need_contact_detail" class="extra-detail">
                    <div class="form-control">
                        <label for="contact_name" class="form-label">联系人姓名</label>
                        <input id="contact_name" class="form-input" placeholder="请填写联系人姓名" value="$"""),format.raw/*199.100*/("""{"""),format.raw/*199.101*/("""contact_name"""),format.raw/*199.113*/("""}"""),format.raw/*199.114*/(""""><span class="tip">*</span>
                        <span class="tip input-tip" id="contact_name_tip">联系人姓名1-25个字</span>
                    </div>
                    <div class="form-control">
                        <label for="contact_phone" class="form-label">联系人手机</label>
                        <input id="contact_phone" class="form-input" placeholder="请填写联系人手机" value="$"""),format.raw/*204.101*/("""{"""),format.raw/*204.102*/("""contact_phone"""),format.raw/*204.115*/("""}"""),format.raw/*204.116*/(""""><span class="tip">*</span>
                        <span class="tip input-tip" id="contact_phone_tip">请填写正确的手机号</span>
                    </div>
                </div>
                <div class="form-control show-out">
                    <label for="contact_qq" class="form-label">联系人QQ</label>
                    <input id="contact_qq" class="form-input" placeholder="QQ方便客服MM与您沟通" value="$"""),format.raw/*210.98*/("""{"""),format.raw/*210.99*/("""contact_qq"""),format.raw/*210.109*/("""}"""),format.raw/*210.110*/("""">
                    <span class="tip input-tip" id="contact_qq_tip">请填写正确的QQ号</span>
                </div>
                <div class="extra-service invoice">
                    <a class="check-box" id="need_invoice">
                        <input type="checkbox">
                        <label for="need_invoice">需要发票</label>
                    </a>
                </div>
                <div id="need_invoice_detail" class="extra-detail">
                    <div class="form-control">
                        <label for="receiver_invoice" class="form-label">发票抬头</label>
                        <input id="receiver_invoice" class="form-input" placeholder="请填写发票抬头" value="$"""),format.raw/*222.103*/("""{"""),format.raw/*222.104*/("""invoice_title"""),format.raw/*222.117*/("""}"""),format.raw/*222.118*/("""">
                        <span class="tip input-tip" id="receiver_invoice_tip">发票抬头不超过50字</span>
                    </div>
                </div>
                <div class="extra-service invoice">
                    <div class="extra-detail" id="need_remark">
                        <div class="form-control">
                            <label for="receiver_remark" class="form-label">备注信息</label>
                            <textarea id="receiver_remark">$"""),format.raw/*230.61*/("""{"""),format.raw/*230.62*/("""remark"""),format.raw/*230.68*/("""}"""),format.raw/*230.69*/("""</textarea>
                            <span class="tip input-tip" id="receiver_remark_tip">备注不超过500字</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-foot">
            <div class="foot-submit">
                <a class="save-btn" id="admin_create_order" data-id="$"""),format.raw/*239.71*/("""{"""),format.raw/*239.72*/("""id"""),format.raw/*239.74*/("""}"""),format.raw/*239.75*/("""">确认修改</a>
            </div>
        </div>
    </script>

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
            <div id="edit_demand_detail_title">编辑按需定制商品详情</div>
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
            <a class="btn left no-stay">取消</a><a class="btn right">确认</a>
        </div>
    </div>
""")))}/*344.2*/ {_display_(Seq[Any](format.raw/*344.4*/("""
    """),format.raw/*345.5*/("""<!-- js 们 -->
    <script src="http://7bvan6.com2.z0.glb.qiniucdn.com/chosen.jquery.js"></script>
    <script type="text/javascript" src="/assets/js/jquery.tmpl.min.js"></script>
    <script type="text/javascript" src="/assets/js/common.js"></script>
    <script type="text/javascript" src="/assets/js/on-demand.js"></script>
    <script type="text/javascript" src="/assets/js/admin/edit.js"></script>
""")))}),format.raw/*351.2*/("""
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
object editOrder extends editOrder_Scope0.editOrder
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:42 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/admin/editOrder.scala.html
                  HASH: 3d5dde12893c1a7aec33ca04fc141994b55139f6
                  MATRIX: 567->1|751->47|778->93|805->95|825->107|864->109|895->114|1174->375|1213->377|1245->382|1562->670|1592->671|1623->673|1653->674|1683->675|1718->681|1748->682|1779->684|1809->685|2637->1485|2666->1486|2695->1487|2741->1505|2770->1506|2799->1507|2852->1532|2894->1546|2923->1547|2958->1554|2987->1555|3239->1779|3268->1780|3311->1795|3340->1796|3370->1798|3399->1799|3437->1809|3466->1810|3508->1823|3538->1824|3590->1847|3620->1848|3856->2056|3885->2057|3928->2072|3957->2073|3987->2075|4016->2076|4054->2086|4083->2087|4176->2152|4205->2153|4243->2163|4272->2164|4370->2234|4399->2235|4437->2245|4466->2246|4840->2592|4869->2593|4934->2629|4964->2630|5264->2902|5293->2903|5358->2939|5388->2940|5814->3338|5843->3339|5884->3352|5913->3353|6211->3623|6240->3624|6282->3637|6312->3638|6646->3944|6675->3945|6704->3946|6744->3958|6773->3959|6802->3960|6863->3993|6901->4003|6930->4004|6985->4031|7014->4032|7052->4042|7081->4043|7129->4062|7159->4063|7191->4066|7221->4067|7269->4086|7299->4087|7364->4124|7393->4125|7422->4126|7454->4130|7483->4131|7512->4132|7573->4165|7644->4208|7673->4209|7702->4210|7733->4213|7762->4214|7791->4215|7848->4244|8020->4388|8049->4389|8078->4390|8111->4395|8140->4396|8169->4397|8219->4419|8248->4420|8277->4421|8331->4447|8360->4448|8389->4449|8442->4474|8700->4704|8729->4705|8758->4706|8813->4733|8842->4734|8871->4735|8924->4760|8966->4774|8995->4775|9032->4784|9061->4785|9105->4801|9134->4802|9191->4831|9220->4832|9483->5067|9512->5068|9566->5093|9596->5094|9895->5365|9924->5366|9964->5378|9993->5379|10092->5449|10122->5450|10163->5462|10193->5463|10545->5786|10575->5787|10661->5843|10692->5844|11007->6129|11038->6130|11124->6186|11155->6187|11546->6549|11576->6550|11606->6551|11649->6565|11679->6566|11709->6567|11771->6600|11810->6610|11840->6611|11898->6640|11928->6641|11967->6651|11997->6652|12048->6673|12079->6674|12112->6677|12143->6678|12194->6699|12225->6700|12291->6737|12321->6738|12351->6739|12384->6743|12414->6744|12444->6745|12506->6778|12578->6821|12608->6822|12638->6823|12670->6826|12700->6827|12730->6828|12788->6857|13090->7130|13120->7131|13150->7132|13184->7137|13214->7138|13244->7139|13294->7160|13324->7161|13354->7162|13386->7165|13416->7166|13446->7167|13496->7188|13635->7298|13665->7299|13699->7304|13729->7305|14020->7567|14050->7568|14114->7603|14144->7604|14241->7672|14271->7673|14345->7718|14375->7719|14899->8213|14930->8214|14974->8228|15005->8229|16292->9486|16323->9487|16360->9494|16391->9495|16797->9872|16827->9873|16866->9882|16897->9883|17293->10249|17324->10250|17369->10265|17400->10266|18233->11069|18264->11070|18306->11082|18337->11083|18747->11463|18778->11464|18821->11477|18852->11478|19278->11875|19308->11876|19348->11886|19379->11887|20094->12572|20125->12573|20168->12586|20199->12587|20693->13052|20723->13053|20758->13059|20788->13060|21183->13426|21213->13427|21244->13429|21274->13430|26268->18405|26308->18407|26341->18412|26775->18815
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|33->10|33->10|34->11|39->16|39->16|39->16|39->16|39->16|39->16|39->16|39->16|39->16|59->36|59->36|59->36|59->36|59->36|59->36|60->37|60->37|60->37|60->37|60->37|64->41|64->41|64->41|64->41|64->41|64->41|64->41|64->41|64->41|64->41|64->41|64->41|67->44|67->44|67->44|67->44|67->44|67->44|67->44|67->44|68->45|68->45|68->45|68->45|69->46|69->46|69->46|69->46|76->53|76->53|76->53|76->53|80->57|80->57|80->57|80->57|87->64|87->64|87->64|87->64|91->68|91->68|91->68|91->68|97->74|97->74|97->74|97->74|97->74|97->74|98->75|98->75|98->75|98->75|98->75|98->75|98->75|98->75|98->75|98->75|98->75|98->75|98->75|99->76|99->76|99->76|99->76|99->76|99->76|100->77|101->78|101->78|101->78|101->78|101->78|101->78|102->79|105->82|105->82|105->82|105->82|105->82|105->82|107->84|107->84|107->84|107->84|107->84|107->84|108->85|113->90|113->90|113->90|113->90|113->90|113->90|114->91|114->91|114->91|114->91|114->91|114->91|114->91|114->91|114->91|118->95|118->95|118->95|118->95|122->99|122->99|122->99|122->99|123->100|123->100|123->100|123->100|130->107|130->107|130->107|130->107|134->111|134->111|134->111|134->111|141->118|141->118|141->118|141->118|141->118|141->118|142->119|142->119|142->119|142->119|142->119|142->119|142->119|142->119|142->119|142->119|142->119|142->119|142->119|143->120|143->120|143->120|143->120|143->120|143->120|144->121|145->122|145->122|145->122|145->122|145->122|145->122|146->123|152->129|152->129|152->129|152->129|152->129|152->129|153->130|153->130|153->130|153->130|153->130|153->130|154->131|156->133|156->133|156->133|156->133|164->141|164->141|164->141|164->141|165->142|165->142|165->142|165->142|176->153|176->153|176->153|176->153|194->171|194->171|194->171|194->171|199->176|199->176|199->176|199->176|204->181|204->181|204->181|204->181|222->199|222->199|222->199|222->199|227->204|227->204|227->204|227->204|233->210|233->210|233->210|233->210|245->222|245->222|245->222|245->222|253->230|253->230|253->230|253->230|262->239|262->239|262->239|262->239|367->344|367->344|368->345|374->351
                  -- GENERATED --
              */
          