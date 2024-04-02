import { categoryApi } from '@/resources/service/modules/category'
import { type categoryList } from '@/core/types/category.type'

const api = categoryApi()

export const getCategoryList = async (): Promise<categoryList> => {
  const res = await api.getCategoryList()
  console.log('console. in handler', res)
  const category = res.data

  const errors = res.errors

  if (Object.is(errors, null)) return category
  else {
    // TODO: error handling
    throw 'errors'
  }
}
