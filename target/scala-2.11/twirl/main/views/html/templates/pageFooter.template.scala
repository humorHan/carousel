
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object pageFooter_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class pageFooter extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template2[Boolean,views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(showCart: Boolean = true)(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.72*/("""

"""),format.raw/*3.19*/("""
"""),format.raw/*4.1*/("""<div class="footer box">
    <div class="container">
        <dl class="footer-title">
            <dt>
                <span>帮助中心</span>
            </dt>
            <dd>
                <a href="/faq/distribution" target="_blank">配送方式及运费</a>
            </dd>
            <dd>
                <a href="/help/process" target="_blank">订购流程</a>
            </dd>
            <dd>
                <a href="/product/custom" target="_blank">按需定制</a>
            </dd>
            <dd>
                <a href="/faq/printing" target="_blank">常见问题</a>
            </dd>
            <dd>
                <a href="/help/returns" target="_blank">退换货说明</a>
            </dd>
        </dl>
        <dl class="footer-title">
            <dt>
                <span>印刷知识</span>
            </dt>
            <dd>
                <a href="/help/upload">上传文件须知</a>
            </dd>
            <dd>
                <a href="/help/chromatism" target="_blank">关于色差</a>
            </dd>
            <dd>
                <a href="/help/download" target="_blank">空白模板下载</a>
            </dd>
        </dl>
        <dl class="footer-title">
            <dt>
                <span>友情链接</span>
            </dt>
            <dd>
                <a href="http://www.xiaojiangyou.com" target="_blank">小酱油活动平台</a>
            </dd>
            <dd>
                <a href="http://www.xiaojiangyou.com/download.html" target="_blank">小酱油APP下载</a>
            </dd>
            <dd>
                <a href="http://pr.soyyin.com" target="_blank">小酱油传媒</a>
            </dd>
        </dl>
        <dl class="footer-title">
            <dt>
                <span>关于酱油网</span>
            </dt>
            <dd>
                <a href="/about/introduction">酱印网简介</a>
            </dd>
            <dd>
                <a href="/about/contactus">联系我们</a>
            </dd>
            <dd>
                <a href="/about/services">服务声明</a>
            </dd>
        </dl>
        <dl class="footer-title">
            <dt>
                <span>下单QQ</span>
            </dt>
            <dd>
                <a>2852519982</a>
            </dd>
            <dd class="qqalign">
                <a class="btn" target="_blank" href="http://q.url.cn/s/9VHYO">QQ在线客服</a>
            </dd>
        </dl>
        <dl class="footer-title">
            <dt>
                <span>下单热线</span>
            </dt>
            <dd>
                <a>400-038-6898</a>
            </dd>
        </dl>
        <dl class="footer-title">
            <dt>
                <span>扫一扫二维码</span>
            </dt>
            <dt>
                <span>联系油妹下单</span>
            </dt>
            <dt>
                <img src="/assets/img/yinshua_qrcode.jpeg">
            </dt>
        </dl>
        <div style="clear: both"></div>
        <p class="copyright">
            <span>Copyright © 2015-2016</span>
            <span>北京小酱油文化传媒有限公司</span>
            <span>京ICP备16020515号</span>
        </p>
    </div>
</div>
<div id="login_box_shade_layer" class="login-box-shade-layer"></div>
<div id="login_box" class="login-box">
    <div class="login-box-head">
        <a id="login_box_close" class="close" title="关闭"></a>
        <div>登录酱印网</div>
    </div>
    <div class="divide-bar"></div>
    <div class="login-box-body">
        <ul id="login_type" class="login-type">
            <li class="login-type-checked" data-type="commonLog">普通登录</li>
            <li data-type="quickLog">验证码快捷登录</li>
        </ul>
        <form class="form-type" id="commonLog">
            <div class="form-control">
                <label class="sr-only">手机号</label>
                <input id="login_item_username" class="control-input" type="text" placeholder="请输入手机号或邮箱">
            </div>
            <div class="form-control">
                <label class="sr-only">密码</label>
                <input id="login_item_password" class="control-input password" type="password" placeholder="请输入密码">
                <div class="show-login-tip" id="login_error_tip"></div>
            </div>
        </form>
        <form class="form-type" id="quickLog">
            <div class="form-control">
                <label class="sr-only">手机号</label>
                <input id="login_item_phone" class="control-input" type="text" placeholder="请输入手机号">
            </div>
            <div id="log_show_captcha" class="form-control">
                <label class="sr-only">图形验证码</label>
                <input id="login_item_captcha" class="control-input captcha" type="text" placeholder="请输入图形验证码">
                <img id="login_show_captcha_img" class="input-right" alt="看不清楚？点我换一张" title="看不清楚？点我换一张">
            </div>
            <div class="form-control">
                <label class="sr-only">验证码</label>
                <input id="login_item_code" class="control-input code" text="text" placeholder="请输入验证码">
                <a id="get_phone_code" class="input-right btn-enable">获取验证码</a>
                <div class="show-login-tip" id="quick_login_error_tip"></div>
            </div>
        </form>
        <div class="login-btn">
            <a class="forget-password" href="http://www.xiaojiangyou.com/#findpassword/person" target="_blank">忘记密码？</a>
            <a id="auto_login" class="auto-login"><span></span>自动登录</a>
            <a class="btn btn-enable" id="login_submit" data-type="commonLog">登 录</a>
        </div>
        <div>
            <div class="register">
                还没有账号？<a href="/static/register.html">立即注册</a>
            </div>
        </div>
    </div>
</div>
<script>
    """),format.raw/*159.34*/("""
    """),format.raw/*160.5*/("""var showCart = """),_display_(/*160.21*/showCart),format.raw/*160.29*/(""";

    var qiniuCdnHost = """"),_display_(/*162.26*/Html(pageParam.qiniuCdnHost)),format.raw/*162.54*/("""";
</script>
"""))
      }
    }
  }

  def render(showCart:Boolean,pageParam:views.params.PageParam): play.twirl.api.HtmlFormat.Appendable = apply(showCart)(pageParam)

  def f:((Boolean) => (views.params.PageParam) => play.twirl.api.HtmlFormat.Appendable) = (showCart) => (pageParam) => apply(showCart)(pageParam)

  def ref: this.type = this

}


}

/**/
object pageFooter extends pageFooter_Scope0.pageFooter
              /*
                  -- GENERATED --
                  DATE: Fri Nov 18 15:44:07 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/pageFooter.scala.html
                  HASH: 1171f993a35a264623ecd6bde1029f79c912bdd9
                  MATRIX: 571->1|736->71|765->91|792->92|6361->5661|6394->5666|6438->5682|6468->5690|6524->5718|6574->5746
                  LINES: 20->1|25->1|27->3|28->4|183->159|184->160|184->160|184->160|186->162|186->162
                  -- GENERATED --
              */
          