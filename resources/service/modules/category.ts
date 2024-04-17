import { api } from '@/resources/service/index'
import { type categoryList, type categoryType } from '@/core/types/category.type'
import { type error } from '@/core/types/error.type'

const pageUrl = 'category'
type response = {
  data: categoryList
}

type detailsResponse = {
  data: categoryType
}
const categoryListGet = async (): Promise<response> => {
  const res = await api.get(`${pageUrl}/category/`)
  return res.data
}

const getCategoryDetails = async (id: number | string): Promise<detailsResponse> => {
  const res = await api.get(`${pageUrl}/category/${id}`)
  return res.data
}

export const categoryApi = () => {
  return {
    getCategoryList: categoryListGet,
    getCategoryDetails
  }
}
