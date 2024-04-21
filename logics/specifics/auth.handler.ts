import { authApi } from '~/resources/service/modules/auth'
import { type otpSend } from '~/core/types/auth.type'

const api = authApi()

export const sendOtp = async (pn: string | number): Promise<string> => {
  const res = await api.sendOtp(pn)
  return res
}

export const confirmOtp = async (pn: string | number, otp: string | number) => {
  const res = await api.confirmOtp(pn, otp)
  return res
}
