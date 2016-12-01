package com

import play.api.Configuration

package object xjy {

  implicit class WrappedConfig(config: Configuration) {

    def qiniuPublicCdnUrl = config.getString("qiniu.public-cdn-url").get

    def internalPrintServiceUrl = config.getString("internal.print-service-url").get

  }

}
