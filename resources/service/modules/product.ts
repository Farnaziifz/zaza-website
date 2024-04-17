import { api } from '@/resources/service/index'
import { type brandList } from '~/core/types/product.type'
import { type productList } from '@/core/types/product.type'

const pageUrl = 'product'
type BrandResponse = {
  data: brandList
}

type ProductList = {
  data: productList
}

const brandListGet = async (): Promise<BrandResponse> => {
  const res = await api.get(`${pageUrl}/brand/`)
  return res.data
}

const productList = async (
  category: number[],
  page: number | string
): Promise<ProductList> => {
  let queryString = ''
  category?.forEach((number, index) => {
    queryString += `category=${number}`

    if (index < category.length - 1) {
      queryString += '&'
    }
  })

  const res = await api.get(`${pageUrl}/product/?page=${page}&${queryString}`)
  return res.data
}

export const productApi = () => {
  return {
    getBrandList: brandListGet,
    getProductList: productList,
  }
}
