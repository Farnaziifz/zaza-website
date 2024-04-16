<script setup lang="ts">
import { type brandList } from '~/core/types/product.type'
type brandProps = {
  brands: brandList
}

const prpos = defineProps<brandProps>()
</script>

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
      <SwiperSlide
        v-for="slide in prpos.brands?.results"
        :key="slide.id"
        class="flex justify-center bg-[re] bordered mx-5"
      >
        <div
          class="w-[200p] h-[200px] flex flex-col justify-center items-center"
        >
          <img :src="slide.image" :alt="slide.seo_title" class="object-cover" />
          <p>{{ slide.title }}</p>
        </div>
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
