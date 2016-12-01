
package views.html.templates.faq

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object printing_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class printing extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template1[views.params.PageParam,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/()(implicit pageParam: views.params.PageParam):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
import views.html.templates._

Seq[Any](format.raw/*1.48*/("""
"""),format.raw/*3.1*/("""
"""),_display_(/*4.2*/main("常见问题-印刷类")/*4.18*/ {_display_(Seq[Any](format.raw/*4.20*/("""
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
				    <dd><a href="/faq/printing" class="sel">印刷类</a></dd>
				    <dd><a href="/faq/other">其他类</a></dd>
				    <dt><a href="javascript:;">印刷知识</a></dt>
				    <dd><a href="/help/upload">上传文件须知</a></dd>
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
					<div class="helper_title"><span>印刷类</span></div>
					<div class="content_container">
						<h3 class="headline">产品及生产咨询</h3>
						<dl class="faq_item open">
							<dt class="faq_tit"><span>1.铜板纸与特种纸有什么区别？</span></dt>
							<dd class="faq_contain">
								<div>铜版纸平滑度高，光泽度好，印刷效果保真度高，适合各种商务类型的名片、海报、画册等印刷；特种纸有很多种，多数纹样和质感较为显著，每种特种纸适合的印刷效果也不经相同，但价格往往比铜版纸更高。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>2.您们印名片为什么要比快印店慢？</span></dt>
							<dd class="faq_contain">
								<div>传统快印店是由数码或碳粉机印制，优点是速度快，缺点是品质难以把控且价格偏高。酱印网的出品均由专业印刷厂订制生产，需要经过制版、拼版、印刷、裁切等多项工艺，虽然出品速度略慢，但在质量与价格上都远超传统快印店。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>3.非标准尺寸的印刷品能不能做？</span></dt>
							<dd class="faq_contain">
								<div>非标准尺寸的印刷品需要根据您的具体需求来报价；纸张材质、尺寸及印刷工艺等都是影响最终报价的关键因素。非标准尺寸的印刷品往往会比标准尺寸的价格略高，主要是因为多数非标准尺寸的印刷品不合纸张开数，引起成本增加。</div>
							</dd>
						</dl>
						
						<dl class="faq_item">
							<dt class="faq_tit"><span>4.急需使用的印刷品，能加急吗？</span></dt>
							<dd class="faq_contain">
								<div>若您有特殊需求，我们会尽量帮您加急订单，但无法做到100%的保证，因为生产都是按序排单，难以临时介入，易扰乱整个生产过程，不便之处，敬请谅解。（若需加急，请您在下完单后，将订单号告知我们）</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>5.周六下的单（铜版纸名片），下周一能到货吗？</span></dt>
							<dd class="faq_contain">
								<div>周六下的单（铜版纸名片），需要下周二才能到货，不便之处，敬请谅解。</div>
							</dd>
						</dl>
						<h3 class="headline">印刷常见问题</h3>
						<dl class="faq_item">
							<dt class="faq_tit"><span>6.是否提供打样服务？</span></dt>
							<dd class="faq_contain">
								<div>酱印网的产品均为批量专业印刷，所以默认无法提供打样，不便之处，敬请谅解；如需打样服务，请联系我们的客服人员。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>7.为什么会有色差？如何避免色差？</span></dt>
							<dd class="faq_contain">
								<div>彩色印刷是由CMYK四色版套印而成，由于印刷和承印物的特殊性，印刷成品色差值控制在±10%以内均为合格产品；显示器上的颜色和印刷成品颜色均有一定的差异，不同批次的产品也会略有差异，每家印刷厂根据其设备情况所调节的曲线也不同，也会导致有相应的色差，我司采用国际胶印标准ISO12647-2，如有疑问请参阅此标准。每家印刷厂使用的油墨，纸张，版材都不尽同，温湿度和印刷参数的设定也不一致，因此会产生色差，加上合板印刷必须考虑每个客户的稿件，不会只考虑一单，更无法做到百分百无色差。</div>
								<div>关于如何避免色差有以下三点建议：</div>
								<div>1)请使用专业制图软件制作印刷稿件，务必设置为CMYK色彩模式，CMYK 四色总值不得超过250%。</div>
								<div>2)避免使用极容易偏色的颜色或模板，如紫色、深蓝色、橙色、咖啡色、 强金属色、渐变红色。</div>
								<div>3)如您对印刷成品颜色有非常严苛的要求，可与客服联系申请专版印刷。</div>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq1.jpg" alt="酱印网">
								</div>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq2.jpg" alt="酱印网">
								</div>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq3.jpg" alt="酱印网">
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>8.什么是出血尺寸？什么是成品尺寸？</span></dt>
							<dd class="faq_contain">
								<div>为了避免印刷成品裁切失准或者留下白边，因此在设计的时候，必须在成品尺寸的基础上加出血位。出血就是比成品尺寸上下左右各超出1mm的意思。出血的大小视印刷品的尺寸而定，例如铜版纸名片为例，其出血尺寸为：92*56mm，出血上下左右各1mm，裁切后成品尺寸为：90*54mm；单张、折页等需要2mm出血位，画册等需要3mm的出血位；其他产品的出血尺寸，可直接在酱印网官网下载标准模板均有标明。</div>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq4.jpg" alt="酱印网">
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>9.为什么成品会有脏污？</span></dt>
							<dd class="faq_contain">
								<div>大墨量产品极易产生蹭脏的问题；因为墨量大，印刷品不易干燥，在后道加工，装箱，运输过程中都会产生摩擦发生蹭脏的现象，最佳解决方法是覆膜，即可最大限度的避免脏污问题。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>10.为什么印刷必须使用CMYK 模式，而非RGB模式？</span></dt>
							<dd class="faq_contain">
								<ul class="faq_msg">
									<li>1)RGB模式是基于自然界中3种基色光的混合原理，将红（Red）、绿（Green）和蓝（Blue）三种基色按照从0（黑）到255（白色）的亮度值在每个色阶中分配，从而指定其色彩。它采用的是加色法，即RGB等量相加可以产生灰白色，越加越亮；通常使用在显示器、扫描仪等设备上。</li>
									<li>2)CMYK模式是由青色(Cyan)、品红色(Magenta)、黄色(Yellow)、黑色(Key Plate)组成。它是一种依靠反光的色彩模式，在CMYK模式中由光线照到有不同比例CMYK油墨的纸上，部分光谱被吸收后，反射到人眼的光产生颜色。由于CMYK在混合成色时，随着CMYK四种成分的增多，反射到人眼的光会越来越少，光线的亮度会越来越低；通常使用在四色印刷、四色打印等。</li>
									<li>3)RGB模式与CMYK模式的区别：</li>
									<li>RGB采用的是加色法，即RGB等量相加可以产生灰白色，越加越亮；CMYK是减色法，即等量相加可以越加越深。RGB的色域较大而CMYK色域较小，这样就会产生RGB中的一些颜色在CMYK中根本无法表示出来，我们通常使用的彩色数码打印机也是以RGB颜色空间方式来输出的，所以一些CMYK格式的文件打印出来总是有缺色现象，也就是说超出色域的颜色是打不出来的，失真就不可避免了。这意味着如果你用RGB模式去制作印刷用的图像，那么你所用的某些色彩是无法被打印出来的。一般来说，RGB中一些较为明亮的色彩无法被打印，如艳蓝色、亮绿色等。如果不作修改直接印刷，可能和原先有很大差异。</li>
									<li>如果图像只在电脑上显示，就用RGB模式，这样可以得到较广的色域。如果图像需要打印或者印刷，就必须使用CMYK模式，才可确保印刷品颜色与设计时一致。所以当我们要开始新图像制作的时候，首先就要确定好色彩模式。</li>
									<li>印刷方式以CMYK四色按照不同的比例叠印出各种颜色，因此颜色设定只能以CMYK比例填色，无法以RGB模式或PANTON色样制稿；RGB是色光三原色，属于色光，是光线，赤橙黄绿青蓝紫等等都是由RGB组成；CMYK是色料，是颜料、油墨，CMY是色料三原色，印刷所呈现的所有颜色都可用CMY三种色料来调配，因此CMY是色料三原色。提供的稿件如果是RGB填色的印厂需要转为CMYK，转换过程中会有相应的损失，所印刷的颜色就会有很大的色差。</li>
								</ul>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq5.png" alt="酱印网">
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>11.影响色差的因素有哪些？</span></dt>
							<dd class="faq_contain">
								<ul class="faq_msg">
									<li>1)电脑显示器与印刷品成像原理不同；电脑屏幕显示器是以RGB色光成像，而印刷品是以CMYK印刷四色模式，因成像原理不同，屏幕显示与印刷成品的多少存在着色彩差异。此外，就算是电脑屏幕，因不同品牌型号及个别色彩设定参数，也会造成颜色观看上的不同。 </li>
									<li>2)酱印网目前所有的产品都是采用合版印刷，因合版印刷无法考量到单一客户对顏色的要求及调正，一般来说合版印刷会有约略10%的印刷色差，就算是同一印刷文件同一印刷纸质，每批多少也会存在着色差。 </li>
									<li>3)在印刷过程中，油墨的干燥快慢会受到温度、湿度等周围环境的影响，因此不同批次的印品会由于不同时间段印刷车间内环境的变化出现差异，再加上采用的是合版印刷，同一文件前后多次印刷会有一定概率出现色彩深浅不同的情况。 </li>
									<li>4)不同纸张有不同显色效果，同一个印刷文件印在不同材质上，如铜版纸或刚古纸，会造成不同的印刷效果与成色，这是属于材质的物理特性，若印在有底色的纸张上(如黄牛皮纸)，当然会有更大的色差；另外，在纸张上进行后加工，如上亮膜或哑膜，也会影响成色。 </li>
								</ul>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq6.jpg" alt="酱印网">
								</div>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq7.jpg" alt="酱印网">
								</div>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq8.jpg" alt="酱印网">
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>12.合版印刷对颜色会造成什么影响？</span></dt>
							<dd class="faq_contain">
								<div>酱印网目前所有的产品都是采用合版印刷，因合版印刷无法考量到单一客户对顏色的要求及调正，一般来说合版印刷会有约略10%的印刷色差，就算是同一印刷文件同一印刷纸质，每批多少也会存在着色差。如您对印刷成品颜色有非常严苛的要求，可与客服联系申请专版印刷。 </div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>13.如何正确地判断色差？</span></dt>
							<dd class="faq_contain">
								<div>根据印刷行业的成品验收标准规定，CMYK各值误差控制在±10%以内，对照色谱在此标准内的色彩偏差将被视为正常范围。</div>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq9.jpg" alt="酱印网">
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>14.色差问题的售后处理声明</span></dt>
							<dd class="faq_contain">
								<ul class="faq_msg">
									<li>1)印刷色差超过10%以上，酱印网无条件免费重印。</li>
									<li>2)正常色差范围10%以内的，恕无法按照售后标准进行处理。</li>
									<li>3)如果是设计文件本身出现色差，即使重印也无法保证100%不出问题。</li>
								</ul>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>15.为什么细小文字不适合做多色？</span></dt>
							<dd class="faq_contain">
								<div>印刷过程中印刷机操作人员按照十字规套准，当四个颜色的十字套准后才不会出现重影的情况。</div>
								<div>合板印刷产见到细小文字采用四色（CMYK各100%），这样极容易导致印刷的文字有重影的情况，因为平板印刷是采用水墨平衡的原理印刷，印刷过程中印版要先施水再上墨，纸张遇水这会吸水膨胀，再则印刷过程中纸张受到牵引力也会有略小变形，因此会导致不用颜色出现重影的情况，尤其是纸张为合成纸或回收纸比例过大时更明显。 </div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>16.为什么稿件中的文字会发生变化？</span></dt>
							<dd class="faq_contain">
								<div>每台电脑系统中的字体都不同，若稿件中的文字未转曲，则容易在送往印刷过程中字体发生变化，所以请您在上传稿件之前记得将文字转曲；若发现您上传的文件未转曲，我们的客服将电话联系您，这样耽误的是您自己宝贵的时间，请悉知。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>17.为什么稿件中的字号不得过小？</span></dt>
							<dd class="faq_contain">
								<div>在设计文件的时候，所有的文字不得小于6号，否则可能会严重影响字体的识别性，给您带来的可能是十分严重的后果。反白的文字也不得小于6号，否则极易发生印刷套印不准的问题。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>18.完稿之后要存储什么版本？</span></dt>
							<dd class="faq_contain">
								<div>完稿后请储存相对稳定的版本。请您不要上传过高的版本，这样会导致文件高低版本转换之间发生一些不可控的变化。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>19.满版色的设计会造成什么问题？</span></dt>
							<dd class="faq_contain">
								<div>印刷满版色常见问题有漏白，是指不同色块在套印时，造成漏出白纸底色。满版色稿件如需加工时，常遇见裁切边缘露白现象。裁切刀有正面和背面之分，切名片时有一边是略有毛刺的，另外一边非常平滑，如果名片边缘没有色块，切出来的产品有毛刺的一变一般看不出来，如果边缘有颜色并且没有做任何表面处理毛刺就会显得很明显。</div>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq10.jpg" alt="酱印网">
								</div>
							</dd>
						</dl>
						<h3 class="headline">关于印后加工常见问题</h3>
						<dl class="faq_item">
							<dt class="faq_tit"><span>20.折页的方式有哪些？</span></dt>
							<dd class="faq_contain">
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq11.jpg" alt="酱印网">
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>21.为什么折页会爆色（爆边）？如何避免？</span></dt>
							<dd class="faq_contain">
								<div>纸张印刷满版深色，折页时会出现爆色的情况（即出现裂痕漏出纸张的白色），纸张越厚越容易爆色，轻微爆色属于正常现象，解决此问题的方法</div>
								<ul class="faq_msg">
									<li>一：折页覆膜，即可完全避免爆色的问题；</li>
									<li>二：压线后再折页，此方法不能完全避免，只能尽可能的减轻爆色程度。</li>
								</ul>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq12.jpg" alt="酱印网">
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>22.覆膜（又称过PP）是什么意思？</span></dt>
							<dd class="faq_contain">
								<div>简单的说就是在纸张便面贴上一次薄膜，主要作用是加强印刷表面的耐磨度，避免脏污、刮伤以及增加美观效果。</div>
								<div>覆膜纸张不能太薄，否则容易发生弯曲，建议150g以上的纸张覆膜。印刷过程中收纸时会喷粉（白色粉末）防止粘花现象，过胶时虽经过除粉但不能完全除净，所以大黑产品覆膜时会有轻微反白现象是正常情况。</div>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq13.jpg" alt="酱印网">
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>23.画册的主要装订方式有哪些？</span></dt>
							<dd class="faq_contain">
								<div>酱印网目前推出的装订方式主要为骑马钉和无线胶装：</div>
								<div>骑马钉就是以骑马跨式装订成册，在印刷完稿时页数要为4的倍数才能装订成册，按照印刷的折手8的倍数为佳，骑马钉不能装订太厚，例如157g铜版纸画册，页数不能超过64P，但薄的纸张可以相应增加页数，装订成册后最后要经过裁切才能成书，裁切过程中，太厚的骑马钉成品会出现爆角现象，控制在3mm以内即为合格品（页码少的不会出现爆角的现象）。</div>
								<div>胶装是书背经过洗背后用热熔型树脂胶包上封面后经过三面刀裁切成书，洗背以洗3mm为佳，胶装适合做页数多的画册，页数较少时适合做骑马钉。</div>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq14.jpg" alt="酱印网">
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>24.烫金的常见问题有哪些？</span></dt>
							<dd class="faq_contain">
								<div>烫金是将金/银箔通过热压的方式将图案信息转移到承印物上，烫金常用，金箔和银箔。</div>
								<div>注意事项：</div>
								<ul class="faq_msg">
									<li>1)图案及文字不宜过细，过细会断线或糊在一起，如字体太小时，烫金字是"田"字，有可能烫出来的效果是一个口字装的（糊到一起了）</li>
									<li>2)有立体感纹路的纸张烫金时也会产生断线、糊到一起的问题。</li>
								</ul>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>25.击凸的常见问题有哪些？</span></dt>
							<dd class="faq_contain">
								<div>同烫金一样要先制作击凸版，然后用加压的方式将纸张击出凸凹的形状。常见问题如下：</div>
								<ul class="faq_msg">
									<li>1)纸张太薄容易将纸张击穿破裂。</li>
									<li>2)要击凸的产品是图案或文字时，当图案或文字太小或太细时要击凸存在击凸位置不准的情况。</li>
								</ul>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>26.什么是流水码？</span></dt>
							<dd class="faq_contain">
								<div>这里指的流水码，主要是会员卡的流水码，一般不得超过9位数，例如0000001—0001000就是一千张印刷品的流水码范围，可以根据您的实际需求选择开头数字。酱印网目前总共分激光码、凸金码、凸银码、平码四种，只有激光码是收费的，其余均为免费后工艺，您在下单之前请正确选择您需要的流水码效果。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>27.什么是流水号？</span></dt>
							<dd class="faq_contain">
								<div>这里指的流水号，主要是代金券或票据的流水号，一般不得超过8位数，例如0000001—0001000就是一千张印刷品的流水号范围，可以根据您的实际需求选择开头数字。流水号为收费工艺，请悉知；代金券的流水号有不印、单边印、双边印三种选择。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>28.什么是打针孔？</span></dt>
							<dd class="faq_contain">
								<div>一般在代金券分为主券和副券的情况下，则需要打针孔，当然也可以选择不打，具体视您的实际需求而定。打针孔为收费工艺，请悉知。</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>29.什么是签名条？</span></dt>
							<dd class="faq_contain">
								<div>签名条一般是指会员卡背面的可书写姓名的区域，您可以选择加或者不加，均为免费。</div>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq17.jpg" alt="酱印网">
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>30.什么是条形码？</span></dt>
							<dd class="faq_contain">
								<div>条形码一般是指会员卡背面的条形码，如果选择此工艺，均需收费，请悉知。</div>
								<div class="img">
									<img src="http://7bvan6.com2.z0.glb.qiniucdn.com/xjy_yinshua_faq18.jpg" alt="酱印网">
								</div>
							</dd>
						</dl>
						<dl class="faq_item">
							<dt class="faq_tit"><span>31.什么是拼接？</span></dt>
							<dd class="faq_contain">
								<div>拼接是指超过喷绘材料的边界值时，由于无法喷绘，此时采取喷绘多张，用胶水粘在一起，以此来达到该目的。拼接不额外收费，不影响正常使用。</div>
							</dd>
						</dl>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
""")))}/*313.2*/ {_display_(Seq[Any](format.raw/*313.4*/("""
	"""),format.raw/*314.2*/("""<script type="text/javascript">
		!function()
		"""),format.raw/*316.3*/("""{"""),format.raw/*316.4*/("""
			"""),format.raw/*317.4*/("""$(".helper_right_container").delegate("dt.faq_tit, .open .faq_close a","click",function(e)
				"""),format.raw/*318.5*/("""{"""),format.raw/*318.6*/("""
					"""),format.raw/*319.6*/("""var a=$(this).closest(".faq_item");
					a.hasClass("open")?a.removeClass("open").siblings("dl.faq_item").removeClass("open"):a.addClass("open").siblings("dl.faq_item").removeClass("open")
				"""),format.raw/*321.5*/("""}"""),format.raw/*321.6*/("""
			"""),format.raw/*322.4*/(""");
		"""),format.raw/*323.3*/("""}"""),format.raw/*323.4*/("""();
	</script>
""")))}),format.raw/*325.2*/("""
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
object printing extends printing_Scope0.printing
              /*
                  -- GENERATED --
                  DATE: Tue Nov 15 15:01:43 CST 2016
                  SOURCE: /Users/humorHan/work/reaf-print-dom-server/app/views/templates/faq/printing.scala.html
                  HASH: 66052bbba06ea0fc8b81cef5d04637c47d6e4516
                  MATRIX: 563->1|733->47|760->79|787->81|811->97|850->99|878->101|1036->242|1074->244|1102->246|15003->14128|15043->14130|15073->14132|15149->14180|15178->14181|15210->14185|15333->14280|15362->14281|15396->14287|15617->14480|15646->14481|15678->14485|15711->14490|15740->14491|15787->14507
                  LINES: 20->1|25->1|26->3|27->4|27->4|27->4|28->5|30->7|30->7|31->8|336->313|336->313|337->314|339->316|339->316|340->317|341->318|341->318|342->319|344->321|344->321|345->322|346->323|346->323|348->325
                  -- GENERATED --
              */
          