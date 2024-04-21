import { api } from '@/resources/service/index'
import { type otpSend } from '@/core/types/auth.type'

const pageUrl = 'auth'
type response = {
  status: string
}

const sendOtp = async (pn: string | number): Promise<response> => {
  const res = await api.post(`${pageUrl}/otp/send/`, {
    phone_number: pn,
  })
  return res.data
}
const confirmOtp = async (pn: string | number, otp: string | number) => {
  const res = await api.post(`${pageUrl}/otp/verify/`, {
    phone_number: pn,
    otp,
  })
  return res.data
}
export const authApi = () => {
  return {
    sendOtp,
    confirmOtp,
  }
}
