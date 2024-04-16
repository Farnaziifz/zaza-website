import { productApi } from '~/resources/service/modules/product'
import { type brandList } from '~/core/types/product.type'

const api = productApi()

export const getBrandList = async (): Promise<brandList> => {
  const res = await api.getBrandList()
  const brands = res

  return brands
}
