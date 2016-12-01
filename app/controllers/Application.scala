package controllers

import javax.inject.Inject

import controllers.Helpers._
import play.api.Configuration
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc._
import services._
import views.html.templates

class Application @Inject() (implicit config: Configuration,
                             printService: PrintService) extends Controller {

  def index = defaultPageAction { implicit request => implicit barParam =>
    templates.index()(barParam.copy(isHome = true))
  }

  def product(id: Int) = defaultPageAction { implicit request => implicit barParam =>
    if (id <= 0) {
      Found("/")
    } else {
      printService.productDetail(id).flatMap {
        case Some(detail) => templates.product(detail)
        case None => Found("/")
      }
    }
  }

  def customProduct = defaultPageAction { implicit request => implicit barParam =>
    printService.customProductDetail.flatMap {
      case Some(detail) =>
        templates.customProduct(detail.categoryName, detail.coverUrls, detail.detail)

      case None => Found("/")
    }
  }

  def cart = defaultPageAction { implicit request => implicit barParam =>
    templates.cart()
  }

  def cartConfirm = defaultPageAction { implicit request => implicit barParam =>
    templates.cartConfirm()
  }

  def home = defaultPageAction { implicit request => implicit barParam =>
    templates.home()
  }

  def order = defaultPageAction { implicit request => implicit barParam =>
    templates.order()
  }

  def pay = defaultPageAction { implicit request => implicit barParam =>
    templates.pay()
  }

  def paySuccess = defaultPageAction { implicit request => implicit barParam =>
    templates.paySuccess()
  }

  def notFound = defaultPageAction { implicit request => implicit barParam =>
    templates.notFound()
  }

  def design = defaultPageAction { implicit request => implicit barParam =>
    templates.design()
  }

  def equipmentLeasing = defaultPageAction { implicit request => implicit barParam =>
    templates.equipmentLeasing()
  }

  def activities = defaultPageAction { implicit request => implicit barParam =>
    templates.activities()
  }

  def newIndex = defaultPageAction { implicit request => implicit barParam =>
    templates.newIndex()(barParam.copy(isHome = true))
  }

}
