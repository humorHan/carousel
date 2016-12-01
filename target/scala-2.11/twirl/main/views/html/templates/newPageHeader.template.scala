
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object newPageHeader_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class newPageHeader extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template2[Boolean,views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(showNavigationBar: Boolean = true)(implicit param: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.77*/("""

"""),format.raw/*3.22*/("""

"""),format.raw/*5.1*/("""<div class="borderB">
    <div class="site-nav h30 w1200">
        <ul class="site-nav-handle floatRight mr10 font12">
            <li class="login mr10 pointer status1">登录</li>
            <li class="mr10 pointer ver status1">|</li>
            <li class="mr20 pointer status1">
                <a href="/static/register.html">注册</a>
            </li>
            <li class="login-status pointer mr20 relative none">
                <span>欢迎您，酱油君</span>
                <i class="login-status-bg block"></i>
                <ul class="login-out none">
                    <li><a href="/home">我的订单</a></li>
                    <li class="login-out-btn">退出</li>
                </ul>
            </li>
            <li class="pointer">
                <a href="/faq/account">
                    <span class="help-bg mr10"></span>
                    <span class="help-text floatRight">帮助中心</span>
                </a>
            </li>
        </ul>
    </div>
</div>

<div class="activity-wrap"></div>

<div class="logo-col w1200">
    <a class="logo-wrap" href="/new" title="【酱印网】物料制作_公关会展_场地_活动整包解决方案服务平台">
        <img src="/assets/img/logo.png" class="logo middle">
    </a>
    <span class="logo-text middle ml20 font18">印刷定制服务专家</span>
    <span class="cart-wrap floatRight font12">
        <a href="/cart" class="cart block">
            <span class="cart-bg block ml20 middle"></span>
            <span class="ml10 mr10">我的购物车</span>
            <span class="cart-num bold font14"></span>
            <i></i>
        </a>
        <div class="cart-products-wrap"></div>
    </span>
</div>

<ul class="right-bar">
    <li class="pointer">
        <div class="right-qq"></div>
        <div>QQ客服</div>
    </li>
    <li class="right-phone-wrap relative pointer">
        <div class="right-phone"></div>
        <div>热线电话</div>
        <div class="call-later">
            <div class="clearFix">
                <span class="floatLeft font12">热线电话</span>
            </div>
            <i class="right-close pointer"></i>
            <div class="right-phone-num bold center">400-038-6898</div>
            <div>
                <input class="your-phone" type="text" placeholder="请输入您的电话号码"/>
            </div>
            <span class="call-later-btn pointer font14">免费通话</span>
            <div class="right-triangle"></div>
        </div>
    </li>
    <li class="goTop pointer">
        <div class="goTop-bg"></div>
    </li>
</ul>

"""),_display_(/*75.2*/if(showNavigationBar)/*75.23*/ {_display_(Seq[Any](format.raw/*75.25*/(""" """),_display_(/*75.27*/newNavigationBar()),format.raw/*75.45*/(""" """)))}))
      }
    }
  }

  def render(showNavigationBar:Boolean,param:views.params.PageParam): play.twirl.api.HtmlFormat.Appendable = apply(showNavigationBar)(param)

  def f:((Boolean) => (views.params.PageParam) => play.twirl.api.HtmlFormat.Appendable) = (showNavigationBar) => (param) => apply(showNavigationBar)(param)

  def ref: this.type = this

}


}

/**/
object newPageHeader extends newPageHeader_Scope0.newPageHeader
              /*
                  -- GENERATED --
                  DATE: Tue Nov 29 14:03:29 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/newPageHeader.scala.html
                  HASH: 449c3c130b47a77d66b99561c2be4808f0490fd3
                  MATRIX: 577->1|747->76|776->99|804->101|3270->2541|3300->2562|3340->2564|3369->2566|3408->2584
                  LINES: 20->1|25->1|27->3|29->5|99->75|99->75|99->75|99->75|99->75
                  -- GENERATED --
              */
          