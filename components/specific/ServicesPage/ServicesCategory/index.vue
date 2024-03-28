<script setup lang="ts">
import temp6 from '@/assets/images/temp/6.png'
</script>
<template>
  <div class="container my-14">
    <h1 class="text-[44px] font-[dana-demi] text-center">
      متخصص مورد نیاز شما نزدیک‌تر از همیشه
    </h1>
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
    <div class="text-center">
      <div class="custom-pagination !w-auto mt-14" self-center></div>
    </div>
  </div>
</template>
