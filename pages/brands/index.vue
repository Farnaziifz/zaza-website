<script setup lang="ts">
import { ref } from 'vue'
import { type brandList } from '@/core/types/product.type'

import { getBrandList } from '@/logics/specifics/product.handler'

const brandData: Ref<brandList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})

onBeforeMount(async () => {
  brandData.value = await getBrandList()
})
</script>

<template>
  <div class="container mt-10">
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="item in brandData.results"
        class="border border-sec-gray rounded p-4 mb-4"
      >
        <NuxtLink :to="`/brands/${item.id}?page=1`">
          <img
            :src="item.image"
            alt=""
            class="w-full h-[150px] object-contain"
          />
          <p class="mt-4 text-center">{{ item.title }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
