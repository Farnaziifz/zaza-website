<script lang="ts" setup>
import temp5 from '@/assets/images/temp/5.png'
import type { productItem } from '~/core/types/product.type'
import { toPersianCurrency } from '@/logics/shared/toPersianCurrency'

type productCardProps = {
  hasBorder: boolean
  productData: productItem
}

const props = defineProps<productCardProps>()
</script>

<template>
  <NuxtLink
    :to="`/product/${props.productData?.seo_slug}?id=${props.productData?.id}`"
  >
    <div
      class="w-full bg-white rounded p-4 cursor-pointer"
      :class="{ 'border border-sec-gray': hasBorder }"
      v-if="props.productData"
    >
      <img :src="temp5" alt="" class="mb-5 m-auto" />
      <p class="mb-5 text-center text-sm font-[dana-medium]">
        {{ props.productData.title }}
      </p>
      <div class="flex items-center justify-between">
        <div v-if="props.productData.first_price?.off_price">
          <span class="bg-[#B80000] p-1 rounded-lg text-white text-sm"
            >{{ props.productData.first_price?.off_percent }}%</span
          >
        </div>
        <div>
          <p
            class="font-[dana-extra] text-xs text-[#105100] text-left"
            :class="{
              'has-discount text-[#CCCCCC]':
                props.productData.first_price?.off_price,
            }"
          >
            {{ toPersianCurrency(props.productData.first_price?.price) }}
          </p>
          <p
            class="font-[dana-extra] text-sm text-[#105100] mr-5"
            v-if="props.productData.first_price?.off_price"
          >
            {{ toPersianCurrency(props.productData.first_price?.off_price) }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.has-discount {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: rotate(-10deg);
    width: 90%;
    height: 2px;
    background-color: #ccc;
  }
}
</style>
