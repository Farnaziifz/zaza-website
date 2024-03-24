<script setup lang="ts">
import man1 from '@/assets/images/man/man-1.png'
import DropDown from '@/components/shared/DropDown/index.vue'

const cat1Options = ref([{ id: 1, label: 'استخر' }])
const cat2Options = ref([{ id: 1, label: 'لوله' }])
</script>

<template>
  <div class="">
    <div class="container">
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div class="lg:col-span-2 flex flex-col justify-center">
          <div
            class="flex justify-center flex-col w-full items-center lg:justify-items-start"
          >
            <img
              :src="man1"
              alt="hero-image"
              class="lg:hidden block mt-10 w-64"
            />
            <h1
              class="font-[dana-extra] lg:text-[42px] text-[20px] leading-[70px] px-4 text-center lg:text-justify"
            >
              از فروش محصولات تا نصب و راه‌اندازی و انتخاب متخصص مناسب شما دست
              دوستی میدهیم.
            </h1>
            <p
              class="font-[dana-bold] text-[32px] mt-20 text-[#807F7F] lg:block hidden"
            >
              دنبال چه محصولی میگردید؟
            </p>
            <div class="grid grid-cols-3 gap-4 mt-7 lg:grid hidden">
              <DropDown title="انتخاب دسته‌بندی اصلی" :options="cat1Options" />
              <DropDown title="انتخاب دسته‌بندی دوم" :options="cat2Options" />
              <button class="focus:outline-none bg-primary rounded px-4 py-3">
                انتخاب
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img :src="man1" alt="hero-image" class="lg:block hidden" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-primary h-14"></div>
  </div>
</template>
