
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object cartConfirm_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class cartConfirm extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.48*/("""

"""),_display_(/*3.2*/main("确认订单")/*3.14*/ {_display_(Seq[Any](format.raw/*3.16*/("""
    """),format.raw/*4.5*/("""<!-- css 们 -->
    <link rel="stylesheet" href="http://7bvan6.com2.z0.glb.qiniucdn.com/chosen.css"/>
    <link rel="stylesheet" type="text/css" href="/assets/css/confirm-order.css">
""")))}/*7.2*/ {_display_(Seq[Any](format.raw/*7.4*/("""
    """),format.raw/*8.5*/("""<!-- 网页主体 -->
    <div class="confirm-box box">
        <div class="container">
            <div class="confirm-banner"><img src="/assets/img/flow_confirm.png"></div>
            <div class="form">
                <div class="form-title">
                    <span class="form-title-span">收货信息</span>
                </div>
                <div class="form-body">
                    <div id="edit_receiver_box">
                        <div class="form-control">
                            <label for="receiver_name" class="form-label">收件人姓名</label>
                            <input id="receiver_name" type="text" class="form-input" placeholder="请准确填写真实姓名">
                            <span class="tip">*</span><span id="receiver_name_tip" class="tip input-tip">收货人姓名1-25个字</span>
                        </div>
                        <div class="form-control">
                            <label for="receiver_location" class="form-label">地址</label>
                            <select id="receiver_province" class="form-input select" data-placeholder="请选择">
                                <option value="110100" class="selected">北京</option>
                            </select>
                            <select id="receiver_city" class="form-input select" data-placeholder="请选择">
                                <option></option>
                            </select>
                            <select id="receiver_county" class="form-input select" data-placeholder="请选择">
                                <option></option>
                            </select><span class="tip">*</span><span id="receiver_region_tip" class="tip input-tip">请选择配送范围</span>
                        </div>
                        <div class="form-control">
                            <label for="receiver_address" class="form-label">详细地址</label>
                            <input id="receiver_address" type="text" class="form-input" placeholder="请填写详细地址">
                            <span class="tip">*</span><span id="receiver_address_tip" class="tip input-tip">详细地址不超过50字</span>
                        </div>
                        <div class="form-control">
                            <label for="receiver_code" class="form-label">邮编</label>
                            <input id="receiver_code" class="form-input" placeholder="请输入邮编">
                            <span id="receiver_code_tip" class="tip input-tip">请输入正确的邮编</span>
                        </div>
                        <div class="form-control">
                            <label for="receiver_phone" class="form-label">联系电话</label>
                            <input id="receiver_phone" type="text" class="form-input" placeholder="请填写常用手机号码">
                            <span class="tip">*</span><span id="receiver_phone_tip" class="tip input-tip">请填写正确的手机号码</span>
                        </div>
                        <a id="save_receiver_btn" class="save-btn">保存收货地址</a>
                    </div>
                    <div id="display_receiver_box" style="display: none;">
                        <div class="receiver-msg">
                            <div id="edit_receiver_btn" class="edit-receiver">修改</div>
                            <div class="receiver-show-item">
                                <span id="display_receiver_name"></span>
                                <span style="display:inline-block; margin-left: 20px;" id="display_receiver_phone"></span>
                            </div>
                            <div class="receiver-show-item">
                                <span id="display_receiver_province">北京</span>
                                <span id="display_receiver_city"></span>
                                <span id="display_receiver_county"></span>
                                <span id="display_receiver_address"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form">
                <div class="form-title">
                    <span class="form-title-span">支付方式</span>
                </div>
                <div class="form-body" id="change_pay_method">
                    <a class="pay-method selected" data-value="ONLINE">在线支付</a>
                    <a class="pay-method" data-value="CASH_ON_DELIVERY">货到付款</a>
                </div>
            </div>

            <div class="form">
                <div class="form-title">
                    <span class="form-title-span">商品清单</span>
                    <span class="return-cart"><a href="/cart">< 返回购物车修改商品</a></span>
                </div>
                <div class="form-body">
                    <div class="shipping-method">
                        <div class="shipping-title">配送方式</div>
                        <a class="pay-method selected">普通快递</a>
                        <div class="shipping-describe">运费10元，满200元免运费</div>
                    </div>
                    <table class="cart-table-table">
                       <tbody id="product_item" class="cart-table-tb"></tbody>
                    </table>
                </div>
            </div>

            <div class="form">
                <div class="form-title">
                    <span class="form-title-span">其他信息</span>
                </div>
                <div class="form-body">
                    <div class="extra-service">
                        <a class="check-box checked" id="need_contact">
                            <input type="checkbox">
                            <label for="need_contact">需求联系人即收货人？</label>
                        </a>
                        <span>（按需定制或设计出现问题时客服MM将与需求联系人沟通）</span>
                    </div>
                    <div id="need_contact_detail" class="extra-detail">
                        <div class="form-control">
                            <label for="contact_name" class="form-label">联系人姓名</label>
                            <input id="contact_name" class="form-input" placeholder="请填写联系人姓名"><span class="tip">*</span>
                            <span class="tip input-tip" id="contact_name_tip">联系人姓名1-25个字</span>
                        </div>
                        <div class="form-control">
                            <label for="contact_phone" class="form-label">联系人手机</label>
                            <input id="contact_phone" class="form-input" placeholder="请填写联系人手机"><span class="tip">*</span>
                            <span class="tip input-tip" id="contact_phone_tip">请填写正确的手机号</span>
                        </div>
                    </div>
                    <div class="form-control show-out">
                        <label for="contact_qq" class="form-label">联系人QQ</label>
                        <input id="contact_qq" class="form-input" placeholder="QQ方便客服MM与您沟通">
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
                            <input id="receiver_invoice" class="form-input" placeholder="请填写发票抬头">
                            <span class="tip input-tip" id="receiver_invoice_tip">发票抬头不超过50字</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-foot table-box">
                <table class="foot-table foot-left">
                    <tr>
                        <td class="receiver-item">寄送至：</td>
                        <td id="confirm_address">
                            <span id="confirm_receiver_province">北京</span>
                            <span id="confirm_receiver_city"></span>
                            <span id="confirm_receiver_county"></span>
                            <span id="confirm_receiver_address"></span>
                        </td>
                    </tr>
                    <tr>
                        <td class="receiver-item">收货人：</td>
                        <td id="confirm_msg"></td>
                    </tr>
                    <tr>
                        <td class="receiver-item text-item">备注信息：</td>
                        <td>
                            <textarea id="receiver_remark"></textarea>
                            <span class="tip input-tip" id="receiver_remark_tip">备注不超过500字</span>
                        </td>
                    </tr>
                </table>
                <table class="foot-table foot-right">
                    <tr>
                        <td class="receiver-item">商品金额：</td>
                        <td id="confirm_amount"></td>
                    </tr>
                    <tr>
                        <td class="receiver-item">配送费用：</td>
                        <td id="confirm_freight"></td>
                    </tr>
                    <tr>
                        <td class="receiver-item">应付金额：</td>
                        <td class="all-sum" id="confirm_total"></td>
                    </tr></table>
            </div>
            <div class="order-foot">
                <div class="foot-submit">
                    <div class="submit-money">应付金额：<span id="confirm_total_show"></span></div>
                    <a class="save-btn" id="create_order">提交订单</a>
                </div>
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
    <script type="text/x-jquery-tmpl" id="product_template">
    """),format.raw/*221.5*/("""{"""),format.raw/*221.6*/("""{"""),format.raw/*221.7*/("""each(i,item) items"""),format.raw/*221.25*/("""}"""),format.raw/*221.26*/("""}"""),format.raw/*221.27*/("""
        """),format.raw/*222.9*/("""<tr data-id="$"""),format.raw/*222.23*/("""{"""),format.raw/*222.24*/("""item.id"""),format.raw/*222.31*/("""}"""),format.raw/*222.32*/("""">
            <td class="item-product">
                <div>
                    <div class="item-product-img">
                        <a href="/product?id=$"""),format.raw/*226.47*/("""{"""),format.raw/*226.48*/("""item.product_id"""),format.raw/*226.63*/("""}"""),format.raw/*226.64*/("""#$"""),format.raw/*226.66*/("""{"""),format.raw/*226.67*/("""item.brief"""),format.raw/*226.77*/("""}"""),format.raw/*226.78*/(""""><img src="$"""),format.raw/*226.91*/("""{"""),format.raw/*226.92*/("""img_link+item.image_key"""),format.raw/*226.115*/("""}"""),format.raw/*226.116*/("""?imageView2/1/w/80/h/80/"></a>
                    </div>
                    <div class="item-product-describe">
                        <a href="/product?id=$"""),format.raw/*229.47*/("""{"""),format.raw/*229.48*/("""item.product_id"""),format.raw/*229.63*/("""}"""),format.raw/*229.64*/("""#$"""),format.raw/*229.66*/("""{"""),format.raw/*229.67*/("""item.brief"""),format.raw/*229.77*/("""}"""),format.raw/*229.78*/("""">
                            <p class="title">$"""),format.raw/*230.47*/("""{"""),format.raw/*230.48*/("""item.title"""),format.raw/*230.58*/("""}"""),format.raw/*230.59*/("""</p>
                            <p class="describe">$"""),format.raw/*231.50*/("""{"""),format.raw/*231.51*/("""item.brief"""),format.raw/*231.61*/("""}"""),format.raw/*231.62*/("""</p>
                        </a>
                    </div>
                </div>
            </td>
            <td class="item-price">
                <div>$"""),format.raw/*237.23*/("""{"""),format.raw/*237.24*/("""processData.processPrice(item.price)"""),format.raw/*237.60*/("""}"""),format.raw/*237.61*/("""</div>
            </td>
            <td class="item-num">x$"""),format.raw/*239.36*/("""{"""),format.raw/*239.37*/("""item.quantity"""),format.raw/*239.50*/("""}"""),format.raw/*239.51*/("""</td>
            <td class="item-deal">
                """),format.raw/*241.17*/("""{"""),format.raw/*241.18*/("""{"""),format.raw/*241.19*/("""if item.file"""),format.raw/*241.31*/("""}"""),format.raw/*241.32*/("""}"""),format.raw/*241.33*/("""
                """),format.raw/*242.17*/("""<a class="deal-block upload-file" href="$"""),format.raw/*242.58*/("""{"""),format.raw/*242.59*/("""img_link+item.file.file_key"""),format.raw/*242.86*/("""}"""),format.raw/*242.87*/("""" target="_blank" title="$"""),format.raw/*242.113*/("""{"""),format.raw/*242.114*/("""item.file.file_name"""),format.raw/*242.133*/("""}"""),format.raw/*242.134*/("""" style="display:block">$"""),format.raw/*242.159*/("""{"""),format.raw/*242.160*/("""item.file.file_name"""),format.raw/*242.179*/("""}"""),format.raw/*242.180*/("""</a>
                """),format.raw/*243.17*/("""{"""),format.raw/*243.18*/("""{"""),format.raw/*243.19*/("""else"""),format.raw/*243.23*/("""}"""),format.raw/*243.24*/("""}"""),format.raw/*243.25*/("""
                """),format.raw/*244.17*/("""<a class="deal-block upload-file" href="" target="_blank"></a>
                """),format.raw/*245.17*/("""{"""),format.raw/*245.18*/("""{"""),format.raw/*245.19*/("""/if"""),format.raw/*245.22*/("""}"""),format.raw/*245.23*/("""}"""),format.raw/*245.24*/("""
                """),format.raw/*246.17*/("""<a class="deal-block add-file">上传文件<input class="hide-file" type="file"></a>
                """),format.raw/*247.17*/("""{"""),format.raw/*247.18*/("""{"""),format.raw/*247.19*/("""if item.file"""),format.raw/*247.31*/("""}"""),format.raw/*247.32*/("""}"""),format.raw/*247.33*/("""
                """),format.raw/*248.17*/("""<a class="deal-block delete-file" style="display:block">删除</a>
                """),format.raw/*249.17*/("""{"""),format.raw/*249.18*/("""{"""),format.raw/*249.19*/("""else"""),format.raw/*249.23*/("""}"""),format.raw/*249.24*/("""}"""),format.raw/*249.25*/("""
                """),format.raw/*250.17*/("""<a class="deal-block delete-file">删除</a>
                """),format.raw/*251.17*/("""{"""),format.raw/*251.18*/("""{"""),format.raw/*251.19*/("""/if"""),format.raw/*251.22*/("""}"""),format.raw/*251.23*/("""}"""),format.raw/*251.24*/("""
            """),format.raw/*252.13*/("""</td>
        </tr>
    """),format.raw/*254.5*/("""{"""),format.raw/*254.6*/("""{"""),format.raw/*254.7*/("""/each"""),format.raw/*254.12*/("""}"""),format.raw/*254.13*/("""}"""),format.raw/*254.14*/("""
    """),format.raw/*255.5*/("""{"""),format.raw/*255.6*/("""{"""),format.raw/*255.7*/("""if custom_items.length >0"""),format.raw/*255.32*/("""}"""),format.raw/*255.33*/("""}"""),format.raw/*255.34*/("""
        """),format.raw/*256.9*/("""<tr class="on-demand">
            <td colspan="6">
                <div class="on-demand-title">按需定制商品<span>（该类商品暂无价格，提交订单后客服MM将与您进一步沟通并确定价格）</span></div>
            </td>
        </tr>
        """),format.raw/*261.9*/("""{"""),format.raw/*261.10*/("""{"""),format.raw/*261.11*/("""each(i,custom) custom_items"""),format.raw/*261.38*/("""}"""),format.raw/*261.39*/("""}"""),format.raw/*261.40*/("""
            """),format.raw/*262.13*/("""<tr data-id="$"""),format.raw/*262.27*/("""{"""),format.raw/*262.28*/("""custom.id"""),format.raw/*262.37*/("""}"""),format.raw/*262.38*/("""" data-detail="$"""),format.raw/*262.54*/("""{"""),format.raw/*262.55*/("""JSON.stringify(custom.detail)"""),format.raw/*262.84*/("""}"""),format.raw/*262.85*/("""">
                <td class="item-product">
                    <div>
                        <div class="item-product-img">
                            <a class="demand-pop"><img src="$"""),format.raw/*266.62*/("""{"""),format.raw/*266.63*/("""img_link+custom.image_key"""),format.raw/*266.88*/("""}"""),format.raw/*266.89*/("""?imageView2/1/w/80/h/80/"></a>
                        </div>
                        <div class="item-product-describe">
                            <a class="demand-pop">
                                <p class="title">$"""),format.raw/*270.51*/("""{"""),format.raw/*270.52*/("""custom.title"""),format.raw/*270.64*/("""}"""),format.raw/*270.65*/("""</p>
                                <p class="describe">$"""),format.raw/*271.54*/("""{"""),format.raw/*271.55*/("""custom.brief"""),format.raw/*271.67*/("""}"""),format.raw/*271.68*/("""</p>
                            </a>
                        </div>
                    </div>
                </td>
                <td class="item-price">
                    <div>暂无</div>
                </td>
                <td class="item-num">x1</td>
                <td class="item-deal">
                    """),format.raw/*281.21*/("""{"""),format.raw/*281.22*/("""{"""),format.raw/*281.23*/("""if custom.file"""),format.raw/*281.37*/("""}"""),format.raw/*281.38*/("""}"""),format.raw/*281.39*/("""
                    """),format.raw/*282.21*/("""<a class="deal-block upload-file" href="$"""),format.raw/*282.62*/("""{"""),format.raw/*282.63*/("""img_link+custom.file.file_key"""),format.raw/*282.92*/("""}"""),format.raw/*282.93*/("""" target="_blank" title="$"""),format.raw/*282.119*/("""{"""),format.raw/*282.120*/("""custom.file.file_name"""),format.raw/*282.141*/("""}"""),format.raw/*282.142*/("""" style="display:block">$"""),format.raw/*282.167*/("""{"""),format.raw/*282.168*/("""custom.file.file_name"""),format.raw/*282.189*/("""}"""),format.raw/*282.190*/("""</a>
                    """),format.raw/*283.21*/("""{"""),format.raw/*283.22*/("""{"""),format.raw/*283.23*/("""else"""),format.raw/*283.27*/("""}"""),format.raw/*283.28*/("""}"""),format.raw/*283.29*/("""
                    """),format.raw/*284.21*/("""<a class="deal-block upload-file" href="" target="_blank"></a>
                    """),format.raw/*285.21*/("""{"""),format.raw/*285.22*/("""{"""),format.raw/*285.23*/("""/if"""),format.raw/*285.26*/("""}"""),format.raw/*285.27*/("""}"""),format.raw/*285.28*/("""
                    """),format.raw/*286.21*/("""<a class="deal-block add-file">上传文件<input class="hide-file" type="file"></a>
                    """),format.raw/*287.21*/("""{"""),format.raw/*287.22*/("""{"""),format.raw/*287.23*/("""if custom.file"""),format.raw/*287.37*/("""}"""),format.raw/*287.38*/("""}"""),format.raw/*287.39*/("""
                    """),format.raw/*288.21*/("""<a class="deal-block delete-file" style="display:block">删除</a>
                    """),format.raw/*289.21*/("""{"""),format.raw/*289.22*/("""{"""),format.raw/*289.23*/("""else"""),format.raw/*289.27*/("""}"""),format.raw/*289.28*/("""}"""),format.raw/*289.29*/("""
                    """),format.raw/*290.21*/("""<a class="deal-block delete-file">删除</a>
                    """),format.raw/*291.21*/("""{"""),format.raw/*291.22*/("""{"""),format.raw/*291.23*/("""/if"""),format.raw/*291.26*/("""}"""),format.raw/*291.27*/("""}"""),format.raw/*291.28*/("""
                """),format.raw/*292.17*/("""</td>
            </tr>
        """),format.raw/*294.9*/("""{"""),format.raw/*294.10*/("""{"""),format.raw/*294.11*/("""/each"""),format.raw/*294.16*/("""}"""),format.raw/*294.17*/("""}"""),format.raw/*294.18*/("""
    """),format.raw/*295.5*/("""{"""),format.raw/*295.6*/("""{"""),format.raw/*295.7*/("""/if"""),format.raw/*295.10*/("""}"""),format.raw/*295.11*/("""}"""),format.raw/*295.12*/("""
    """),format.raw/*296.5*/("""</script>
""")))}/*297.2*/ {_display_(Seq[Any](format.raw/*297.4*/("""
    """),format.raw/*298.5*/("""<!-- js 们 -->
    <script src="http://7bvan6.com2.z0.glb.qiniucdn.com/chosen.jquery.js"></script>
    <script type="text/javascript" src="/assets/js/jquery.tmpl.min.js"></script>
    <script type="text/javascript" src="/assets/js/common.js"></script>
    <script type="text/javascript" src="/assets/js/confirm-order.js"></script> 
""")))}),format.raw/*303.2*/("""
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
object cartConfirm extends cartConfirm_Scope0.cartConfirm
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:41 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/cartConfirm.scala.html
                  HASH: 66fbfcc250d93174d18a60ebf1b68119210b4fae
                  MATRIX: 565->1|706->47|734->50|754->62|793->64|824->69|1024->252|1062->254|1093->259|12096->11234|12125->11235|12154->11236|12201->11254|12231->11255|12261->11256|12298->11265|12341->11279|12371->11280|12407->11287|12437->11288|12626->11448|12656->11449|12700->11464|12730->11465|12761->11467|12791->11468|12830->11478|12860->11479|12902->11492|12932->11493|12985->11516|13016->11517|13205->11677|13235->11678|13279->11693|13309->11694|13340->11696|13370->11697|13409->11707|13439->11708|13517->11757|13547->11758|13586->11768|13616->11769|13699->11823|13729->11824|13768->11834|13798->11835|13987->11995|14017->11996|14082->12032|14112->12033|14201->12093|14231->12094|14273->12107|14303->12108|14389->12165|14419->12166|14449->12167|14490->12179|14520->12180|14550->12181|14596->12198|14666->12239|14696->12240|14752->12267|14782->12268|14838->12294|14869->12295|14918->12314|14949->12315|15004->12340|15035->12341|15084->12360|15115->12361|15165->12382|15195->12383|15225->12384|15258->12388|15288->12389|15318->12390|15364->12407|15472->12486|15502->12487|15532->12488|15564->12491|15594->12492|15624->12493|15670->12510|15792->12603|15822->12604|15852->12605|15893->12617|15923->12618|15953->12619|15999->12636|16107->12715|16137->12716|16167->12717|16200->12721|16230->12722|16260->12723|16306->12740|16392->12797|16422->12798|16452->12799|16484->12802|16514->12803|16544->12804|16586->12817|16638->12841|16667->12842|16696->12843|16730->12848|16760->12849|16790->12850|16823->12855|16852->12856|16881->12857|16935->12882|16965->12883|16995->12884|17032->12893|17256->13089|17286->13090|17316->13091|17372->13118|17402->13119|17432->13120|17474->13133|17517->13147|17547->13148|17585->13157|17615->13158|17660->13174|17690->13175|17748->13204|17778->13205|17994->13392|18024->13393|18078->13418|18108->13419|18360->13642|18390->13643|18431->13655|18461->13656|18548->13714|18578->13715|18619->13727|18649->13728|18996->14046|19026->14047|19056->14048|19099->14062|19129->14063|19159->14064|19209->14085|19279->14126|19309->14127|19367->14156|19397->14157|19453->14183|19484->14184|19535->14205|19566->14206|19621->14231|19652->14232|19703->14253|19734->14254|19788->14279|19818->14280|19848->14281|19881->14285|19911->14286|19941->14287|19991->14308|20103->14391|20133->14392|20163->14393|20195->14396|20225->14397|20255->14398|20305->14419|20431->14516|20461->14517|20491->14518|20534->14532|20564->14533|20594->14534|20644->14555|20756->14638|20786->14639|20816->14640|20849->14644|20879->14645|20909->14646|20959->14667|21049->14728|21079->14729|21109->14730|21141->14733|21171->14734|21201->14735|21247->14752|21307->14784|21337->14785|21367->14786|21401->14791|21431->14792|21461->14793|21494->14798|21523->14799|21552->14800|21584->14803|21614->14804|21644->14805|21677->14810|21707->14821|21747->14823|21780->14828|22143->15160
                  LINES: 20->1|25->1|27->3|27->3|27->3|28->4|31->7|31->7|32->8|245->221|245->221|245->221|245->221|245->221|245->221|246->222|246->222|246->222|246->222|246->222|250->226|250->226|250->226|250->226|250->226|250->226|250->226|250->226|250->226|250->226|250->226|250->226|253->229|253->229|253->229|253->229|253->229|253->229|253->229|253->229|254->230|254->230|254->230|254->230|255->231|255->231|255->231|255->231|261->237|261->237|261->237|261->237|263->239|263->239|263->239|263->239|265->241|265->241|265->241|265->241|265->241|265->241|266->242|266->242|266->242|266->242|266->242|266->242|266->242|266->242|266->242|266->242|266->242|266->242|266->242|267->243|267->243|267->243|267->243|267->243|267->243|268->244|269->245|269->245|269->245|269->245|269->245|269->245|270->246|271->247|271->247|271->247|271->247|271->247|271->247|272->248|273->249|273->249|273->249|273->249|273->249|273->249|274->250|275->251|275->251|275->251|275->251|275->251|275->251|276->252|278->254|278->254|278->254|278->254|278->254|278->254|279->255|279->255|279->255|279->255|279->255|279->255|280->256|285->261|285->261|285->261|285->261|285->261|285->261|286->262|286->262|286->262|286->262|286->262|286->262|286->262|286->262|286->262|290->266|290->266|290->266|290->266|294->270|294->270|294->270|294->270|295->271|295->271|295->271|295->271|305->281|305->281|305->281|305->281|305->281|305->281|306->282|306->282|306->282|306->282|306->282|306->282|306->282|306->282|306->282|306->282|306->282|306->282|306->282|307->283|307->283|307->283|307->283|307->283|307->283|308->284|309->285|309->285|309->285|309->285|309->285|309->285|310->286|311->287|311->287|311->287|311->287|311->287|311->287|312->288|313->289|313->289|313->289|313->289|313->289|313->289|314->290|315->291|315->291|315->291|315->291|315->291|315->291|316->292|318->294|318->294|318->294|318->294|318->294|318->294|319->295|319->295|319->295|319->295|319->295|319->295|320->296|321->297|321->297|322->298|327->303
                  -- GENERATED --
              */
          