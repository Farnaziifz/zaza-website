<script setup lang="ts">
import { onBeforeMount } from 'vue'

import SharedCardsZazaFeature from '@/components/specific/HomePage/Features/index.vue'
import HereSection from '@/components/specific/HomePage/Hero/index.vue'
import ProductCategorySection from '@/components/specific/HomePage/ProductCategorySection/index.vue'
import ContactorSection from '@/components/specific/HomePage/ContractorSection/index.vue'
import SpecialProductSection from '@/components/specific/HomePage/SpecialProductSection/index.vue'
import BlogSection from '@/components/specific/HomePage/BlogSection/index.vue'
import BrandSection from '@/components/specific/HomePage/BrandSection/index.vue'

import { getCategoryList } from '@/logics/specifics/category.handler'
import { getBlogList } from '@/logics/specifics/blog.handler'
import {
  getBrandList,
  getProductList,
  getPromoteProduct,
} from '@/logics/specifics/product.handler'
import { type categoryList } from '@/core/types/category.type'
import { type blogList } from '@/core/types/blog.type'
import {
  type brandList,
  type productList,
  type promoted,
} from '@/core/types/product.type'

const categoryData: Ref<categoryList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})

const promotedProduct: Ref<promoted> = ref({
  specials: [],
  bestsellings: [],
  sales: [],
})

const blogData: Ref<blogList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})

const brandData: Ref<brandList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})


onBeforeMount(async () => {
  categoryData.value = await getCategoryList()
  blogData.value = await getBlogList([], 1)
  brandData.value = await getBrandList()
  promotedProduct.value = await getPromoteProduct()
})
</script>

<template>
  <div class="mt-14">
    <HereSection
      :category="categoryData.results"
      v-if="categoryData.results.length"
    />
    <SharedCardsZazaFeature class="mt-14" />
    <ProductCategorySection
      class="mt-14 hidden lg:block"
      :category="categoryData.results"
    />
    <ContactorSection class="mt-14" />
    <ProductCategorySection
      class="mt-14 block lg:hidden"
      :category="categoryData.results"
    />

    <SpecialProductSection class="mt-14" :product="promotedProduct" />
    <BlogSection class="mt-14" :blog="blogData.results.slice(0, 3)" />
    <BrandSection class="mt-14" :brands="brandData" />
  </div>
</template>
