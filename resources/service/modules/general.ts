import { api } from '@/resources/service/index'
import { type faqList } from '@/core/types/general.type'

const pageUrl = 'faq'
type response = {
  data: faqList
}

const faqListGet = async (): Promise<response> => {
  const res = await api.get(`${pageUrl}/`)
  return res.data
}

export const generalApi = () => {
  return {
    getFaqList: faqListGet,
  }
}
