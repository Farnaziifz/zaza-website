import { productApi } from '~/resources/service/modules/product'
import {
  type brandList,
  type productItem,
  type promoted,
  type brandItem,
} from '~/core/types/product.type'

const api = productApi()

export const getBrandList = async (): Promise<brandList> => {
  const res = await api.getBrandList()
  const brands = res

  return brands
}

export const brandItemGet = async (id: string | number): Promis<brandItem> => {
  const res = await api.brandItemGet(id)
  return res
}
export const getProductList = async (
  category: number[],
  page: number | string,
  brand: string | number,
  on_sale: boolean,
  is_bestselling: boolean
): Promise<productItem> => {
  const res = await api.getProductList(
    category,
    page,
    brand,
    on_sale,
    is_bestselling
  )
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
