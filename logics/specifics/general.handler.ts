import { generalApi } from '@/resources/service/modules/general'
import { type faqList } from '@/core/types/general.type'

const api = generalApi()

export const getFaqList = async (): Promise<faqList> => {
  const res = await api.getFaqList()
  const faq = res

  return faq
}
