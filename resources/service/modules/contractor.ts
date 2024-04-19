import { api } from '@/resources/service/index'
import { type contactorList } from '@/core/types/contractor.type'

const pageUrl = 'contractor'
type response = {
  data: contactorList
}

const contarctorListGet = async (): Promise<response> => {
  const res = await api.get(`${pageUrl}/contractor/`)
  console.log(res)
  return res.data
}

// const blogData = async (id: string | number): Promise<blogItem> => {
//   const res = await api.get(`${pageUrl}/post/${id}`)
//   return res.data
// }
export const concApi = () => {
  return {
    getContractorList: contarctorListGet,
    // getBlogData: blogData,
  }
}
