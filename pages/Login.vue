<script setup lang="ts">
import Logo from '@/assets/images/logo.svg'

definePageMeta({
  layout: 'none!',
})
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="rounded border  lg:border-sec-gray p-10 text-center">
      <img :src="Logo" alt="zaza kala" class="mb-4 w-40 mx-auto" />
      <p class="font-[dana-extra] font-xl">ورود | ثبت‌نام</p>
      <p class="font-[dana-light] mt-3">سلام!</p>
      <p class="font-[dana-light] mt-3">
        لطفا شماره موبایل یا ایمیل خود را وارد کنید
      </p>
      <input
        type="number"
        class="w-[300px] lg:w-[400px] border-2 border-primary focus:outline-none py-3 mt-4 rounded indent-2"
      />
      <button
        class="w-[300px] lg:w-[400px] block p-4 bg-primary rounded focus:outline-none text-white mt-10"
      >
        ارسال کد تایید
      </button>
    </div>
  </div>
</template>
