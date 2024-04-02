import { api } from '@/resources/service/index'
import { type categoryList } from '@/core/types/category.type'
import { type error } from '@/core/types/error.type'

const pageUrl = 'category'
type response = {
  data: categoryList
  errors: error
}

const categoryListGet = async (): Promise<response> => {
  const res = await api.get(`${pageUrl}/category/`)
  console.log('console in api module', res)
  return res.data
}

export const categoryApi = () => {
  return {
    getCategoryList: categoryListGet,
  }
}
