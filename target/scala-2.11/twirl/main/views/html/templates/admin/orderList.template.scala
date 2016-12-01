
package views.html.templates.admin

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object orderList_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class orderList extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates._

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("订单管理")/*4.14*/ {_display_(Seq[Any](format.raw/*4.16*/("""
    """),format.raw/*5.5*/("""<!-- css 们 -->
    <link rel="stylesheet" type="text/css" href="/assets/css/home.css">
    <link rel="stylesheet" href="http://7bvan6.com2.z0.glb.qiniucdn.com/bootstrap-datetimepicker.min.css"/>
""")))}/*8.2*/ {_display_(Seq[Any](format.raw/*8.4*/("""
    """),format.raw/*9.5*/("""<!-- 网页主体 -->
    <div class="box">
        <div class="container">
            <div class="sidebar">
                <a class="sidebar-title"><img src="/assets/img/home_help.png">管理中心</a>
                <a class="sidebar-link" href="/">商品管理</a>
                <a class="sidebar-link active" href="/admin/order/list">订单管理</a>
                <a class="sidebar-link" href="/">首页管理</a>
                <a class="sidebar-title"><img src="/assets/img/home_order.png">订单中心</a>
                <a class="sidebar-link" href="/home">我的订单</a>
                <a class="sidebar-title"><img src="/assets/img/home_account.png">账户中心</a>
                <a class="sidebar-link" href="/">修改密码</a>
                <a class="sidebar-link" href="/">换绑手机</a>
                <a class="sidebar-title"><img src="/assets/img/home_help.png">其他</a>
                <a class="sidebar-link" href="/faq/account">帮助中心</a>
            </div>
            <div class="main-area">
                <div class="search-query">
                    <a id="query_time">批量订单查询</a>
                    <a id="query_num" class="active">按订单号查询</a>
                </div>
                <div class="search-form" id="query_time_form">
                    <div class="form-control">
                        <label>订单提交时间</label>
                        <input class="form-input" type="text" id="search_starttime" readonly>
                        <input class="form-input" type="text" id="search_endtime" readonly>
                    </div>
                    <div class="form-control">
                        <label>订单状态</label>
                        <select class="form-input">
                            <option value="全部">全部</option>
                            <option value="订单已提交">订单已提交</option>
                            <option value="已付款">已付款</option>
                            <option value="商家已接单">商家已接单</option>
                            <option value="订单已完成">订单已完成</option>
                            <option value="订单已取消">订单已取消</option>
                        </select>
                    </div>
                    <div class="form-control">
                        <label>订单支付方式</label>
                        <select class="form-input">
                            <option value="全部">全部</option>
                            <option value="在线支付">在线支付</option>
                            <option value="货到付款">货到付款</option>
                        </select>
                    </div>
                    <div class="form-control">
                        <label>订单金额</label>
                        <input class="form-input" type="text" id="min_sum">至
                        <input class="form-input" type="text" id="max_sum">
                    </div>
                </div>
                <div class="search-form" id="query_num_form">
                    <div class="form-control">
                        <label>订单号</label>
                        <input class="form-input" type="text" id="query_order_id">
                        <span id="query_order_id_tip" class="tip input-tip">订单号为11位数字</span>
                    </div>
                </div>
                <a class="query-btn" id="admin_query_order" data-status="query_num">查询</a>
                <div class="query-result">
                    <table class="query-table">
                        <thead>
                            <td>下单时间</td>
                            <td>订单号</td>
                            <td>订单金额</td>
                            <td>支付方式</td>
                            <td>收货人信息</td>
                            <td>最近操作时间</td>
                            <td>订单状态/文件上传状态</td>
                        </thead>
                        <tbody id="admin_order_list"></tbody>
                    </table>
                    <div class="pagination" id="show_pagination"></div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/x-jquery-tmpl" id="template">
    """),format.raw/*88.5*/("""{"""),format.raw/*88.6*/("""{"""),format.raw/*88.7*/("""each(i,order) orders"""),format.raw/*88.27*/("""}"""),format.raw/*88.28*/("""}"""),format.raw/*88.29*/("""
        """),format.raw/*89.9*/("""<tr>
            <td>$"""),format.raw/*90.18*/("""{"""),format.raw/*90.19*/("""changeTimeFormat(order.create_time)"""),format.raw/*90.54*/("""}"""),format.raw/*90.55*/("""</td>
            <td>$"""),format.raw/*91.18*/("""{"""),format.raw/*91.19*/("""order.id"""),format.raw/*91.27*/("""}"""),format.raw/*91.28*/("""</td>
            <td>$"""),format.raw/*92.18*/("""{"""),format.raw/*92.19*/("""total(order)"""),format.raw/*92.31*/("""}"""),format.raw/*92.32*/("""</td>
            <td>$"""),format.raw/*93.18*/("""{"""),format.raw/*93.19*/("""order.payment === 'ONLINE'?'在线支付':'货到付款'"""),format.raw/*93.59*/("""}"""),format.raw/*93.60*/("""</td>
            <td>
                $"""),format.raw/*95.18*/("""{"""),format.raw/*95.19*/("""order.consignee_name"""),format.raw/*95.39*/("""}"""),format.raw/*95.40*/(""" """),format.raw/*95.41*/("""$"""),format.raw/*95.42*/("""{"""),format.raw/*95.43*/("""order.consignee_phone"""),format.raw/*95.64*/("""}"""),format.raw/*95.65*/("""
                """),format.raw/*96.17*/("""<div>
                    $"""),format.raw/*97.22*/("""{"""),format.raw/*97.23*/("""order.address"""),format.raw/*97.36*/("""}"""),format.raw/*97.37*/("""
                """),format.raw/*98.17*/("""</div>
            </td>
            <td>$"""),format.raw/*100.18*/("""{"""),format.raw/*100.19*/("""changeTimeFormat(order.last_operate_time)"""),format.raw/*100.60*/("""}"""),format.raw/*100.61*/("""</td>
            <td class="status">
                <a>$"""),format.raw/*102.21*/("""{"""),format.raw/*102.22*/("""status_t(order.status)"""),format.raw/*102.44*/("""}"""),format.raw/*102.45*/("""</a>
                """),format.raw/*103.17*/("""{"""),format.raw/*103.18*/("""{"""),format.raw/*103.19*/("""if order.all_files_uploaded"""),format.raw/*103.46*/("""}"""),format.raw/*103.47*/("""}"""),format.raw/*103.48*/("""
                    """),format.raw/*104.21*/("""<a>全部已上传</a>
                """),format.raw/*105.17*/("""{"""),format.raw/*105.18*/("""{"""),format.raw/*105.19*/("""else"""),format.raw/*105.23*/("""}"""),format.raw/*105.24*/("""}"""),format.raw/*105.25*/("""
                    """),format.raw/*106.21*/("""<a class="warning">待上传</a>
                """),format.raw/*107.17*/("""{"""),format.raw/*107.18*/("""{"""),format.raw/*107.19*/("""/if"""),format.raw/*107.22*/("""}"""),format.raw/*107.23*/("""}"""),format.raw/*107.24*/("""
                """),format.raw/*108.17*/("""<a class="link" href="/admin/order?id=$"""),format.raw/*108.56*/("""{"""),format.raw/*108.57*/("""order.id"""),format.raw/*108.65*/("""}"""),format.raw/*108.66*/("""" target="_blank">查看订单详情</a>
            </td>
        </tr>
    """),format.raw/*111.5*/("""{"""),format.raw/*111.6*/("""{"""),format.raw/*111.7*/("""/each"""),format.raw/*111.12*/("""}"""),format.raw/*111.13*/("""}"""),format.raw/*111.14*/("""
    """),format.raw/*112.5*/("""</script>
""")))}/*113.2*/ {_display_(Seq[Any](format.raw/*113.4*/("""
    """),format.raw/*114.5*/("""<!-- js 们 -->
    <script src="http://7bvan6.com2.z0.glb.qiniucdn.com/bootstrap-datetimepicker.min.js"></script>
    <script src="http://7bvan6.com2.z0.glb.qiniucdn.com/bootstrap-datetimepicker.zh-CN.js"></script>
    <script type="text/javascript" src="/assets/js/jquery.tmpl.min.js"></script>
    <script src="/assets/js/admin/index.js" type="text/javascript"></script>
""")))}),format.raw/*119.2*/("""
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
object orderList extends orderList_Scope0.orderList
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:43 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/admin/orderList.scala.html
                  HASH: c7dfb3dc16fb71ce85ae3749cfca7d20493462c7
                  MATRIX: 567->1|737->47|764->79|791->81|811->93|850->95|881->100|1094->296|1132->298|1163->303|5175->4288|5203->4289|5231->4290|5279->4310|5308->4311|5337->4312|5373->4321|5423->4343|5452->4344|5515->4379|5544->4380|5595->4403|5624->4404|5660->4412|5689->4413|5740->4436|5769->4437|5809->4449|5838->4450|5889->4473|5918->4474|5986->4514|6015->4515|6083->4555|6112->4556|6160->4576|6189->4577|6218->4578|6247->4579|6276->4580|6325->4601|6354->4602|6399->4619|6454->4646|6483->4647|6524->4660|6553->4661|6598->4678|6669->4720|6699->4721|6769->4762|6799->4763|6886->4821|6916->4822|6967->4844|6997->4845|7047->4866|7077->4867|7107->4868|7163->4895|7193->4896|7223->4897|7273->4918|7331->4947|7361->4948|7391->4949|7424->4953|7454->4954|7484->4955|7534->4976|7606->5019|7636->5020|7666->5021|7698->5024|7728->5025|7758->5026|7804->5043|7872->5082|7902->5083|7939->5091|7969->5092|8062->5157|8091->5158|8120->5159|8154->5164|8184->5165|8214->5166|8247->5171|8277->5182|8317->5184|8350->5189|8754->5562
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|31->8|31->8|32->9|111->88|111->88|111->88|111->88|111->88|111->88|112->89|113->90|113->90|113->90|113->90|114->91|114->91|114->91|114->91|115->92|115->92|115->92|115->92|116->93|116->93|116->93|116->93|118->95|118->95|118->95|118->95|118->95|118->95|118->95|118->95|118->95|119->96|120->97|120->97|120->97|120->97|121->98|123->100|123->100|123->100|123->100|125->102|125->102|125->102|125->102|126->103|126->103|126->103|126->103|126->103|126->103|127->104|128->105|128->105|128->105|128->105|128->105|128->105|129->106|130->107|130->107|130->107|130->107|130->107|130->107|131->108|131->108|131->108|131->108|131->108|134->111|134->111|134->111|134->111|134->111|134->111|135->112|136->113|136->113|137->114|142->119
                  -- GENERATED --
              */
          