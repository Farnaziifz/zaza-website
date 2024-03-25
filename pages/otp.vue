<script setup lang="ts">
import Logo from '@/assets/images/logo.svg'

definePageMeta({
  layout: 'none!',
})
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div
      class="rounded  border lg:border-sec-gray p-10 text-center"
    >
      <img :src="Logo" alt="zaza kala" class="mb-4 w-40 mx-auto" />
      <p class="font-[dana-extra] font-xl">کد تایید را وارد کنید</p>
      <p class="font-[dana-light] mt-3">
        کد تایید برای شماره ۰۹۲۱۲۰۷۹۳۶۹ پیامک شد
      </p>

      <input
        type="number"
        class="w-[300px] lg:w-[400px] border-2 border-primary focus:outline-none py-3 mt-4 rounded indent-2"
      />
      <p class="mt-10 font-[dana-light] font-sm">
        ۱۸ : ۰۲مانده تا دریافت مجدد کد
      </p>
      <button
        class="w-[300px] lg:w-[400px] block p-4 bg-primary rounded focus:outline-none text-white mt-2"
      >
        ورود
      </button>
    </div>
  </div>
</template>
