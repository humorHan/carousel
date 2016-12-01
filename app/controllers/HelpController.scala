package controllers

import javax.inject.Inject

import controllers.Helpers._
import play.api.Configuration
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc._
import services.PrintService
import views.html.templates

class HelpController @Inject() (implicit config: Configuration,
                                printService: PrintService) extends Controller {

  def account = defaultPageAction { implicit request => implicit barParam =>
    templates.faq.account()
  }

  def distribution = defaultPageAction { implicit request => implicit barParam =>
    templates.faq.distribution()
  }

  def order = defaultPageAction { implicit request => implicit barParam =>
    templates.faq.order()
  }

  def other = defaultPageAction { implicit request => implicit barParam =>
    templates.faq.other()
  }

  def payment = defaultPageAction { implicit request => implicit barParam =>
    templates.faq.payment()
  }

  def printing = defaultPageAction { implicit request => implicit barParam =>
    templates.faq.printing()
  }

  // ================================ help part ============================

  def chromatism = defaultPageAction { implicit request => implicit barParam =>
    templates.help.chromatism()
  }

  def download = defaultPageAction { implicit request => implicit barParam =>
    templates.help.download()
  }

  def logistics = defaultPageAction { implicit request => implicit barParam =>
    templates.help.logistics()
  }

  def process = defaultPageAction { implicit request => implicit barParam =>
    templates.help.process()
  }

  def returns = defaultPageAction { implicit request => implicit barParam =>
    templates.help.returns()
  }

  def upload = defaultPageAction { implicit request => implicit barParam =>
    templates.help.upload()
  }

  // ============================= About Part ===============================

  def introduction = defaultPageAction { implicit request => implicit barParam =>
    templates.about.introduction()
  }

  def contactus = defaultPageAction { implicit request => implicit barParam =>
    templates.about.contactus()
  }

  def services = defaultPageAction { implicit request => implicit barParam =>
    templates.about.services()
  }

}
