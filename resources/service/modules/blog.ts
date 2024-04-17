import { api } from '@/resources/service/index'
import { type blogList } from '~/core/types/blog.type'

const pageUrl = 'blog'
type response = {
  data: blogList
}

const blogListGet = async (data: number[], page: number | string): Promise<response> => {
  let queryString = ''
  data?.forEach((number, index) => {
    queryString += `category=${number}`

    if (index < data.length - 1) {
      queryString += '&'
    }
  })
  const res = await api.get(`${pageUrl}/post/?page=${page}&${queryString}`)
  return res.data
}

export const blogApi = () => {
  return {
    getBlogList: blogListGet,
  }
}
