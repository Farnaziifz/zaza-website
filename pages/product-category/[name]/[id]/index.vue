<script setup lang="ts">
import ProductCard from '@/components/shared/Cards/ProductCard/index.vue'
import temp7 from '@/assets/images/temp/7.png'
</script>

<template>
  <div class="container">
    <div class="my-4">
      <span class="font-sm text-text-gray">خانه</span
      ><span class="mx-2 text-text-gray">></span
      ><span class="font-sm text-text-gray">استخر و لوله کشی</span>
      <span class="mx-2 text-text-gray">></span>
      <span>استخر و لوله کشی</span>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div class="w-full">
        <div class="border border-sec-gray rounded p-4">
          <p class="font-[dana-demi] text-center text-sm">
            پیمانکاران مرتبط با دسته بندی تجهیزات استخر و سونا و جکوزی
          </p>
          <Swiper
            :modules="[SwiperAutoplay, SwiperPagination]"
            :slides-per-view="2"
            :pagination="{
              el: '.custom-pagination',
              enabled: true,
            }"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: true,
            }"
            class="w-full mt-5"
          >
            <SwiperSlide v-for="slide in 10" :key="slide">
              <div>
                <img :src="temp7" alt="" />
              </div>
              <div class="mt-4">
                <img :src="temp7" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="text-center">
            <div class="custom-pagination !w-auto mt-5" self-center></div>
          </div>
        </div>
        <div class="border border-sec-gray rounded p-4 mt-5"></div>
      </div>
      <div class="col-span-3 w-full">
        <div class="grid grid-cols-3 gap-4">
          <ProductCard :has-border="true" :has-discount="true" />
          <ProductCard :has-border="true" />
          <ProductCard :has-border="true" />
          <ProductCard :has-border="true" />
          <ProductCard :has-border="true" />
          <ProductCard :has-border="true" />
        </div>
      </div>
    </div>
  </div>
</template>
