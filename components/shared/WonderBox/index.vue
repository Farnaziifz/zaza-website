<script lang="ts" setup>
import ProductCard from '@/components/shared/Cards/ProductCard/index.vue'
</script>

<template>
  <div class="container w-full py-3 bg-primary rounded">
    <div class="grid grid-cols-2 md:grid-cols-5">
      <div
        class="h-full w-[200px] col-span-1 px-2 md:px-5 flex flex-col md:items-center items-start justify-center"
      >
        <p class="text-sm md:text-lg font-[dana-bold] text-white">
          پبشنهاد شگفت انگیز
        </p>
        <p class="text-sm md:text-lg font-[dana-bold] text-white">در</p>
        <p class="text-sm md:text-lg font-[dana-bold] text-white">
          استخر و لوله کشی
        </p>
        <div class="text-center">
          <div class="custom-pagination !w-auto mt-5" self-center></div>
        </div>
      </div>
      <div class="w-full col-span-1 md:col-span-4 md:hidden block">
        <Swiper
          :modules="[SwiperAutoplay, SwiperPagination]"
          :slides-per-view="1"
          :spaceBetween="10"
          :loop="true"
          :pagination="{
            el: '.custom-pagination',
            enabled: true,
          }"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          class="w-full"
        >
          <SwiperSlide v-for="slide in 10" :key="slide">
            <ProductCard class="mx-1" :has-discount="true" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="w-full col-span-1 md:col-span-4 md:block hidden">
        <Swiper
          :modules="[SwiperAutoplay, SwiperPagination]"
          :slides-per-view="3"
          :spaceBetween="10"
          :loop="true"
          :pagination="{
            el: '.custom-pagination',
            enabled: true,
          }"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          class="w-full"
        >
          <SwiperSlide v-for="slide in 10" :key="slide">
            <ProductCard class="mx-1" :has-discount="true" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.swiper-slide {
  margin: 0 4px;
}
</style>
