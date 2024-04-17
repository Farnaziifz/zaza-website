import { api } from '@/resources/service/index'
import { type blogList } from '~/core/types/blog.type'

const pageUrl = 'blog'
type response = {
  data: blogList
}

const blogListGet = async (data: number[]): Promise<response> => {
  let queryString = ''
  console.log(data)
  data?.forEach((number, index) => {
    queryString += `category=${number}`

    if (index < data.length - 1) {
      queryString += '&'
    }
  })
  const res = await api.get(`${pageUrl}/post/?${queryString}`)
  return res.data
}

export const blogApi = () => {
  return {
    getBlogList: blogListGet,
  }
}
