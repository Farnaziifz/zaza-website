<script setup lang="ts">
import temp8 from '@/assets/images/temp/8.png'
import temp9 from '@/assets/images/temp/9.png'
import temp10 from '@/assets/images/temp/10.png'
import approvalIcon from '@/assets/images/icons/Approval.png'
import ExerciseIcon from '@/assets/images/icons/Exercise.png'
import StallIcon from '@/assets/images/icons/Stall.png'
import man4 from '@/assets/images/man/man-4.png'
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="">
      <div class="w-full">
        <img :src="temp8" alt="" class="w-full" />
      </div>
      <div class="grid grid-cols-3 gap-4 mt-4">
        <img :src="temp8" alt="" class="w-full" />
        <img :src="temp9" alt="" class="w-full" />
        <img :src="temp8" alt="" class="w-full" />
      </div>
    </div>
    <div class="col-span-2">
      <div class="w-full border-b border-sec-gray">
        <h1 class="font-[dana-demi] text-[32px] mb-2">
          آبنما بارانی استیل 3 ردیفه 1 متری شاین shine
        </h1>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-10">
        <div class="flex flex-col justify-between">
          <div>
            <p class="font-[dana-demi] mb-2">شناسه محصول: 11020020028</p>
            <p class="font-[dana-demi] mb-2">شناسه محصول: 11020020028</p>
            <p class="font-[dana-demi] mb-2">شناسه محصول: 11020020028</p>
            <p class="font-[dana-demi] mb-2">شناسه محصول: 11020020028</p>
            <p class="font-[dana-demi] mb-2">شناسه محصول: 11020020028</p>
          </div>
          <div class="flex">
            <img :src="man4" alt="" class="w-20" />
            <div class="flex flex-col justify-end">
              <p class="text-md font-[dana-demi] mb-2">
                برای نصب نیاز به کمک دارید؟
              </p>
              <button class="bg-primary rounded py-2 font-[dana-demi]">
                انتخاب متخصص
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-2 bg-[#F7F7F7] rounded h-full w-full p-4">
          <div class="flex justify-end border-b border-sec-gray pb-2">
            <img :src="temp10" alt="" />
          </div>
          <div class="mt-5 border-b border-sec-gray">
            <div class="flex items-center mb-8">
              <img :src="approvalIcon" alt="" />
              <p class="mr-2 font-[dana-demi]">ضمانت اصل بودن کالا</p>
            </div>
            <div class="flex items-center mb-8">
              <img :src="StallIcon" alt="" />
              <p class="mr-2 font-[dana-demi]">
                امکان تحویل در فروشگاه زازا کالا
              </p>
            </div>
            <div class="flex items-center mb-8">
              <img :src="ExerciseIcon" alt="" />
              <p class="mr-2 font-[dana-demi]">ارسال سریع</p>
            </div>
          </div>
          <div class="flex justify-between mt-5">
            <div class="flex">
              <span class="bg-[#B80000] rounded-lg text-white px-2 py-1 text-xs"
                >10%</span
              >
              <p class="font-[dana-bold] text-lg mr-2 text-text-gray">
                ۳/۱۶۰/۰۰۰ <span class="text-xs">ریال</span>
              </p>
            </div>
            <p class="font-[dana-bold] text-lg">
              ۲/۱۲۰/۰۰۰ <span class="text-xs">ریال</span>
            </p>
          </div>

          <div class="flex mt-10 justify-between items-center">
            <p class="text-[#ED0000] text-sm">تنها ۱ عدد در انبار باقی مانده</p>
            <button
              class="bg-primary rounded py-3 px-4 font-[dana-bold] text-[20px]"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
