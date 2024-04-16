<script setup lang="ts">
import man2 from '@/assets/images/man/man-2.png'
import mainBg from '@/assets/images/main-bg.png'
</script>

<template>
  <div class="container">
    <div class="grid lg:grid-cols-2 gap-4">
      <div class="block lg:hidden mt-14">
        <p class="font-[dana-bold] text-[32px] text-center">
          دنبال متخصص میگردید؟
        </p>
        <p class="font-[dana-bold] text-[24px] mt-12 text-center">
          برترین متخصصین در سراسر کشور را اینجا میتونید پیدا کنید
        </p>
      </div>

      <div>
        <img :src="man2" alt="" />
      </div>
      <div class="flex flex-col justify-center h-full items-center">
        <div class="hidden lg:block">
          <p class="font-[dana-bold] text-[32px] text-center">
            دنبال متخصص میگردید؟
          </p>
          <p class="font-[dana-bold] text-[24px] mt-12 text-center">
            برترین متخصصین در سراسر کشور را اینجا میتونید پیدا کنید
          </p>
        </div>
        <NuxtLink to="/services">
          <button
            class="bg-primary p-4 focus:outline-none lg:rounded -mt-10 lg:mt-10 w-full lg:w-auto"
          >
            انتخاب متخصص
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>

  <div class="w-full relative hidden lg:block">
    <img :src="mainBg" alt="" class="w-full" />
    <div class="absolute top-0 right-0 w-full grid grid-cols-2 gap-4 h-full">
      <div></div>
      <div class="flex flex-col justify-center items-center h-full">
        <p class="font-[dana-bold] text-primary text-[36px]">
          قدرت در دستان شماست
        </p>
        <p class="font-[dana-medium] text-sec-gray text-[24px] mt-4">
          با زازا خودتو مجهز کن
        </p>
        <NuxtLink to="/product-category">
          <p class="text-white text-sm mt-7 cursor-pointer has-line">
            مشاهده محصولات
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.has-line {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 30px;
    height: 2px;
    background: #fff;
  }
}
</style>
