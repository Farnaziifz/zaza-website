<script setup lang="ts">
import logo from '@/assets/images/logo.svg'
import man4 from '@/assets/images/man/man-4.png'
</script>
<template>
  <div
    class="container grid lg:grid-cols-2 grid-cols-1 gap-y-3 lg:gap-4 relative"
  >
    <div class="absolute top-1/2 left-1/2 transform">
      <img :src="logo" alt="" class="w-60 h-60 opacity-50 hidden lg:block" />
    </div>
    <div class="border rounded border-sec-gray p-4">
      <NuxtLink to="/login">
        <h2 class="text-center text-[40px] font-[dana-bold] mt-4">
          برای مشتریان
        </h2>

        <p class="font-[dana-bold] text-[22px] mt-4 text-center">
          فرصت همکاری با برترین متخصص کشور
        </p>
        <div class="w-full flex justify-center mb-4">
          <button class="bg-primary px-4 py-2 mt-20 rounded">
            ورود و ثبت نام
          </button>
        </div>
      </NuxtLink>
    </div>
    <div class="border rounded border-sec-gray p-4">
      <h2 class="text-center text-[40px] font-[dana-bold] mt-4">
        برای پیمانکاران
      </h2>
      <p class="font-[dana-bold] text-[22px] mt-4 text-center">
        بستری زنده برای هزاران پروژه فعال
      </p>
      <div class="w-full flex justify-center mb-4">
        <button class="bg-primary px-4 py-2 mt-20 rounded">
          ورود و ثبت نام
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.transform {
  transform: translate(-50%, -50%);
}
</style>
