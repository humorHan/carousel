package views.params

/**
 * 印刷品分类导航栏模板参数。
 *
 * @param isHome 是否是首页。
 * @param categories 所有分类的序列。
 * @param qiniuCdnHost 七牛 cdn 域名。
 */
final case class PageParam(isHome: Boolean, categories: Seq[services.Category], qiniuCdnHost: String)
