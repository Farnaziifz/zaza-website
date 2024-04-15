<script setup lang="ts">
import icon1 from '@/assets/images/temp/1.png'
import { type categoryType } from '@/core/types/category.type'

type categoryCardType = {
  category: categoryType
}

const props = defineProps<categoryCardType>()
console.log(props.category?.thumbnail_main)
</script>

<template>
  <div class="w-full rounded border border-sec-gray p-4 grid grid-cols-3 gap-4">
    <div class="flex flex-col col-span-2">
      <p class="font-[dana-medium] text-md">
        {{ props.category?.title_product }}
      </p>
      <div>
        <p class="font-[dana-light] text-sm text-text-gray mb-1">
          تجهیزات استخر و سونا و جکوزی
        </p>

        <div>
          <p class="font-[dana-medium] text-md mt-3">خرید کن</p>
        </div>
      </div>
    </div>
    <img
      :src="props.category?.thumbnail_main"
      :alt="props.category?.title_product"
      class="w-[110px] h-[110px] rounded-[50%] object-cover"
    />
  </div>
</template>
