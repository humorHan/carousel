package controllers

import com.xjy._
import play.api.Configuration
import play.api.mvc.BodyParsers._
import play.api.mvc.Results._
import play.api.mvc.{Action, Request, Result}
import play.twirl.api.HtmlFormat
import services.PrintService
import views.params._

import scala.concurrent.{ExecutionContext, Future}
import scala.language.implicitConversions

object Helpers {

  implicit def result2Future(result: Result): Future[Result] = Future.successful(result)

  implicit def html2FutureResult(html: HtmlFormat.Appendable): Future[Result] = Future.successful(Ok(html))

  def defaultPageAction(block: Request[Unit] => PageParam => Future[Result])
                       (implicit printService: PrintService,
                        ec: ExecutionContext,
                        config: Configuration): Action[Unit] = Action.async(parse.empty) { implicit request =>
    printService.allCategories(returnEmpty = false).flatMap { categories =>
      block(request)(PageParam(isHome = false, categories.filterNot(_.hide_in_pc), config.qiniuPublicCdnUrl))
    }
  }

}
