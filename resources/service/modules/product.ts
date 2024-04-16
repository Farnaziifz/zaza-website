import { api } from '@/resources/service/index'
import { type brandList } from '~/core/types/product.type'

const pageUrl = 'product'
type BrandResponse = {
  data: brandList
}

const brandListGet = async (): Promise<BrandResponse> => {
  const res = await api.get(`${pageUrl}/brand/`)
  return res.data
}

export const productApi = () => {
  return {
    getBrandList: brandListGet,
  }
}
