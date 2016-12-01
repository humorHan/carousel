package com.xjy

import play.api.Configuration

object Helpers {

  /**
    * 将七牛的资源 key 转换成 url。
    *
    * @param key 图片的七牛key。
    */
  def getQiniuUrl(key: String)(implicit config: Configuration): String = {
    s"${config.qiniuPublicCdnUrl}/$key"
  }

}
