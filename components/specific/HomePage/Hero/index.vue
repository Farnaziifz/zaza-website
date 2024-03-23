<script setup lang="ts">
import man1 from '@/assets/images/man/man-1.png'
import DropDown from '@/components/shared/DropDown/index.vue'

const cat1Options = ref([{ id: 1, label: 'استخر' }])
</script>

<template>
  <div class="h-[calc(100vh_-_ 100px)]">
    <div class="container">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 flex flex-col justify-center">
          <div class="">
            <h1
              class="font-[dana-extra] text-[42px] text-justify leading-[70px]"
            >
              از فروش محصولات تا نصب و راه‌اندازی و انتخاب متخصص مناسب شما دست
              دوستی میدهیم.
            </h1>
            <p class="font-[dana-bold] text-[32px] mt-20 text-[#807F7F]">
              دنبال چه محصولی میگردید؟
            </p>
            <div class="grid grid-cols-3 gap-4 mt-7">
              <div>
                <DropDown
                  title="انتخاب دسته‌بندی اصلی"
                  :options="cat1Options"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img :src="man1" alt="hero-image" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-primary h-14"></div>
  </div>
</template>
