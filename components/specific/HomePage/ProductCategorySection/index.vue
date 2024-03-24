<script setup lang="ts">
import ProductCategoryCards from '@/components/shared/Cards/ProductCategory/index.vue'
</script>

<template>
  <div class="container">
    <h2 class="font-[dana-medium] text-[42px] text-center">
      دسته بندی‌های ویژه
    </h2>
    <div class="grid lg:grid-cols-3 gap-x-16 gap-y-4 mt-5 lg:px-0 px-2">
      <ProductCategoryCards />
      <ProductCategoryCards />
      <ProductCategoryCards />
      <ProductCategoryCards />
      <ProductCategoryCards />
      <ProductCategoryCards />
    </div>
  </div>
</template>
