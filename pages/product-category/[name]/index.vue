<script lang="ts" setup>
import BannerLVL1 from '@/components/specific/ProductCategory/BannerLVL1/index.vue'
import Contractor from '@/components/specific/ProductCategory/Contractor/index.vue'
import Category from '@/components/specific/ProductCategory/Category/index.vue'
import WonderBox from '@/components/shared/WonderBox/index.vue'
</script>

<template>
  <div class="container my-[100px] lg:my-[20px]">
    <div class="my-4">
      <span class="font-sm text-text-gray">خانه</span
      ><span class="mx-2 text-text-gray">></span><span>استخر و لوله کشی</span>
    </div>
    <div class="bg-primary rounded p-2 px-4 md:px-0">
      <BannerLVL1 class="h-full" />
    </div>
    <WonderBox class="mt-14" />
    <Contractor />
  </div>
  <div>
    <Category />
  </div>
</template>
