import { concApi } from '@/resources/service/modules/contractor'
import {
  type contractorItem,
  type contactorList,
} from '@/core/types/contractor.type'

const api = concApi()

export const getConcList = async (): Promise<contactorList> => {
  const res = await api.getContractorList()
  const concList = res

  return concList
}

export const getBlogData = async (id: string | number): Promise<blogItem> => {
  const res = await api.getBlogData(id)
  return res
}
