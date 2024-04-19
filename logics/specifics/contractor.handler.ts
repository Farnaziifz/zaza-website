import { concApi } from '@/resources/service/modules/contractor'
import {
  type contractorItem,
  type contactorList,
} from '@/core/types/contractor.type'

const api = concApi()

export const getConcList = async (
  category: string | number
): Promise<contactorList> => {
  const res = await api.getContractorList(category)
  const concList = res

  return concList
}

export const getConcData = async (
  id: string | number
): Promise<contractorItem> => {
  const res = await api.getConcData(id)
  return res
}
