import { api } from '@/resources/service/index'
import {
  type contactorList,
  type contractorItem,
} from '@/core/types/contractor.type'

const pageUrl = 'contractor'
type response = {
  data: contactorList
}

const contarctorListGet = async (
  category: string | number
): Promise<response> => {
  let qs = ''
  if (category) qs += `?category=${category}`
  const res = await api.get(`${pageUrl}/contractor/${qs}`)
  return res?.data
}

const concData = async (id: string | number): Promise<contractorItem> => {
  const res = await api.get(`${pageUrl}/contractor/${id}/`)
  return res?.data
}
export const concApi = () => {
  return {
    getContractorList: contarctorListGet,
    getConcData: concData,
  }
}
