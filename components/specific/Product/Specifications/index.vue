<script setup lang="ts">
import { type productItem } from '~/core/types/product.type'
type specProps = {
  data: productItem
}
const props = defineProps<specProps>()
</script>

<template>
  <div class="grid lg:grid-cols-3 lg:gap-4 gap-y-4 grid-cols-1 px-4 lg:px-0">
    <div class="col-span-2 rounded border border-sec-gray p-4">
      <div class="font-[dana-bold] text-[20px]">مشخصات</div>
      <div
        class="mt-5 grid grid-cols-6 gap-4 flex items-center"
        v-for="item in props.data?.product_property"
      >
        <div class="col-span-2 text-sm lg:text-md">
          {{ item.title.title }}
        </div>
        <div
          class="py-2 border-b border-sec-gray w-full col-span-4 font-[dana-demi] text-sm lg:text-md"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
    <div class="rounded border border-sec-gray p-4">
      <div>
        <div class="font-[dana-bold] text-[18px]">برچسب:</div>
        <p class="mt-10 text-sm font-[dana-light] text-justify text-text-gray">
          <span v-for="item in props.data.tag">{{ item.title }}</span>
        </p>
      </div>

      <div class="mt-4">
        <div class="font-[dana-bold] text-180px]">دسته:</div>
        <p class="text-sm font-[dana-light text-justify text-text-gray">
          <span v-for="item in props.data.category">{{ item.title_main }}</span>
        </p>
      </div>
      <div class="mt-4">
        <div class="font-[dana-bold] text-18px]">اشتراک گذاری:</div>
      </div>
    </div>
  </div>
</template>
