<script lang="ts" setup>
import { getCategoryList } from '@/logics/specifics/category.handler'
import { type categoryList } from '@/core/types/category.type'
import ProductCategory from '@/components/shared/Cards/ProductCategory/index.vue'
const categoryData: Ref<categoryList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})

onBeforeMount(async () => {
  categoryData.value = await getCategoryList()
})

console.log(categoryData.value)
</script>

<template>
  <div class="mt-20" v-if="categoryData.results?.length">
    <div class="container">
      <div class="lg:grid lg:grid-cols-3 lg:gap-4">
        <template v-for="item in categoryData?.results">
          <ProductCategory
            :category="item"
            class="mb-4"
            v-if="item.children?.length"
          />
        </template>
      </div>
    </div>
  </div>
</template>
