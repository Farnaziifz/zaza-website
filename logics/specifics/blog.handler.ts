import { blogApi } from '~/resources/service/modules/blog'
import { type blogList } from '~/core/types/blog.type'

const api = blogApi()

export const getBlogList = async (data: number[] ): Promise<blogList> => {
  const res = await api.getBlogList(data)
  const blogList = res

  return blogList
}
