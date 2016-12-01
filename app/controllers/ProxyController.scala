package controllers

import javax.inject.Inject

import com.xjy._
import play.api.Configuration
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.ws._
import play.api.mvc._

import scala.util._

class ProxyController @Inject() (ws: WSClient, config: Configuration) extends Controller {

  import ProxyController._

  def proxyPass(path: String) = Action.async(parse.raw) { implicit request =>

    val wsResponse = {
      // body 这里就偷懒都先写到文件再读出来好了，因为这个只有在开发的时候才会用到。
      ws.url(s"${config.internalPrintServiceUrl}${request.path}").
        withMethod(request.method).
        withBody(FileBody(request.body.asFile)).
        withHeaders(request.headers.toMap.toFlatSeq.filter(r => r._1 == "Cookie" || r._1 == "Content-Type"): _*).
        withQueryString(request.queryString.toFlatSeq: _*).
        execute()
    }

    wsResponse.map { response =>
      Try {
        Status(response.status)(response.json)
      }.recoverWith { case ex: Throwable =>
        play.api.Logger.error(s"pass request: $request error when build response: $response")
        Try {
          Status(response.status)(response.bodyAsBytes)
        }
      } match {
        case Success(value) =>
          val headers = response.allHeaders.toFlatSeq.filter(r => r._1 != "Content-Type" && r._1 != "Content-Length")
          
          value.withHeaders(headers: _*)
        case Failure(ex) =>
          play.api.Logger.error(s"pass request: $request error when build response: $response after recoverWith")
          InternalServerError
      }
    }
  }

}

object ProxyController {

  /**
    * 将 Map[String, Seq[String]] 展开成 Seq[(String, String)]
    */
  implicit private class WrappedMap(map: Map[String, Seq[String]]) {
    def toFlatSeq = {
      map.toSeq.flatMap { case (key, values) =>
        values.map(v => key -> v)
      }
    }
  }

}
