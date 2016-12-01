
package views.html.templates

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object newPageFooter_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class newPageFooter extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template2[Boolean,views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(showCart: Boolean = true)(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.72*/("""

"""),format.raw/*3.19*/("""

"""),format.raw/*5.1*/("""<footer class="font12">
    <div class="footer-main w1200">
        <ul class="quality font18 clearFix">
            <li>
                <span class="quality1 mr10 middle"></span>
                <span class="middle">价优品全</span>
            </li>
            <li>
                <span class="quality2 mr10 middle"></span>
                <span class="middle">精工高质</span>
            </li>
            <li>
                <span class="quality3 mr10 middle"></span>
                <span class="middle">售后无忧</span>
            </li>
            <li>
                <span class="quality4 mr10 middle"></span>
                <span class="middle">高速省心</span>
            </li>
        </ul>
        <div class="line"></div>
        <div class="friend-link clearFix">
            <img src="/assets/img/logo.png" height="51" width="87" class="floatLeft">
            <dl class="help-center">
                <dt>帮助中心</dt>
                <dd>
                    <a href="/faq/distribution" target="_blank">配送方式及费用</a>
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
            <dl>
                <dt>印刷知识</dt>
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
            <dl class="link">
                <dt>友情链接</dt>
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
            <dl>
                <dt>关于我们</dt>
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
            <dl class="weChat">
                <dt>官方微信</dt>
                <dd>
                    <img src="/assets/img/weChat.png" alt=""/>
                </dd>
            </dl>
            <dl>
                <dt class="w160 center">快速下单</dt>
                <dd>
                    <div class="font22 bold center w160 red" style="margin-top: -6px; margin-bottom: 4px;">400-038-6898</div>
                    <div class="w160 center" style="margin-bottom: 15px;">周一至周日9:00-20:00</div>
                    <a class="footer-qq font14 pointer block" target="_blank" href="http://q.url.cn/s/9VHYO">
                        <div>
                            <span class="footer-qq-bg middle"></span>
                            <span class="middle" style="line-height: 23px;">在线客服</span>
                        </div>
                        <div class="footer-num">2780471630</div>
                    </a>
                </dd>
            </dl>
        </div>
    </div>
    <div class="copyRight">Copyright © 2015-2016 北京小酱油文化传媒有限公司 京ICP备16020515号</div>
</footer>

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

<script src="/assets/js/jquery-2.2.4.js"></script>
<script src="http://cdn.staticfile.org/jquery-cookie/1.4.0/jquery.cookie.min.js"></script>
<script type="text/javascript">
    """),format.raw/*163.34*/("""
    """),format.raw/*164.5*/("""var showCart = """),_display_(/*164.21*/showCart),format.raw/*164.29*/(""";
    var qiniuCdnHost = """"),_display_(/*165.26*/Html(pageParam.qiniuCdnHost)),format.raw/*165.54*/("""";

    if (!document.referrer || document.referrer.indexOf("soyyin.com") < 0 || document.location.href === "http://www.soyyin.com/") """),format.raw/*167.131*/("""{"""),format.raw/*167.132*/("""
        """),format.raw/*168.9*/("""var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
        document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F5014582dd695d7245fed59e668a39588' type='text/javascript'%3E%3C/script%3E"));
        $(".call-later").addClass("active");
    """),format.raw/*171.5*/("""}"""),format.raw/*171.6*/("""
"""),format.raw/*172.1*/("""</script>
<div style="display:none">
    <script src="http://s11.cnzz.com/z_stat.php?id=1258858023&web_id=1258858023" language="JavaScript"></script>
</div>"""))
      }
    }
  }

  def render(showCart:Boolean,pageParam:views.params.PageParam): play.twirl.api.HtmlFormat.Appendable = apply(showCart)(pageParam)

  def f:((Boolean) => (views.params.PageParam) => play.twirl.api.HtmlFormat.Appendable) = (showCart) => (pageParam) => apply(showCart)(pageParam)

  def ref: this.type = this

}


}

/**/
object newPageFooter extends newPageFooter_Scope0.newPageFooter
              /*
                  -- GENERATED --
                  DATE: Tue Nov 29 14:03:29 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/newPageFooter.scala.html
                  HASH: 8fd2449a5f4e6d4d592e648c1a2055bd51bcc7bf
                  MATRIX: 577->1|742->71|771->91|799->93|7376->6670|7409->6675|7453->6691|7483->6699|7538->6726|7588->6754|7752->6888|7783->6889|7820->6898|8154->7204|8183->7205|8212->7206
                  LINES: 20->1|25->1|27->3|29->5|187->163|188->164|188->164|188->164|189->165|189->165|191->167|191->167|192->168|195->171|195->171|196->172
                  -- GENERATED --
              */
          