<script setup lang="ts">
import Logo from '@/assets/images/logo.svg'
import { confirmOtp } from '@/logics/specifics/auth.handler'
import Timer from '@/components/shared/time/index.vue'
import { useRouter } from 'vue-router'
import _ from 'lodash'

const router = useRouter()
definePageMeta({
  layout: 'none!',
})
const phoneNumber = ref()
const otpCode = ref()
onBeforeMount(() => {
  phoneNumber.value = localStorage.getItem('pn')
})
const checkOtpLength = async () => {
  if (otpCode.value.length === 4) {
    const res = await confirmOtp(
      _.toNumber(phoneNumber.value),
      _.toNumber(otpCode.value)
    )
    if (res.status) {
      router.push('/dashbord')
    }
  }
}
watch(otpCode, () => {
  checkOtpLength()
})
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="rounded border lg:border-sec-gray p-10 text-center">
      <img :src="Logo" alt="zaza kala" class="mb-4 w-40 mx-auto" />
      <p class="font-[dana-extra] font-xl">کد تایید را وارد کنید</p>
      <p class="font-[dana-light] mt-3">
        کد تایید برای شماره {{ phoneNumber }} پیامک شد
      </p>

      <input
        @change="checkOtpLength"
        v-model="otpCode"
        maxlength="4"
        class="w-[300px] text-center lg:w-[400px] border-2 border-primary focus:outline-none py-3 mt-4 rounded indent-2"
      />
      <Timer />
      <button
        class="w-[300px] lg:w-[400px] block p-4 bg-primary rounded focus:outline-none text-white mt-2"
      >
        ورود
      </button>
    </div>
  </div>
</template>
