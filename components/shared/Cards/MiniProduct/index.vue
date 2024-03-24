<script lang="ts" setup>
import temp2 from '@/assets/images/temp/2.png'

type productProps = {
  name: string
  discount: boolean
  price: number
  priceAfterDiscount: number
  img: string
}

const props = defineProps<productProps>()
</script>

<template>
  <div class="w-full flex items-center justify-start">
    <img :src="props.img" alt="" />
    <div class="flex flex-col">
      <p class="text-[#4E4E4E] font-[dana-extra] text-[20px] text-right mb-3">
        {{ props.name }}
      </p>
      <div class="flex">
        <p
          class="font-[dana-extra] text-md text-[#105100]"
          :class="{ 'has-discount text-[#CCCCCC]': discount }"
        >
          {{ props.price }} ریال
        </p>
        <p
          class="font-[dana-extra] text-md text-[#105100] mr-5"
          v-if="props.discount"
        >
          {{ props.priceAfterDiscount }} ریال
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
