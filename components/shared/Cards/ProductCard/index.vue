<script lang="ts" setup>
import temp5 from '@/assets/images/temp/5.png'
type productCardProps = {
  hasDiscount: boolean
  hasBorder: boolean
}

const props = defineProps<productCardProps>()
</script>

<template>
  <div
    class="w-full bg-white rounded p-4 cursor-pointer"
    :class="{ 'border border-sec-gray': hasBorder }"
  >
    <img :src="temp5" alt="" class="mb-5 m-auto" />
    <p class="mb-5 text-center text-sm font-[dana-medium]">
       سیم چین 6 اینچ میکا Mika
    </p>
    <div class="flex items-center justify-between">
      <div>
        <span class="bg-[#B80000] p-1 rounded-lg text-white text-sm">22%</span>
      </div>
      <div>
        <p
          class="font-[dana-extra] text-xs text-[#105100] text-left"
          :class="{ 'has-discount text-[#CCCCCC]': hasDiscount }"
        >
          20/0000 ریال
        </p>
        <p
          class="font-[dana-extra] text-sm text-[#105100] mr-5"
          v-if="props.hasDiscount"
        >
          11/000 ریال
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
    width: 90%;
    height: 2px;
    background-color: #ccc;
  }
}
</style>
