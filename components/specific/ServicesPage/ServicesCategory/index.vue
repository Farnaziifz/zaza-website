<template>
  <div class="container my-14">
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
      class="w-full"
    >
      <SwiperSlide v-for="slide in 10" :key="slide">
        <strong>عکس بنر {{ slide }}</strong>
      </SwiperSlide>
    </Swiper>
    <div class="text-center">
      <div class="custom-pagination !w-auto mt-5" self-center></div>
    </div>
  </div>
</template>
