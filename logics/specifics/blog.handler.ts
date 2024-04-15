import { blogApi } from '~/resources/service/modules/blog'
import { type blogList } from '~/core/types/blog.type'

const api = blogApi()

export const getBlogList = async (): Promise<blogList> => {
  const res = await api.getBlogList()
  const blogList = res

  return blogList
}
