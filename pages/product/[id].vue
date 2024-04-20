<script setup lang="ts">
import ProductHero from '@/components/specific/Product/hero/index.vue'
import WonderBox from '@/components/shared/WonderBox/index.vue'
import DescBox from '@/components/specific/Product/Description/index.vue'
import CommentBox from '@/components/specific/Product/Comment/index.vue'
import Specifications from '@/components/specific/Product/Specifications/index.vue'
import { type productItem, type productList } from '~/core/types/product.type'
import {
  getProductData,
  getProductList,
} from '@/logics/specifics/product.handler'
import { useRoute } from 'vue-router'
const route = useRoute()
const productData: Ref<productItem> = ref({
  id: 0,
  aggregate_rate: 0,
  created_at: '',
  updated_at: '',
  title: '',
  short_description: '',
  description: '',
  thumbnail: '',
  length: 0,
  width: 0,
  height: 0,
  weight: 0,
  is_special: false,
  is_bestselling: false,
  seo_slug: '',
  seo_title: '',
  seo_description: '',
  creator: {},
  brand: {},
  price: [],
  category: [],
  tag: [],
  gallery: [],
  property: [],
  first_price: {},
})
const productListData: Ref<productList> = ref({
  count: 0,
  total_pages: 0,
  next: '',
  previous: '',
  current_page: 0,
  results: [],
})

onBeforeMount(async () => {
  productData.value = await getProductData(route.query.id)

  productListData.value = await getProductList(
    [productData.value.category[0].id],
    1,
    null,
    true,
    false
  )
  console.log(productListData)
})
</script>
<template>
  <div class="container">
    <div class="my-4 mt-[100px] lg:mt-10 overflow-scroll">
      <span class="lg:text-sm text-text-gray text-xs">خانه</span
      ><span class="mx-2 text-text-gray lg:text-sm text-xs">></span>
      <!-- <span class="lg:text-sm text-text-gray text-xs">استخر و لوله کشی</span>
      <span class="mx-2 text-text-gray text-sm text-xs">></span> -->
      <span class="text-sm text-text-gray text-xs">{{
        productData.category[0]?.title_product
      }}</span>
      <span class="mx-2 text-text-gray text-xs">></span>
      <span>{{ productData.title }}</span>
    </div>
    <ProductHero
      :product-data="productData"
      v-if="productData.first_price.price"
    />
    <Specifications class="mt-10" :data="productData" />
    <WonderBox
      class="mt-14"
      :title="route.params.id"
      :data="productListData.results"
    />
    <DescBox class="mt-10" :desc="productData.description" />
    <CommentBox class="mt-10" />
  </div>
</template>
