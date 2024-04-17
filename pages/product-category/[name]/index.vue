<script lang="ts" setup>
import BannerLVL1 from '@/components/specific/ProductCategory/BannerLVL1/index.vue'
import Contractor from '@/components/specific/ProductCategory/Contractor/index.vue'
import Category from '@/components/specific/ProductCategory/Category/index.vue'
import WonderBox from '@/components/shared/WonderBox/index.vue'

import { type categoryType } from '~/core/types/category.type'
import { getCategoryDetails } from '~/logics/specifics/category.handler'
import { useRoute } from 'vue-router'

const route = useRoute()
const categoryDetails: Ref<categoryType> = ref({
  id: 0,
  created_at: '',
  updated_at: '',
  short_description_main: '',
  title_main: '',
  thumbnail_main: '',
  title_blog: '',
  title_product: '',
  title_service: '',
  is_special: false,
  seo_slug: '',
  seo_title: '',
  seo_description: '',
  creator: '',
  banner_main: [],
  children: [],
})

onBeforeMount(async () => {
  categoryDetails.value = await getCategoryDetails(route.query?.id)
})
</script>

<template>
  <div class="container my-[100px] lg:my-[20px]">
    <div class="my-4">
      <span class="font-sm text-text-gray">خانه</span
      ><span class="mx-2 text-text-gray">></span
      ><span>
        {{ categoryDetails.title_product }}
      </span>
    </div>
    <div class="rounded p-2 px-4 md:px-0">
      <BannerLVL1 class="h-full" :bannerData="categoryDetails.banner_main" />
    </div>
    <WonderBox class="mt-14" />
    <Contractor />
  </div>
  <div>
    <Category
      :catItems="categoryDetails.children"
      v-if="categoryDetails?.children"
    />
  </div>
</template>
