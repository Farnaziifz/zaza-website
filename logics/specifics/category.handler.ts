import { categoryApi } from '@/resources/service/modules/category'
import { type categoryList } from '@/core/types/category.type'

const api = categoryApi()

export const getCategoryList = async (): Promise<categoryList> => {
  const res = await api.getCategoryList()
  const category = res.results
  const errors = res.errors

  return category
}
