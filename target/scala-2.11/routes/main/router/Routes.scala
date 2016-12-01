
// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/humorHan/work/reaf-print-dom-server/conf/routes
// @DATE:Tue Nov 15 15:01:40 CST 2016

package router

import play.core.routing._
import play.core.routing.HandlerInvokerFactory._
import play.core.j._

import play.api.mvc._

import _root_.controllers.Assets.Asset

class Routes(
  override val errorHandler: play.api.http.HttpErrorHandler, 
  // @LINE:4
  Assets_2: controllers.Assets,
  // @LINE:11
  Application_4: javax.inject.Provider[controllers.Application],
  // @LINE:32
  HelpController_3: javax.inject.Provider[controllers.HelpController],
  // @LINE:52
  AdminController_1: javax.inject.Provider[controllers.AdminController],
  // @LINE:61
  ProxyController_0: javax.inject.Provider[controllers.ProxyController],
  val prefix: String
) extends GeneratedRouter {

   @javax.inject.Inject()
   def this(errorHandler: play.api.http.HttpErrorHandler,
    // @LINE:4
    Assets_2: controllers.Assets,
    // @LINE:11
    Application_4: javax.inject.Provider[controllers.Application],
    // @LINE:32
    HelpController_3: javax.inject.Provider[controllers.HelpController],
    // @LINE:52
    AdminController_1: javax.inject.Provider[controllers.AdminController],
    // @LINE:61
    ProxyController_0: javax.inject.Provider[controllers.ProxyController]
  ) = this(errorHandler, Assets_2, Application_4, HelpController_3, AdminController_1, ProxyController_0, "/")

  import ReverseRouteContext.empty

  def withPrefix(prefix: String): Routes = {
    router.RoutesPrefix.setPrefix(prefix)
    new Routes(errorHandler, Assets_2, Application_4, HelpController_3, AdminController_1, ProxyController_0, prefix)
  }

  private[this] val defaultPrefix: String = {
    if (this.prefix.endsWith("/")) "" else "/"
  }

  def documentation = List(
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """assets/""" + "$" + """file<.+>""", """controllers.Assets.at(path:String = "/public", file:String)"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """static/""" + "$" + """file<.+>""", """controllers.Assets.at(path:String = "/public", file:String)"""),
    ("""GET""", this.prefix, """@controllers.Application@.index"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """new""", """@controllers.Application@.newIndex"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """product""", """@controllers.Application@.product(id:Int ?= -1)"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """product/custom""", """@controllers.Application@.customProduct"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """cart""", """@controllers.Application@.cart"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """cart/confirm""", """@controllers.Application@.cartConfirm"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """home""", """@controllers.Application@.home"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """order""", """@controllers.Application@.order"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """pay""", """@controllers.Application@.pay"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """pay/success""", """@controllers.Application@.paySuccess"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """equipmentLeasing""", """@controllers.Application@.equipmentLeasing"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """design""", """@controllers.Application@.design"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """404""", """@controllers.Application@.notFound"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """activities/998""", """@controllers.Application@.activities"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """faq/account""", """@controllers.HelpController@.account"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """faq/distribution""", """@controllers.HelpController@.distribution"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """faq/order""", """@controllers.HelpController@.order"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """faq/other""", """@controllers.HelpController@.other"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """faq/payment""", """@controllers.HelpController@.payment"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """faq/printing""", """@controllers.HelpController@.printing"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """help/chromatism""", """@controllers.HelpController@.chromatism"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """help/download""", """@controllers.HelpController@.download"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """help/logistics""", """@controllers.HelpController@.logistics"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """help/process""", """@controllers.HelpController@.process"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """help/returns""", """@controllers.HelpController@.returns"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """help/upload""", """@controllers.HelpController@.upload"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """about/introduction""", """@controllers.HelpController@.introduction"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """about/contactus""", """@controllers.HelpController@.contactus"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """about/services""", """@controllers.HelpController@.services"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """admin/order/list""", """@controllers.AdminController@.orderList"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """admin/order""", """@controllers.AdminController@.order"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """admin/order/edit""", """@controllers.AdminController@.editOrder"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """admin/product/edit""", """@controllers.AdminController@.editProduct"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """admin/product/edit-v2""", """@controllers.AdminController@.editProductV2"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """api/""" + "$" + """path<.+>""", """@controllers.ProxyController@.proxyPass(path:String)"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """api/""" + "$" + """path<.+>""", """@controllers.ProxyController@.proxyPass(path:String)"""),
    ("""PUT""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """api/""" + "$" + """path<.+>""", """@controllers.ProxyController@.proxyPass(path:String)"""),
    ("""DELETE""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """api/""" + "$" + """path<.+>""", """@controllers.ProxyController@.proxyPass(path:String)"""),
    Nil
  ).foldLeft(List.empty[(String,String,String)]) { (s,e) => e.asInstanceOf[Any] match {
    case r @ (_,_,_) => s :+ r.asInstanceOf[(String,String,String)]
    case l => s ++ l.asInstanceOf[List[(String,String,String)]]
  }}


  // @LINE:4
  private[this] lazy val controllers_Assets_at0_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("assets/"), DynamicPart("file", """.+""",false)))
  )
  private[this] lazy val controllers_Assets_at0_invoker = createInvoker(
    Assets_2.at(fakeValue[String], fakeValue[String]),
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Assets",
      "at",
      Seq(classOf[String], classOf[String]),
      "GET",
      """ Map static resources from the /public folder to the /assets URL path""",
      this.prefix + """assets/""" + "$" + """file<.+>"""
    )
  )

  // @LINE:7
  private[this] lazy val controllers_Assets_at1_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("static/"), DynamicPart("file", """.+""",false)))
  )
  private[this] lazy val controllers_Assets_at1_invoker = createInvoker(
    Assets_2.at(fakeValue[String], fakeValue[String]),
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Assets",
      "at",
      Seq(classOf[String], classOf[String]),
      "GET",
      """ Map static page from the /static folder to the /static URL path""",
      this.prefix + """static/""" + "$" + """file<.+>"""
    )
  )

  // @LINE:11
  private[this] lazy val controllers_Application_index2_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix)))
  )
  private[this] lazy val controllers_Application_index2_invoker = createInvoker(
    Application_4.get.index,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "index",
      Nil,
      "GET",
      """""",
      this.prefix + """"""
    )
  )

  // @LINE:12
  private[this] lazy val controllers_Application_newIndex3_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("new")))
  )
  private[this] lazy val controllers_Application_newIndex3_invoker = createInvoker(
    Application_4.get.newIndex,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "newIndex",
      Nil,
      "GET",
      """""",
      this.prefix + """new"""
    )
  )

  // @LINE:14
  private[this] lazy val controllers_Application_product4_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("product")))
  )
  private[this] lazy val controllers_Application_product4_invoker = createInvoker(
    Application_4.get.product(fakeValue[Int]),
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "product",
      Seq(classOf[Int]),
      "GET",
      """""",
      this.prefix + """product"""
    )
  )

  // @LINE:15
  private[this] lazy val controllers_Application_customProduct5_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("product/custom")))
  )
  private[this] lazy val controllers_Application_customProduct5_invoker = createInvoker(
    Application_4.get.customProduct,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "customProduct",
      Nil,
      "GET",
      """""",
      this.prefix + """product/custom"""
    )
  )

  // @LINE:16
  private[this] lazy val controllers_Application_cart6_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("cart")))
  )
  private[this] lazy val controllers_Application_cart6_invoker = createInvoker(
    Application_4.get.cart,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "cart",
      Nil,
      "GET",
      """""",
      this.prefix + """cart"""
    )
  )

  // @LINE:17
  private[this] lazy val controllers_Application_cartConfirm7_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("cart/confirm")))
  )
  private[this] lazy val controllers_Application_cartConfirm7_invoker = createInvoker(
    Application_4.get.cartConfirm,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "cartConfirm",
      Nil,
      "GET",
      """""",
      this.prefix + """cart/confirm"""
    )
  )

  // @LINE:18
  private[this] lazy val controllers_Application_home8_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("home")))
  )
  private[this] lazy val controllers_Application_home8_invoker = createInvoker(
    Application_4.get.home,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "home",
      Nil,
      "GET",
      """""",
      this.prefix + """home"""
    )
  )

  // @LINE:19
  private[this] lazy val controllers_Application_order9_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("order")))
  )
  private[this] lazy val controllers_Application_order9_invoker = createInvoker(
    Application_4.get.order,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "order",
      Nil,
      "GET",
      """""",
      this.prefix + """order"""
    )
  )

  // @LINE:21
  private[this] lazy val controllers_Application_pay10_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("pay")))
  )
  private[this] lazy val controllers_Application_pay10_invoker = createInvoker(
    Application_4.get.pay,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "pay",
      Nil,
      "GET",
      """""",
      this.prefix + """pay"""
    )
  )

  // @LINE:22
  private[this] lazy val controllers_Application_paySuccess11_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("pay/success")))
  )
  private[this] lazy val controllers_Application_paySuccess11_invoker = createInvoker(
    Application_4.get.paySuccess,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "paySuccess",
      Nil,
      "GET",
      """""",
      this.prefix + """pay/success"""
    )
  )

  // @LINE:24
  private[this] lazy val controllers_Application_equipmentLeasing12_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("equipmentLeasing")))
  )
  private[this] lazy val controllers_Application_equipmentLeasing12_invoker = createInvoker(
    Application_4.get.equipmentLeasing,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "equipmentLeasing",
      Nil,
      "GET",
      """""",
      this.prefix + """equipmentLeasing"""
    )
  )

  // @LINE:25
  private[this] lazy val controllers_Application_design13_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("design")))
  )
  private[this] lazy val controllers_Application_design13_invoker = createInvoker(
    Application_4.get.design,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "design",
      Nil,
      "GET",
      """""",
      this.prefix + """design"""
    )
  )

  // @LINE:26
  private[this] lazy val controllers_Application_notFound14_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("404")))
  )
  private[this] lazy val controllers_Application_notFound14_invoker = createInvoker(
    Application_4.get.notFound,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "notFound",
      Nil,
      "GET",
      """""",
      this.prefix + """404"""
    )
  )

  // @LINE:28
  private[this] lazy val controllers_Application_activities15_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("activities/998")))
  )
  private[this] lazy val controllers_Application_activities15_invoker = createInvoker(
    Application_4.get.activities,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Application",
      "activities",
      Nil,
      "GET",
      """""",
      this.prefix + """activities/998"""
    )
  )

  // @LINE:32
  private[this] lazy val controllers_HelpController_account16_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("faq/account")))
  )
  private[this] lazy val controllers_HelpController_account16_invoker = createInvoker(
    HelpController_3.get.account,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "account",
      Nil,
      "GET",
      """""",
      this.prefix + """faq/account"""
    )
  )

  // @LINE:33
  private[this] lazy val controllers_HelpController_distribution17_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("faq/distribution")))
  )
  private[this] lazy val controllers_HelpController_distribution17_invoker = createInvoker(
    HelpController_3.get.distribution,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "distribution",
      Nil,
      "GET",
      """""",
      this.prefix + """faq/distribution"""
    )
  )

  // @LINE:34
  private[this] lazy val controllers_HelpController_order18_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("faq/order")))
  )
  private[this] lazy val controllers_HelpController_order18_invoker = createInvoker(
    HelpController_3.get.order,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "order",
      Nil,
      "GET",
      """""",
      this.prefix + """faq/order"""
    )
  )

  // @LINE:35
  private[this] lazy val controllers_HelpController_other19_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("faq/other")))
  )
  private[this] lazy val controllers_HelpController_other19_invoker = createInvoker(
    HelpController_3.get.other,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "other",
      Nil,
      "GET",
      """""",
      this.prefix + """faq/other"""
    )
  )

  // @LINE:36
  private[this] lazy val controllers_HelpController_payment20_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("faq/payment")))
  )
  private[this] lazy val controllers_HelpController_payment20_invoker = createInvoker(
    HelpController_3.get.payment,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "payment",
      Nil,
      "GET",
      """""",
      this.prefix + """faq/payment"""
    )
  )

  // @LINE:37
  private[this] lazy val controllers_HelpController_printing21_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("faq/printing")))
  )
  private[this] lazy val controllers_HelpController_printing21_invoker = createInvoker(
    HelpController_3.get.printing,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "printing",
      Nil,
      "GET",
      """""",
      this.prefix + """faq/printing"""
    )
  )

  // @LINE:39
  private[this] lazy val controllers_HelpController_chromatism22_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("help/chromatism")))
  )
  private[this] lazy val controllers_HelpController_chromatism22_invoker = createInvoker(
    HelpController_3.get.chromatism,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "chromatism",
      Nil,
      "GET",
      """""",
      this.prefix + """help/chromatism"""
    )
  )

  // @LINE:40
  private[this] lazy val controllers_HelpController_download23_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("help/download")))
  )
  private[this] lazy val controllers_HelpController_download23_invoker = createInvoker(
    HelpController_3.get.download,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "download",
      Nil,
      "GET",
      """""",
      this.prefix + """help/download"""
    )
  )

  // @LINE:41
  private[this] lazy val controllers_HelpController_logistics24_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("help/logistics")))
  )
  private[this] lazy val controllers_HelpController_logistics24_invoker = createInvoker(
    HelpController_3.get.logistics,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "logistics",
      Nil,
      "GET",
      """""",
      this.prefix + """help/logistics"""
    )
  )

  // @LINE:42
  private[this] lazy val controllers_HelpController_process25_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("help/process")))
  )
  private[this] lazy val controllers_HelpController_process25_invoker = createInvoker(
    HelpController_3.get.process,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "process",
      Nil,
      "GET",
      """""",
      this.prefix + """help/process"""
    )
  )

  // @LINE:43
  private[this] lazy val controllers_HelpController_returns26_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("help/returns")))
  )
  private[this] lazy val controllers_HelpController_returns26_invoker = createInvoker(
    HelpController_3.get.returns,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "returns",
      Nil,
      "GET",
      """""",
      this.prefix + """help/returns"""
    )
  )

  // @LINE:44
  private[this] lazy val controllers_HelpController_upload27_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("help/upload")))
  )
  private[this] lazy val controllers_HelpController_upload27_invoker = createInvoker(
    HelpController_3.get.upload,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "upload",
      Nil,
      "GET",
      """""",
      this.prefix + """help/upload"""
    )
  )

  // @LINE:46
  private[this] lazy val controllers_HelpController_introduction28_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("about/introduction")))
  )
  private[this] lazy val controllers_HelpController_introduction28_invoker = createInvoker(
    HelpController_3.get.introduction,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "introduction",
      Nil,
      "GET",
      """""",
      this.prefix + """about/introduction"""
    )
  )

  // @LINE:47
  private[this] lazy val controllers_HelpController_contactus29_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("about/contactus")))
  )
  private[this] lazy val controllers_HelpController_contactus29_invoker = createInvoker(
    HelpController_3.get.contactus,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "contactus",
      Nil,
      "GET",
      """""",
      this.prefix + """about/contactus"""
    )
  )

  // @LINE:48
  private[this] lazy val controllers_HelpController_services30_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("about/services")))
  )
  private[this] lazy val controllers_HelpController_services30_invoker = createInvoker(
    HelpController_3.get.services,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HelpController",
      "services",
      Nil,
      "GET",
      """""",
      this.prefix + """about/services"""
    )
  )

  // @LINE:52
  private[this] lazy val controllers_AdminController_orderList31_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("admin/order/list")))
  )
  private[this] lazy val controllers_AdminController_orderList31_invoker = createInvoker(
    AdminController_1.get.orderList,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.AdminController",
      "orderList",
      Nil,
      "GET",
      """""",
      this.prefix + """admin/order/list"""
    )
  )

  // @LINE:53
  private[this] lazy val controllers_AdminController_order32_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("admin/order")))
  )
  private[this] lazy val controllers_AdminController_order32_invoker = createInvoker(
    AdminController_1.get.order,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.AdminController",
      "order",
      Nil,
      "GET",
      """""",
      this.prefix + """admin/order"""
    )
  )

  // @LINE:54
  private[this] lazy val controllers_AdminController_editOrder33_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("admin/order/edit")))
  )
  private[this] lazy val controllers_AdminController_editOrder33_invoker = createInvoker(
    AdminController_1.get.editOrder,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.AdminController",
      "editOrder",
      Nil,
      "GET",
      """""",
      this.prefix + """admin/order/edit"""
    )
  )

  // @LINE:56
  private[this] lazy val controllers_AdminController_editProduct34_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("admin/product/edit")))
  )
  private[this] lazy val controllers_AdminController_editProduct34_invoker = createInvoker(
    AdminController_1.get.editProduct,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.AdminController",
      "editProduct",
      Nil,
      "GET",
      """""",
      this.prefix + """admin/product/edit"""
    )
  )

  // @LINE:57
  private[this] lazy val controllers_AdminController_editProductV235_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("admin/product/edit-v2")))
  )
  private[this] lazy val controllers_AdminController_editProductV235_invoker = createInvoker(
    AdminController_1.get.editProductV2,
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.AdminController",
      "editProductV2",
      Nil,
      "GET",
      """""",
      this.prefix + """admin/product/edit-v2"""
    )
  )

  // @LINE:61
  private[this] lazy val controllers_ProxyController_proxyPass36_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("api/"), DynamicPart("path", """.+""",false)))
  )
  private[this] lazy val controllers_ProxyController_proxyPass36_invoker = createInvoker(
    ProxyController_0.get.proxyPass(fakeValue[String]),
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProxyController",
      "proxyPass",
      Seq(classOf[String]),
      "GET",
      """""",
      this.prefix + """api/""" + "$" + """path<.+>"""
    )
  )

  // @LINE:62
  private[this] lazy val controllers_ProxyController_proxyPass37_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("api/"), DynamicPart("path", """.+""",false)))
  )
  private[this] lazy val controllers_ProxyController_proxyPass37_invoker = createInvoker(
    ProxyController_0.get.proxyPass(fakeValue[String]),
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProxyController",
      "proxyPass",
      Seq(classOf[String]),
      "POST",
      """""",
      this.prefix + """api/""" + "$" + """path<.+>"""
    )
  )

  // @LINE:63
  private[this] lazy val controllers_ProxyController_proxyPass38_route = Route("PUT",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("api/"), DynamicPart("path", """.+""",false)))
  )
  private[this] lazy val controllers_ProxyController_proxyPass38_invoker = createInvoker(
    ProxyController_0.get.proxyPass(fakeValue[String]),
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProxyController",
      "proxyPass",
      Seq(classOf[String]),
      "PUT",
      """""",
      this.prefix + """api/""" + "$" + """path<.+>"""
    )
  )

  // @LINE:64
  private[this] lazy val controllers_ProxyController_proxyPass39_route = Route("DELETE",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("api/"), DynamicPart("path", """.+""",false)))
  )
  private[this] lazy val controllers_ProxyController_proxyPass39_invoker = createInvoker(
    ProxyController_0.get.proxyPass(fakeValue[String]),
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ProxyController",
      "proxyPass",
      Seq(classOf[String]),
      "DELETE",
      """""",
      this.prefix + """api/""" + "$" + """path<.+>"""
    )
  )


  def routes: PartialFunction[RequestHeader, Handler] = {
  
    // @LINE:4
    case controllers_Assets_at0_route(params) =>
      call(Param[String]("path", Right("/public")), params.fromPath[String]("file", None)) { (path, file) =>
        controllers_Assets_at0_invoker.call(Assets_2.at(path, file))
      }
  
    // @LINE:7
    case controllers_Assets_at1_route(params) =>
      call(Param[String]("path", Right("/public")), params.fromPath[String]("file", None)) { (path, file) =>
        controllers_Assets_at1_invoker.call(Assets_2.at(path, file))
      }
  
    // @LINE:11
    case controllers_Application_index2_route(params) =>
      call { 
        controllers_Application_index2_invoker.call(Application_4.get.index)
      }
  
    // @LINE:12
    case controllers_Application_newIndex3_route(params) =>
      call { 
        controllers_Application_newIndex3_invoker.call(Application_4.get.newIndex)
      }
  
    // @LINE:14
    case controllers_Application_product4_route(params) =>
      call(params.fromQuery[Int]("id", Some(-1))) { (id) =>
        controllers_Application_product4_invoker.call(Application_4.get.product(id))
      }
  
    // @LINE:15
    case controllers_Application_customProduct5_route(params) =>
      call { 
        controllers_Application_customProduct5_invoker.call(Application_4.get.customProduct)
      }
  
    // @LINE:16
    case controllers_Application_cart6_route(params) =>
      call { 
        controllers_Application_cart6_invoker.call(Application_4.get.cart)
      }
  
    // @LINE:17
    case controllers_Application_cartConfirm7_route(params) =>
      call { 
        controllers_Application_cartConfirm7_invoker.call(Application_4.get.cartConfirm)
      }
  
    // @LINE:18
    case controllers_Application_home8_route(params) =>
      call { 
        controllers_Application_home8_invoker.call(Application_4.get.home)
      }
  
    // @LINE:19
    case controllers_Application_order9_route(params) =>
      call { 
        controllers_Application_order9_invoker.call(Application_4.get.order)
      }
  
    // @LINE:21
    case controllers_Application_pay10_route(params) =>
      call { 
        controllers_Application_pay10_invoker.call(Application_4.get.pay)
      }
  
    // @LINE:22
    case controllers_Application_paySuccess11_route(params) =>
      call { 
        controllers_Application_paySuccess11_invoker.call(Application_4.get.paySuccess)
      }
  
    // @LINE:24
    case controllers_Application_equipmentLeasing12_route(params) =>
      call { 
        controllers_Application_equipmentLeasing12_invoker.call(Application_4.get.equipmentLeasing)
      }
  
    // @LINE:25
    case controllers_Application_design13_route(params) =>
      call { 
        controllers_Application_design13_invoker.call(Application_4.get.design)
      }
  
    // @LINE:26
    case controllers_Application_notFound14_route(params) =>
      call { 
        controllers_Application_notFound14_invoker.call(Application_4.get.notFound)
      }
  
    // @LINE:28
    case controllers_Application_activities15_route(params) =>
      call { 
        controllers_Application_activities15_invoker.call(Application_4.get.activities)
      }
  
    // @LINE:32
    case controllers_HelpController_account16_route(params) =>
      call { 
        controllers_HelpController_account16_invoker.call(HelpController_3.get.account)
      }
  
    // @LINE:33
    case controllers_HelpController_distribution17_route(params) =>
      call { 
        controllers_HelpController_distribution17_invoker.call(HelpController_3.get.distribution)
      }
  
    // @LINE:34
    case controllers_HelpController_order18_route(params) =>
      call { 
        controllers_HelpController_order18_invoker.call(HelpController_3.get.order)
      }
  
    // @LINE:35
    case controllers_HelpController_other19_route(params) =>
      call { 
        controllers_HelpController_other19_invoker.call(HelpController_3.get.other)
      }
  
    // @LINE:36
    case controllers_HelpController_payment20_route(params) =>
      call { 
        controllers_HelpController_payment20_invoker.call(HelpController_3.get.payment)
      }
  
    // @LINE:37
    case controllers_HelpController_printing21_route(params) =>
      call { 
        controllers_HelpController_printing21_invoker.call(HelpController_3.get.printing)
      }
  
    // @LINE:39
    case controllers_HelpController_chromatism22_route(params) =>
      call { 
        controllers_HelpController_chromatism22_invoker.call(HelpController_3.get.chromatism)
      }
  
    // @LINE:40
    case controllers_HelpController_download23_route(params) =>
      call { 
        controllers_HelpController_download23_invoker.call(HelpController_3.get.download)
      }
  
    // @LINE:41
    case controllers_HelpController_logistics24_route(params) =>
      call { 
        controllers_HelpController_logistics24_invoker.call(HelpController_3.get.logistics)
      }
  
    // @LINE:42
    case controllers_HelpController_process25_route(params) =>
      call { 
        controllers_HelpController_process25_invoker.call(HelpController_3.get.process)
      }
  
    // @LINE:43
    case controllers_HelpController_returns26_route(params) =>
      call { 
        controllers_HelpController_returns26_invoker.call(HelpController_3.get.returns)
      }
  
    // @LINE:44
    case controllers_HelpController_upload27_route(params) =>
      call { 
        controllers_HelpController_upload27_invoker.call(HelpController_3.get.upload)
      }
  
    // @LINE:46
    case controllers_HelpController_introduction28_route(params) =>
      call { 
        controllers_HelpController_introduction28_invoker.call(HelpController_3.get.introduction)
      }
  
    // @LINE:47
    case controllers_HelpController_contactus29_route(params) =>
      call { 
        controllers_HelpController_contactus29_invoker.call(HelpController_3.get.contactus)
      }
  
    // @LINE:48
    case controllers_HelpController_services30_route(params) =>
      call { 
        controllers_HelpController_services30_invoker.call(HelpController_3.get.services)
      }
  
    // @LINE:52
    case controllers_AdminController_orderList31_route(params) =>
      call { 
        controllers_AdminController_orderList31_invoker.call(AdminController_1.get.orderList)
      }
  
    // @LINE:53
    case controllers_AdminController_order32_route(params) =>
      call { 
        controllers_AdminController_order32_invoker.call(AdminController_1.get.order)
      }
  
    // @LINE:54
    case controllers_AdminController_editOrder33_route(params) =>
      call { 
        controllers_AdminController_editOrder33_invoker.call(AdminController_1.get.editOrder)
      }
  
    // @LINE:56
    case controllers_AdminController_editProduct34_route(params) =>
      call { 
        controllers_AdminController_editProduct34_invoker.call(AdminController_1.get.editProduct)
      }
  
    // @LINE:57
    case controllers_AdminController_editProductV235_route(params) =>
      call { 
        controllers_AdminController_editProductV235_invoker.call(AdminController_1.get.editProductV2)
      }
  
    // @LINE:61
    case controllers_ProxyController_proxyPass36_route(params) =>
      call(params.fromPath[String]("path", None)) { (path) =>
        controllers_ProxyController_proxyPass36_invoker.call(ProxyController_0.get.proxyPass(path))
      }
  
    // @LINE:62
    case controllers_ProxyController_proxyPass37_route(params) =>
      call(params.fromPath[String]("path", None)) { (path) =>
        controllers_ProxyController_proxyPass37_invoker.call(ProxyController_0.get.proxyPass(path))
      }
  
    // @LINE:63
    case controllers_ProxyController_proxyPass38_route(params) =>
      call(params.fromPath[String]("path", None)) { (path) =>
        controllers_ProxyController_proxyPass38_invoker.call(ProxyController_0.get.proxyPass(path))
      }
  
    // @LINE:64
    case controllers_ProxyController_proxyPass39_route(params) =>
      call(params.fromPath[String]("path", None)) { (path) =>
        controllers_ProxyController_proxyPass39_invoker.call(ProxyController_0.get.proxyPass(path))
      }
  }
}
