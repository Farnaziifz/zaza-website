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
import { type categoryList } from '@/core/types/category.type'
import { type blogList } from '@/core/types/blog.type'

const categoryData: Ref<categoryList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})

const blogData: Ref<blogList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})

onBeforeMount(async () => {
  categoryData.value = await getCategoryList()
  blogData.value = await getBlogList()
})
</script>

<template>
  <div class="mt-14">
    <HereSection :category="categoryData.results" />
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

    <SpecialProductSection class="mt-14" />
    <BlogSection class="mt-14" :blog="blogData.results.slice(0, 3)" />
    <BrandSection class="mt-14" />
  </div>
</template>
