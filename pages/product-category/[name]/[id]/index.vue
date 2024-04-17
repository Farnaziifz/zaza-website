<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import ProductCard from '@/components/shared/Cards/ProductCard/index.vue'
import temp7 from '@/assets/images/temp/7.png'
import CollapsibleCard from '@/components/shared/CollapsibelCard/index.vue'
import FilterBox from '@/components/specific/ProductCategory/FilterBox/index.vue'
import { getProductList } from '@/logics/specifics/product.handler'
import { type productList } from '~/core/types/product.type'
import { useRoute } from 'vue-router'

const route = useRoute()
const isShowFilter = ref(false)

const openFilterBox = () => {
  isShowFilter.value = true
}
const closeBox = () => {
  isShowFilter.value = false
}
const productLisData: Ref<productList> = ref({
  count: 0,
  total_pages: 0,
  next: '',
  previous: '',
  current_page: 0,
  results: [],
})

onBeforeMount(async () => {
  productLisData.value = await getProductList([+route.query.id], 1)
})
</script>

<template>
  <div class="container px-2 lg: px-0">
    <FilterBox :is-show="isShowFilter" @closeBox="closeBox" />
    <div class="my-4 mt-[100px] lg:mt-1">
      <span class="font-sm text-text-gray">خانه</span
      ><span class="mx-2 text-text-gray">></span
      ><span class="font-sm text-text-gray">استخر و لوله کشی</span>
      <span class="mx-2 text-text-gray">></span>
      <span>استخر و لوله کشی</span>
    </div>
    <div class="grid lg:grid-cols-4 grid-cols-1 gap-4">
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
        <div class="border border-sec-gray rounded p-4 mt-5 hidden lg:block">
          <CollapsibleCard title="فیلتر بر اساس کشور سازنده">
            <div
              class="flex items-center justify-between cursor-pointer px-4 mb-3"
            >
              <label for="name1">ایران</label>
              <input type="checkbox" id="name1" class="borde-none w-4 h-4" />
            </div>
            <div
              class="flex items-center justify-between cursor-pointer px-4 mb-3"
            >
              <label for="name2">ایران</label>
              <input type="checkbox" id="name2" class="borde-none w-4 h-4" />
            </div>
            <div
              class="flex items-center justify-between cursor-pointer px-4 mb-3"
            >
              <label for="name3">ایران</label>
              <input type="checkbox" id="name3" class="borde-none w-4 h-4" />
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="فیلتر بر اساس برند محصول">
            <div
              class="flex items-center justify-between cursor-pointer px-4 mb-3"
            >
              <label for="name1">ایران</label>
              <input type="checkbox" id="name1" class="borde-none w-4 h-4" />
            </div>
            <div
              class="flex items-center justify-between cursor-pointer px-4 mb-3"
            >
              <label for="name2">ایران</label>
              <input type="checkbox" id="name2" class="borde-none w-4 h-4" />
            </div>
            <div
              class="flex items-center justify-between cursor-pointer px-4 mb-3"
            >
              <label for="name3">ایران</label>
              <input type="checkbox" id="name3" class="borde-none w-4 h-4" />
            </div>
          </CollapsibleCard>
        </div>
        <div
          class="border border-sec-gray rounded p-4 mt-5 block lg:hidden flex items-center justify-between cursor-pointer"
          @click="openFilterBox"
        >
          <p>اعمال فیلتر</p>
          <p>icon</p>
        </div>
      </div>
      <div class="lg:col-span-3 col-span-1 w-full">
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
          <template v-for="item in productLisData.results">
            <ProductCard
              :has-border="true"
              v-if="item.seo_slug && item.id"
              :key="item.id"
              :productData="item"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
