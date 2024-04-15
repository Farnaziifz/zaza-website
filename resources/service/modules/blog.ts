import { api } from '@/resources/service/index'
import { type blogList } from '~/core/types/blog.type'

const pageUrl = 'blog'
type response = {
  data: blogList
}

const blogListGet = async (): Promise<response> => {
  const res = await api.get(`${pageUrl}/post/`)
  return res.data
}

export const blogApi = () => {
  return {
    getBlogList: blogListGet,
  }
}
