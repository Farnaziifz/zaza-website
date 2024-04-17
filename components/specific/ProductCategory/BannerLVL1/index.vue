<script setup lang="ts">
type banner = {
  id: number
  created_at: string
  updated_at: string
  title: string
  url: string
  image: string
}

type bannerProps = {
  bannerData: banner[]
}
const props = defineProps<bannerProps>()
</script>

<template>
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
    <SwiperSlide v-for="slide in props.bannerData" :key="slide">
      <div class="w-full h-[400px] relative rounded">
        <a :href="slide.url" target="_blank" class="w-full h-full">
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-[400px] object-cover rounded"
          />
          <div
            class="text-center h-full w-full absolute top-0 left-0 bg-[#5b5b5b87] flex justify-center items-center rounded"
          >
            <div
              class="custom-pagination !w-auto mt-5 font-[dana-bold] text-[40px] text-white"
              self-center
            >
              {{ slide.title }}
            </div>
          </div>
        </a>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
