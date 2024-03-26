<script lang="ts" setup>
import ProductCategoryCard from '@/components/shared/Cards/ProductCategoryLVL1Card/index.vue'
</script>

<template>
  <div class="w-full">
    <ProductCategoryCard :is-left="true" />
    <ProductCategoryCard :is-left="false" />
  </div>
</template>
