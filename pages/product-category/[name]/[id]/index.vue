<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import ProductCard from '@/components/shared/Cards/ProductCard/index.vue'
import CollapsibleCard from '@/components/shared/CollapsibelCard/index.vue'
import FilterBox from '@/components/specific/ProductCategory/FilterBox/index.vue'
import { getProductList } from '@/logics/specifics/product.handler'
import { type productList } from '~/core/types/product.type'
import { useRoute, useRouter } from 'vue-router'
import { getConcList } from '~/logics/specifics/contractor.handler'
import { type contactorList } from '@/core/types/contractor.type'
import starIcon from '@/assets/images/icons/Star.png'
import Pagination from '@/components/shared/pagination/index.vue'

const route = useRoute()
const router = useRouter()
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

const concListData: Ref<contactorList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 0,
  results: [],
})

onBeforeMount(async () => {
  productLisData.value = await getProductList([+route.query.id], 1)
  concListData.value = await getConcList(route.query.id)
})

const submitFilters = (val) => {
  console.log('parent', val)
}
const pageChange = async (page: number | string) => {
  router.push({
    path: `/product-category/${route.params.name}/${route.params.id}`,
    query: { page: page, id: route.query.id },
  })
  productLisData.value = await getProductList([+route.query.id], page)
}
</script>

<template>
  <div class="container px-2 lg: px-0">
    <FilterBox
      :is-show="isShowFilter"
      @closeBox="closeBox"
      @sendFilter="submitFilters"
    />
    <div class="my-4 mt-[100px] lg:mt-1">
      <span class="font-sm text-text-gray">خانه</span
      ><span class="mx-2 text-text-gray">></span
      ><span class="font-sm text-text-gray">{{ route.params.name }}</span>
      <span class="mx-2 text-text-gray">></span>
      <span>{{ route.params.id }}</span>
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
            <SwiperSlide v-for="slide in concListData.results" :key="slide">
              <NuxtLink
                :to="`/services/${route.params.name}/peymankar/${slide.id}`"
              >
                <div
                  class="relative w-[150px] h-[150px] lg:w-[100px] lg:h-[100px] rounded-[50%]"
                >
                  <img
                    :src="slide.user.avatar"
                    alt=""
                    class="rounded-[50%] object-contain w-[150px] h-[150px] lg:w-[100px] lg:h-[100px]"
                  />
                  <div
                    class="absolute w-[100%] h-[100%] flex-col top-0 left-0 bg-[#5B5B5B] rounded-[50%] flex justify-center items-center"
                  >
                    <p class="text-[10px] font-[dana-bold] text-white">
                      {{ slide.user.first_name }}
                    </p>
                    <p class="text-[10px] font-[dana-bold] text-white">
                      {{ slide.user.last_name }}
                    </p>
                    <p class="flex text-primary items-center mt-1">
                      <span class="text-xs ml-1"
                        >امتیاز {{ slide.aggregate_rate }}/5</span
                      >
                      <img :src="starIcon" alt="" class="w-[16px]" />
                    </p>
                  </div>
                </div>
              </NuxtLink>
            </SwiperSlide>
          </Swiper>
          <div class="text-center">
            <div class="custom-pagination !w-auto mt-5" self-center></div>
          </div>
        </div>
        <div class="border border-sec-gray rounded p-4 mt-5 hidden lg:block">
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
          <Icon name="material-symbols:filter-alt-outline-sharp" />
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
        <div v-if="productLisData.count">
          <Pagination
            :count="productLisData.count"
            :total_pages="productLisData.total_pages"
            :next="productLisData.next"
            :previous="productLisData.previous"
            :current_page="productLisData.current_page"
            @pageChange="pageChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>
