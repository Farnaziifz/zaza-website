<script setup lang="ts">
import { type brandItem, type productList } from '~/core/types/product.type'
import {
  brandItemGet,
  getProductList,
} from '@/logics/specifics/product.handler'
import { onBeforeMount } from 'vue'

import ProductCard from '@/components/shared/Cards/ProductCard/index.vue'
import { useRoute, useRouter } from 'vue-router'
import Pagination from '@/components/shared/pagination/index.vue'

const router = useRouter()

const route = useRoute()

const brandData: Ref<brandItem> = ref({
  id: 0,
  created_at: '',
  updated_at: '',
  title: '',
  description: '',
  image: '',
  seo_title: '',
  seo_description: '',
})

const productData: Ref<productList> = ref({
  count: 0,
  total_pages: 0,
  next: '',
  previous: '',
  current_page: 0,
  results: [],
})

onBeforeMount(async () => {
  brandData.value = await brandItemGet(route.params.id)
  productData.value = await getProductList([], 1, route.params.id)
})

const pageChange = async (page: number | string) => {
  router.push({ path: '/brands', query: { page: page } })
  brandData.value = await getProductList([], 1, route.params.id)
}
</script>

<template>
  <div class="container mt-20">
    <img :src="brandData.image" alt="" class="w-[300px] h-200px" />
    <h1 class="mt-4">{{ brandData.title }}</h1>
    <p class="mt-4">{{ brandData.description }}</p>

    <div class="mt-10">
      <h3 class="mb-4">لیست محصولات مرتبط</h3>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <template v-for="item in productData.results">
          <ProductCard
            :has-border="true"
            v-if="item.seo_slug && item.id"
            :key="item.id"
            :productData="item"
          />
        </template>
      </div>
      <div v-if="productData.count" class="mt-10">
        <Pagination
          :count="productData.count"
          :total_pages="productData.total_pages"
          :next="productData.next"
          :previous="productData.previous"
          :current_page="productData.current_page"
          @pageChange="pageChange"
        />
      </div>
    </div>
  </div>
</template>
