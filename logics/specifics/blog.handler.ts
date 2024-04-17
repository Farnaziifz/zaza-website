import { blogApi } from '~/resources/service/modules/blog'
import { type blogList } from '~/core/types/blog.type'

const api = blogApi()

export const getBlogList = async (
  data: number[],
  page: number | string
): Promise<blogList> => {
  const res = await api.getBlogList(data, page)
  const blogList = res

  return blogList
}
