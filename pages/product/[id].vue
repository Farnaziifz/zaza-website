<script setup lang="ts">
import ProductHero from '@/components/specific/Product/hero/index.vue'
import WonderBox from '@/components/shared/WonderBox/index.vue'
import DescBox from '@/components/specific/Product/Description/index.vue'
import CommentBox from '@/components/specific/Product/Comment/index.vue'
import Specifications from '@/components/specific/Product/Specifications/index.vue'
</script>
<template>
  <div class="container">
    <div class="my-4 mt-[100px] lg:mt-10">
      <span class="font-sm text-text-gray">خانه</span
      ><span class="mx-2 text-text-gray">></span
      ><span class="font-sm text-text-gray">استخر و لوله کشی</span>
      <span class="mx-2 text-text-gray">></span>
      <span class="font-sm text-text-gray">استخر و لوله کشی</span>
      <span class="mx-2 text-text-gray">></span>
      <span>اسم محصول</span>
    </div>
    <ProductHero />
    <Specifications class="mt-10" />
    <WonderBox class="mt-14" />
    <DescBox class="mt-10" />
    <CommentBox class="mt-10" />
  </div>
</template>
