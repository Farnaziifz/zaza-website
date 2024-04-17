import { categoryApi } from '@/resources/service/modules/category'
import {
  type categoryList,
  type categoryType,
} from '@/core/types/category.type'

const api = categoryApi()

export const getCategoryList = async (): Promise<categoryList> => {
  const res = await api.getCategoryList()
  const category = res

  return category
}

export const getCategoryDetails = async (
  id: number | string
): Promise<categoryType> => {
  const res = await api.getCategoryDetails(id)
  return res
}
