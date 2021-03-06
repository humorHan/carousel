
package views.html.templates.help

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object upload_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class upload extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates._

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("上传文件须知")/*4.16*/ {_display_(Seq[Any](format.raw/*4.18*/("""
	"""),format.raw/*5.2*/("""<link rel="stylesheet" type="text/css" href="/assets/css/sidebar.css">
	<link rel="stylesheet" type="text/css" href="/assets/css/help.css">
""")))}/*7.2*/ {_display_(Seq[Any](format.raw/*7.4*/("""
	"""),format.raw/*8.2*/("""<div class="box helper_box">
        <div class="container">
			<div class="helper_layout">
				<dl id="sidebar" class="sidebar">
				    <dt><a href="javascript:;">常见问题</a></dt>
				    <dd><a href="/faq/account">账号类</a></dd>
				    <dd><a href="/faq/order">订单类</a></dd>
				    <dd><a href="/faq/payment">支付类</a></dd>
				    <dd><a href="/faq/distribution">配送类</a></dd>
				    <dd><a href="/faq/printing">印刷类</a></dd>
				    <dd><a href="/faq/other">其他类</a></dd>
				    <dt><a href="javascript:;">印刷知识</a></dt>
				    <dd><a href="/help/upload" class="sel">上传文件须知</a></dd>
				    <dd><a href="/help/chromatism">关于色差</a></dd>
				    <dd><a href="/help/download">空白模板下载</a></dd>
				    <dt><a href="javascript:;">订购指南</a></dt>
				    <dd><a href="/help/process">订购流程</a></dd>
				    <dd><a href="/help/logistics">物流查询</a></dd>
				    <dt><a href="javascript:;">售后服务</a></dt>
				    <dd><a href="/help/returns">退换货说明</a></dd>
		    		<dt></dt>
				</dl>
				<div class="helper_right_container">
					<div class="helper_title"><span>上传文件须知</span></div>
					<div class="content_container">
						<div>
							<p>为了让您获得更好的印刷品质和更快捷的服务，请务必遵照如下内容，提供符合我们印前要求的设计文件，以避免给您带来不必要的损失。</p>
						</div>
			            <h3>名片完稿准则：</h3>
			            <div>
				            <p>1. 名片尺寸：以铜版纸名片为例，其完稿尺寸为：92*56mm，出血上下左右各1mm，裁切后完成尺寸为：90*54mm。PVC名片完稿尺寸为：88.5*57mm，出血上下左右各1.5mm，裁切后完成尺寸为：85.5*54mm。其他名片详见对应产品描述。出血之外物件请删除且勿绘制裁切线及十字线，框线则设无，不用填色。</p>
				            <p>2. 完稿框不同于页面框，务必自行画一完稿框线，利于拼版位置的准确。</p>
				            <p>3. 一般名片裁修尺寸固定为四边各1mm，PVC名片裁修尺寸固定为四边各1.5mm，其他名片详见对应产品描述。</p>
				            <p>4. 单面名片：A4页面，如果只有一个印件，把印件内容置放在页面中间即可。若相同印件内容，有多款人名，请放同一文件的不同页面中，请不要放在一个页面里，以免系统识别错误。</p>
				            <p>5. 双面名片：同样是把印件内容放在页面中间即可，正面放在第一个页，背面放在第二页，请勿将正反面放在同一个页面。</p>
				            <p>6. 局部上光、烫金、打凸名片：双面名片请正面放页面的第一页、背面第二页，若有局部上光、烫金、打凸等加工时，黑稿则放在页面的最后一页，请注意每个页面只允许有一张图的存在。正背面的完稿框线，设定K100%，局部上光版、烫金版、打凸版的位置则设K100%的填色。局部上光名片，避免细线、细字或者过于复杂的图形，以防造成偏位。名片局部上光的位置离四边最少留0.5cm以上，不要做在裁切线上，以免因裁切时裁刀压力导致上光膜剥离。打凸请避免太细或负责的图文。烫金请避免线条太细（勿小于0.2mm）、文字太小或复杂的图文，以防止烫金糊掉。</p>
			        	</div>
			            <h3>通用完稿准则：</h3>
			            <div>
				            <p>1. 使用软件：Coreldraw、Adobe Photoshop、Adobe illustrator等软件制作的文件，保存版本：Coreldraw请存成CRD格式9.0版本，Adobe Photoshop请存成PSD格式CS5版本，Adobe illustrator请存成AI格式CS5版本。</p>
				            <p>2. 填色设定一律为CMYK，不能为专色或者RGB。</p>
				            <p>3. 出血3mm以内无阅读性文字，无与裁切线平行的线条。</p>
				            <p>4. 所有文字接需转曲及清除不需要用到的文字杂点。</p>
				            <p>5. 分辨率为300~350DPI，色彩模式为CMYK。</p>
				            <p>6. 无论是名片还是海报请勿画裁切线，请建立正确尺寸的外框线，并注明裁切尺寸。</p>
				            <p>7. 外线框为极细线时，显示器上可以看到细线，透过数位喷墨打样也会被印出来，但因为镭射光、板材、印刷机与纸张等适应性问题而无法被印出线条过细的问题也无法在审稿过程中被发现，因此线条的设定最小值必须设定0.2mm以上才能印出，文字字号不能小于六号字。</p>
				            <p>8. 底图填色的色彩，请勿低于8%，否则颜色太浅无法印出。</p>
				            <p>9. K100%的黑色色块或者线条，全部为黑色直压，不可有其他颜色，以免造成叠色，其他颜色请勿设定套印。</p>
				            <p>10. 请勿使用C100%,M100%,Y100%,K100%四色黑填色，或阶调总值超过250%以上的填色，以免油墨难干导致蹭脏或拖花。</p>
				            <p>11. 所有印刷内容请设定在同图层，请勿锁定物件或图层以免漏印。</p>
				            <p>12. 各家印刷厂使用的油墨、纸张不同，非本公司承印的物件，恕无法作为对色样本。</p>
				            <p>13. 屏幕或者喷墨印稿的颜色，无法作为印刷颜色样本，对颜色要求严格者，请附样印刷，否则无法因色差问题退货。</p>
				            <p>14. 同一档案在不同次印刷因控墨量问题，色彩都有差距，色差10%左右属正常，旧档再印，需附上正确色样印刷供对色之用，以避免色差过大。</p>
				            <p>15. 旧档再印稿件，本公司无法从审稿中得知色样与档案颜色一致。</p>
				            <p>16. 存档时请存所制作的版本为佳，若需降转版本时，请先把特效、渐层、透明度等点阵化，以避免成品与预期不同。</p>
				        </div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
""")))}/*70.2*/ {_display_(Seq[Any](format.raw/*70.4*/("""
"""),format.raw/*71.1*/("""<!-- js 们 -->
""")))}),format.raw/*72.2*/("""
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
object upload extends upload_Scope0.upload
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:43 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/help/upload.scala.html
                  HASH: adff22cab46a4788f0c11ea9fcf3324d22a6aaf9
                  MATRIX: 560->1|730->47|757->79|784->81|806->95|845->97|873->99|1031->240|1069->242|1097->244|4565->3694|4604->3696|4632->3697|4677->3712
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|30->7|30->7|31->8|93->70|93->70|94->71|95->72
                  -- GENERATED --
              */
          