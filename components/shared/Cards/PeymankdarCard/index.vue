<script setup lang="ts">
import temp11 from '@/assets/images/temp/11.png'
import starIcon from '@/assets/images/icons/Star.png'
import chevron from '../../Icons/chevron.vue'
</script>

<template>
  <div
    class="w-full bg-white my-shadow px-4 py-4 rounded flex flex-col justify-between mb-4"
  >
    <div class="flex">
      <div class="w-[120px]">
        <img :src="temp11" alt="" />
      </div>
      <div class="mr-4">
        <p class="font-[dana-demi] lg:text-[24px] text-[18px] mb-3">
          محمد خسروانی
        </p>
        <p class="text-[#686868] font-[dana-demi] lg:text-md text-[16px] mb-3">
          نقاش، بتونه کاری، رفع ترک
        </p>
        <p class="flex text-primary items-center">
          <span class="text-xs ml-1">امتیاز ۴/۱۰</span>
          <img :src="starIcon" alt="" class="w-[16px]" />
        </p>
      </div>
    </div>
    <div class="mt-4 flex w-full justify-between items-center">
      <div class="flex">
        <div class="bg-[#D9D9D9] rounded-[40%] p-2 text-xs">تهران</div>
      </div>
      <p class="flex text-primary items-center">
        <span>مشاهده پروفایل</span>
        <span class="text-[20px] mr-1">
          <chevron class="rotate-90" />
        </span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-shadow {
  box-shadow: 0px 0px 6px #999999;
}
</style>
