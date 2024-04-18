import { productApi } from '~/resources/service/modules/product'
import {
  type brandList,
  type productItem,
  type promoted
} from '~/core/types/product.type'

const api = productApi()

export const getBrandList = async (): Promise<brandList> => {
  const res = await api.getBrandList()
  const brands = res

  return brands
}

export const getProductList = async (
  category: number[],
  page: number | string
): Promise<productItem> => {
  const res = await api.getProductList(category, page)
  return res
}

export const getProductData = async (
  id: number | string
): Promise<productItem> => {
  const res = await api.getProductData(id)
  return res
}

export const getPromoteProduct = async (): Promise<promoted> => {
  const res = await api.getPromoteProduct()
  return res
}

