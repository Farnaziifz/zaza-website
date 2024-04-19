<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { type categoryList } from '@/core/types/category.type'
import { getCategoryList } from '@/logics/specifics/category.handler'
import { useRoute } from 'vue-router'
const route = useRoute()

const categoryData: Ref<categoryList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})
const activeCategory = ref('')
onBeforeMount(async () => {
  categoryData.value = await getCategoryList()
  if (route.query.id) activeCategory.value = route.params.category
})
</script>
<template>
  <div class="container my-14">
    <p class="text-center mb-5" v-if="activeCategory.length">
      شما در حال حاضر در دسته‌بندی خدمات
      {{ activeCategory }}
      هستید.
    </p>
    <h2 class="lg:text-[40px] text-[22px] font-[dana-demi] text-center">
      متخصص مورد نیاز شما نزدیک‌تر از همیشه
    </h2>
    <div class="hidden lg:block">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="5"
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
        <SwiperSlide v-for="slide in categoryData.results" :key="slide.id">
          <NuxtLink :to="`/services/${slide.title_service}?id=${slide.id}`">
            <div class="flex flex-col items-center">
              <img
                :src="slide.thumbnail_main"
                :alt="slide.seo_title"
                class="w-[200px] h-[200px] rounded-[50%]"
              />
              <p class="font-[dana-demi] text-lg text-center mt-4">
                {{ slide.title_service }}
              </p>
            </div>
          </NuxtLink>
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
        <SwiperSlide v-for="slide in categoryData.results" :key="slide.id">
          <NuxtLink :to="`/services/${slide.title_service}?id=${slide.id}`">
            <div class="flex flex-col items-center">
              <img
                :src="slide.thumbnail_main"
                :alt="slide.seo_title"
                class="w-[200px] h-[200px] rounded-[50%]"
              />
              <p class="font-[dana-demi] text-lg text-center mt-4">
                {{ slide.title_service }}
              </p>
            </div>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="text-center">
      <div class="custom-pagination !w-auto mt-14" self-center></div>
    </div>
  </div>
</template>
