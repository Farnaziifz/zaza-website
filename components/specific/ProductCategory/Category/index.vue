<script lang="ts" setup>
import ProductCategoryCard from '@/components/shared/Cards/ProductCategoryLVL1Card/index.vue'
import { type categoryType } from '~/core/types/category.type'

type categoryProps = {
  catItems: categoryType[]
}

const props = defineProps<categoryProps>()

console.log('salam', props.catItems)
</script>

<template>
  <div class="w-full">
    <ProductCategoryCard
      v-for="(cat, index) in props.catItems"
      :key="cat.id"
      :is-left="index % 2 ? true : false"
      :cat-data="cat"
    />
  </div>
</template>
