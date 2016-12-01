package controllers

import javax.inject.Inject

import controllers.Helpers._
import play.api.Configuration
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc._
import services.PrintService
import views.html.templates

class AdminController @Inject() (implicit config: Configuration,
                                 printService: PrintService) extends Controller {

  def order = defaultPageAction { implicit request => implicit barParam =>
    templates.admin.order()
  }

  def orderList = defaultPageAction { implicit request => implicit barParam =>
    templates.admin.orderList()
  }

  def editOrder = defaultPageAction { implicit request => implicit barParam =>
    templates.admin.editOrder()
  }

  def editProduct = defaultPageAction { implicit request => implicit barParam =>
    templates.admin.editProduct()
  }

  def editProductV2 = defaultPageAction { implicit request => implicit barParam =>
    templates.admin.editProductV2()
  }

}
