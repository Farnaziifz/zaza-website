import { api } from '@/resources/service/index'
import { type brandList } from '~/core/types/product.type'
import {
  type productList,
  type productItem,
  type promoted,
} from '@/core/types/product.type'

const pageUrl = 'product'
type BrandResponse = {
  data: brandList
}

type ProductList = {
  data: productList
}
type Promoted = {
  data: promoted
}
const brandListGet = async (): Promise<BrandResponse> => {
  const res = await api.get(`${pageUrl}/brand/`)
  return res.data
}

const brandItemGet = async (id: string | number): Promise<productItem> => {
  const res = await api.get(`${pageUrl}/brand/${id}`)
  return res.data
}

const productList = async (
  category: number[],
  page: number | string,
  brand: string | number,
  on_sale: boolean,
  is_bestselling: boolean
): Promise<ProductList> => {
  let queryString = ''
  category?.forEach((number, index) => {
    queryString += `category=${number}`

    if (index < category.length - 1) {
      queryString += '&'
    }
  })
  if (brand) queryString += `&brand=${brand}`
  if (on_sale) queryString += `&on_sale=${on_sale}`
  if (is_bestselling) queryString += `is_bestselling=${is_bestselling}`
  const res = await api.get(`${pageUrl}/product/?page=${page}&${queryString}`)
  return res.data
}
const productData = async (id: number | string): Promise<productItem> => {
  const res = await api.get(`${pageUrl}/product/${id}/`)
  return res.data
}

const getPromotedProduct = async (): Promise<Promoted> => {
  const res = await api.get(`${pageUrl}/product/promote_products/`)
  return res.data
}
export const productApi = () => {
  return {
    getBrandList: brandListGet,
    getProductList: productList,
    getProductData: productData,
    getPromoteProduct: getPromotedProduct,
    brandItemGet: brandItemGet,
  }
}
