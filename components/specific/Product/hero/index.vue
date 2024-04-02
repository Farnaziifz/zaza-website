<script setup lang="ts">
import temp8 from '@/assets/images/temp/8.png'
import temp9 from '@/assets/images/temp/9.png'
import temp10 from '@/assets/images/temp/10.png'
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
        <div>dw</div>
        <div class="col-span-2 bg-[#F7F7F7] rounded h-full w-full p-4">
          <div class="flex justify-end border-b border-sec-gray pb-2">
            <img :src="temp10" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
