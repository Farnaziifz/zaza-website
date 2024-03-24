<template>
  <div class="container">
    <h2 class="font-[dana-medium] text-[42px] text-center mb-5">
      بهترین برندها
    </h2>
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="4"
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
        <strong>عکس برند {{ slide }}</strong>
      </SwiperSlide>
    </Swiper>
    <div class="text-center">
      <div class="custom-pagination !w-auto mt-5" self-center></div>
    </div>
  </div>
</template>
<style lang="scss">
.swiper-pagination-bullet-active {
  background: #fcba2e !important;
}
</style>
