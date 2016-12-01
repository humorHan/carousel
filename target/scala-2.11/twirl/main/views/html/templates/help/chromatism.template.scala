
package views.html.templates.help

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object chromatism_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class chromatism extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates._

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("关于色差")/*4.14*/ {_display_(Seq[Any](format.raw/*4.16*/("""
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
				    <dd><a href="/help/upload">上传文件须知</a></dd>
				    <dd><a href="/help/chromatism" class="sel">关于色差</a></dd>
				    <dd><a href="/help/download">空白模板下载</a></dd>
				    <dt><a href="javascript:;">订购指南</a></dt>
				    <dd><a href="/help/process">订购流程</a></dd>
				    <dd><a href="/help/logistics">物流查询</a></dd>
				    <dt><a href="javascript:;">售后服务</a></dt>
				    <dd><a href="/help/returns">退换货说明</a></dd>
		    		<dt></dt>
				</dl>
				<div class="helper_right_container">
					<div class="helper_title"><span>关于色差</span></div>
					<div class="content_container">
						<div>彩色印刷是由CMYK四色版套印而成，由于印刷和承印物的特殊性，印刷成品色差值控制在±10%以内均为合格产品，显示器上视觉颜色和印刷成品颜色均有一定的差异，不同批次的产品也会略有差异，详情请参看国际胶印印刷标准ISO12647-2。</div>
						<h3>1 .实际印刷效果和电脑屏幕显示之间存在色差。</h3>
						<div>图片在电脑屏幕是以RGB色彩模式显示，呈现色彩较鲜亮，而印刷的色彩模式为CMYK，色彩模式不同，出现少许的偏色是正常的，并且印刷出来颜色会受到纸张和光源强度的影响。所以实际印刷效果和电脑屏幕显示效果会存在微弱色差。</div>
						<h3>2.同一文件不同批次印刷也会产生色差。</h3>
						<div class="img">
							<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_help1.png" alt="酱印网">
						</div>
						<div>在印刷过程中，油墨的干燥快慢会受到温度、湿度等周围环境的影响，因此不同批次的印品会由于不同时间段印刷车间内环境的变化出现差异，再加上采用的是拼版印刷，同一文件前后多次印刷会有一定概率出现色彩深浅不同的情况。</div>
						<h3>3.同一批次的印品，也无法100%保证绝对无色差</h3>
						<div class="img"> 
							<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_help2.png" alt="酱印网">
						</div>
						<div>酱印网默认采用拼版印刷，即将所有的印品拼在一起进行印刷，优点是价格便宜，缺点是使用电脑自动统一调色，无法针对单个文件进行专门调色，对色彩的控制是在±15%均属正常。故而哪怕是同一批次的订单，也无法百分百的保证绝对无色差。</div>
						<h3>● 如何正确地判断色差：</h3>
						<div>根据印刷行业的成品验收标准规定，C.M.Y.K各值误差控制在上下10%以内，对照色谱在此标准内的色彩偏差将被视为正常范围，还请您知悉。</div>
						<div class="img">
							<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_help3.png" alt="酱印网">
						</div>
						<h3>如何避免出现色差?</h3>
	                    <div>1、请使用专业制图软件制作印刷稿件，务必设置为CMYK色彩模式，CMYK 四色总值不得超过250%。</div>
	                    <div>2、避免使用极容易偏色的颜色或模板，如紫色、深蓝色、橙色、咖啡色、 强金属色、渐变红色。</div>
	                    <div>3、如您对印刷成品颜色有严格要求，可与客服联系申请专版印刷。</div>
						<h3>色差问题的投诉处理说明</h3>
	                    <div>1、印刷色差超过10%以上，酱印网无条件免费重印。</div>
	                    <div>2、正常色差范围10%以内的，恕无法按照售后件进行处理。</div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
""")))}/*64.2*/ {_display_(Seq[Any](format.raw/*64.4*/("""
"""),format.raw/*65.1*/("""<!-- js 们 -->
""")))}),format.raw/*66.2*/("""
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
object chromatism extends chromatism_Scope0.chromatism
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:43 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/help/chromatism.scala.html
                  HASH: a839046e203446bfb98cb46ef20baa490faaff09
                  MATRIX: 568->1|738->47|765->79|792->81|812->93|851->95|879->97|1037->238|1075->240|1103->242|3811->2932|3850->2934|3878->2935|3923->2950
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|30->7|30->7|31->8|87->64|87->64|88->65|89->66
                  -- GENERATED --
              */
          