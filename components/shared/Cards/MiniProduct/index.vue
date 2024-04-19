<script lang="ts" setup>
import { toPersianCurrency } from '~/logics/shared/toPersianCurrency'

type productProps = {
  name: string
  discount: boolean
  price: number | string
  priceAfterDiscount: number | string
  img: string
}

const props = defineProps<productProps>()
</script>

<template>
  <div class="w-full flex items-center justify-start">
    <img :src="props.img" alt="" class="w-[100px] h-[100px] ml-4" />
    <div class="flex flex-col">
      <p class="text-[#4E4E4E] font-[dana-extra] text-[20px] text-right mb-3">
        {{ props.name }}
      </p>
      <div class="flex">
        <p
          class="font-[dana-extra] text-md text-[#105100]"
          :class="{ 'has-discount text-[#CCCCCC]': discount }"
        >
          {{ toPersianCurrency(props.price) }}
        </p>
        <p
          class="font-[dana-extra] text-md text-[#105100] mr-5"
          v-if="props.discount"
        >
          {{ props.priceAfterDiscount }}
        </p>
      </div>
    </div>
  </div>
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
    width: 100%;
    height: 2px;
    background-color: #ccc;
  }
}
</style>
