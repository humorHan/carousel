
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object customProduct_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class customProduct extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template4[String,Seq[String],String,views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(categoryName: String, imageUrls: Seq[String], detail: String)(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.108*/("""

"""),_display_(/*3.2*/main("按需定制")/*3.14*/ {_display_(Seq[Any](format.raw/*3.16*/("""
    """),format.raw/*4.5*/("""<link rel="stylesheet" type="text/css" href="/assets/css/product.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/on-demand.css">
""")))}/*6.2*/ {_display_(Seq[Any](format.raw/*6.4*/("""
	"""),format.raw/*7.2*/("""<div class="box">
        <div class="container">
            <p class="breadcrumb">当前位置：<a href="/">首页</a> > <a>"""),_display_(/*9.65*/categoryName),format.raw/*9.77*/("""</a> > <a class="current" href="#">按需定制</a></p>
            <div class="product-list">
                <div class="image-zoom">
                    <div id="image_show" class="image-zoom-show">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAA
       AACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                        <span class="zoom-area"></span>
                    </div>
                    <div id="image_big" style="z-index:1">
                        <img src="">
                    </div>
                    <div class="image-zoom-thumb">
                        <ul id="imageList" class="image-zoom-list">
                            """),_display_(/*22.30*/for(image <- imageUrls) yield /*22.53*/ {_display_(Seq[Any](format.raw/*22.55*/("""
                                """),format.raw/*23.33*/("""<li><img src=""""),_display_(/*23.48*/image),format.raw/*23.53*/(""""></li>
                            """)))}),format.raw/*24.30*/("""
                        """),format.raw/*25.25*/("""</ul>
                    </div>
                </div>
                <div class="product-right-side">
                    <a href="/faq/printing" class="printing-q-a" title="印刷FAQ" target="_blank"></a>
                    <a href="/faq/account" class="q-a" title="常见问题" target="_blank"></a>
                </div>
                <div class="product-list-item">
                    <div style="margin-bottom: 25px">
                        <p class="on-demand-name">按需定制</p>
                        <p class="on-demand-prompt">（包含按需定制商品的订单提交后，客服会在1个小时内和您确认需求及价格）</p>
                    </div>
                    <div class="cut-off"></div>
                    <div class="on-demand-body">
                        <div class="form-item">
                            <label>
                                <span class="field">产品名称：</span>
                                <input class="textbox on-demand-item-content" type="text" id="on_demand_product_name_input" value="">
                                <b class="required">*</b>
                                <i class="msg">请填写产品名称</i>
                                <input class="textbox placeholder" value="如：手提袋" autocomplete="off" type="text" style="position: absolute; left: 89px; top: 18px;">
                            </label>
                            <a class="icon-help" href="javascript:;">
                                <span class="help-prompt">如您不清楚你需要印刷的产品的具体规格，可以点击右侧的印刷FAQ进行查阅；如需要帮助，请您联系客服MM帮您填写！</span>
                            </a>
                        </div>
                        <!--<div class="form-item">
                            <span class="field">产品分类：</span>
                            <select id="on_demand_product_category_input" class="select select_big">
                                <option value="">请选择分类</option>
                                <option value="定制名片" selected>定制名片</option>
                                <option value="定制喷绘">定制喷绘</option>
                                <option value="定制单页">定制单页</option>
                                <option value="定制折页">定制折页</option>
                                <option value="定制不干胶">定制不干胶</option>
                                <option value="定制档案袋">定制档案袋</option>
                                <option value="定制手提袋">定制手提袋</option>
                                <option value="定制画册">定制画册</option>
                                <option value="定制卡券">定制卡券</option>
                                <option value="其他定制">其他定制</option>
                            </select>
                            <b class="required">*</b>
                            <i class="msg">请选择产品分类</i>
                        </div>-->
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
                        <!--<div class="form-item">
                            <span class="field">印刷方式：</span>
                            <select class="select select_rich" id="on_demand_product_yinshua_input">
                                <option value="单面单色" selected>单面单色</option>
                                <option value="单面双色">单面双色</option>
                                <option value="单面四色">单面四色</option>
                                <option value="双面单色">双面单色</option>
                                <option value="双面双色">双面双色</option>
                                <option value="双面四色">双面四色</option>
                                <option value="其他">其他</option>
                            </select>
                        </div>
                        <div class="form-item">
                            <span class="field">表面处理：</span>
                            <select class="select select_rich" id="on_demand_product_biaomian_input">
                                <option value="单面覆光膜" selected>单面覆光膜</option>
                                <option value="单面覆哑膜">单面覆哑膜</option>
                                <option value="双面覆光膜">双面覆光膜</option>
                                <option value="双面覆哑膜">双面覆哑膜</option>
                                <option value="单面过光油">单面过光油</option>
                                <option value="单面过哑油">单面过哑油</option>
                                <option value="双面过光油">双面过光油</option>
                                <option value="双面过哑油">双面过哑油</option>
                                <option value="其他">其他</option>
                            </select>
                        </div>
                        <div class="form-item">
                            <span class="field">质量要求：</span>
                            <select class="select select_rich" id="on_demand_product_zhiliang_input">
                                <option value="高">高</option>
                                <option value="中" selected>中</option>
                                <option value="低">低</option>
                            </select>
                        </div>-->
                        <div class="form-item">
                            <label>
                                <span class="field">其他要求：</span>
                                <textarea class="textarea on-demand-item-content" id="on_demand_product_others_input"></textarea>
                                <i class="msg" style="margin-left: 90px;">其他要求不能超过500个字</i>
                                <textarea class="textarea placeholder" autocomplete="off" style="position: absolute; left: 89px; top: 18px;">如：需要烫金</textarea>
                            </label>
                        </div>
                    </div>
                    <div class="cut-off" style="margin: 20px 0 30px 0"></div>
                    <div class="product-foot" style="margin-bottom: 0px">
                        <a id="add_to_cart">+加入购物车</a>
                    </div>
                </div>
            </div>
            <div class="product-detail" style="padding-top:40px">
                <div class="product-detail-content" style="margin-left:0px;">
                    <p class="product-detail-head">
                        商品介绍<span></span>
                    </p>
                    <div id="product_details">
                        """),_display_(/*151.26*/Html(detail)),format.raw/*151.38*/("""
                    """),format.raw/*152.21*/("""</div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-layer"></div>
    <div class="modal" id="add_to_cart_modal">
        <div class="modal-head"><a class="close"></a></div>
        <div class="modal-body">
            <div class="tip">
                <div class="message success">成功加入购物车</div>
            </div>
        </div>
        <div class="modal-foot"><a class="btn right" href="/cart">去购物车结算></a><a class="btn left" href="/product/custom"><继续订购</a></div>
    </div>
""")))}/*167.2*/ {_display_(Seq[Any](format.raw/*167.4*/("""
	"""),format.raw/*168.2*/("""<script src="/assets/js/common.js"></script>
    <script src="/assets/js/on-demand.js"></script>
""")))}),format.raw/*170.2*/("""
"""))
      }
    }
  }

  def render(categoryName:String,imageUrls:Seq[String],detail:String,pageParam:views.params.PageParam): play.twirl.api.HtmlFormat.Appendable = apply(categoryName,imageUrls,detail)(pageParam)

  def f:((String,Seq[String],String) => (views.params.PageParam) => play.twirl.api.HtmlFormat.Appendable) = (categoryName,imageUrls,detail) => (pageParam) => apply(categoryName,imageUrls,detail)(pageParam)

  def ref: this.type = this

}


}

/**/
object customProduct extends customProduct_Scope0.customProduct
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:41 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/customProduct.scala.html
                  HASH: ae487c55cabbda7908c95ef18ad8e3392a355d49
                  MATRIX: 595->1|797->107|825->110|845->122|884->124|915->129|1081->278|1119->280|1147->282|1287->396|1319->408|2013->1075|2052->1098|2092->1100|2153->1133|2195->1148|2221->1153|2289->1190|2342->1215|10360->9205|10394->9217|10444->9238|10985->9760|11025->9762|11055->9764|11184->9862
                  LINES: 20->1|25->1|27->3|27->3|27->3|28->4|30->6|30->6|31->7|33->9|33->9|46->22|46->22|46->22|47->23|47->23|47->23|48->24|49->25|175->151|175->151|176->152|191->167|191->167|192->168|194->170
                  -- GENERATED --
              */
          