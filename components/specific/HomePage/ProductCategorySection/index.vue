<script setup lang="ts">
import ProductCategoryCards from '@/components/shared/Cards/ProductCategory/index.vue'
import { type categoryType } from '@/core/types/category.type'

type categoryProps = {
  category: categoryType[]
}
const props = defineProps<categoryProps>()
</script>

<template>
  <div class="container">
    <h2 class="font-[dana-medium] text-[42px] text-center">
      دسته بندی‌های ویژه
    </h2>
    <div
      class="grid lg:grid-cols-3 gap-x-16 gap-y-4 mt-5 lg:px-0 px-2"
      v-if="props.category.length"
    >
      <template v-for="cat in props.category">
        <ProductCategoryCards
          :key="cat.id"
          v-if="cat.is_special"
          :category="cat"
        />
      </template>
    </div>
  </div>
</template>
