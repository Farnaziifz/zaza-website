<script setup lang="ts">
import temp6 from '@/assets/images/temp/6.png'
</script>
<template>
  <div class="container my-14">
    <h1 class="lg:text-[44px] text-[22px] font-[dana-demi] text-center">
      متخصص مورد نیاز شما نزدیک‌تر از همیشه
    </h1>
    <div class="hidden lg:block">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="6"
        :loop="true"
        :pagination="{
          el: '.custom-pagination',
          enabled: true,
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        class="w-full mt-14"
      >
        <SwiperSlide v-for="slide in 10" :key="slide">
          <div>
            <img :src="temp6" alt="" />
            <p class="font-[dana-demi] text-lg text-center">نام دسته بندی</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="block lg:hidden">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="1"
        :loop="true"
        :pagination="{
          el: '.custom-pagination',
          enabled: true,
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        class="w-full mt-14"
      >
        <SwiperSlide v-for="slide in 10" :key="slide">
          <div class="m-auto flex justify-center flex-col items-center">
            <img :src="temp6" alt="" />
            <p class="font-[dana-demi] text-lg text-center">نام دسته بندی</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="text-center">
      <div class="custom-pagination !w-auto mt-14" self-center></div>
    </div>
  </div>
</template>
