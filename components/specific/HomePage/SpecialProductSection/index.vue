<script lang="ts" setup>
import MiniProductCard from '@/components/shared/Cards/MiniProduct/index.vue'
import temp2 from '@/assets/images/temp/2.png'
</script>

<template>
  <div class="container grid grid-cols-3 gap-4">
    <div>
      <h3 class="head-title font-[dana-extra] text-[32px]">بیشترین فروش</h3>
      <div class="mt-10 flex flex-col gap-y-6">
        <MiniProductCard
          name="صفحه اهنبر مینی"
          :price="120000"
          :img="temp2"
          :discount="false"
        />
        <MiniProductCard
          name="صفحه اهنبر مینی"
          :price="120000"
          :img="temp2"
          :discount="false"
        />
        <MiniProductCard
          name="صفحه اهنبر مینی"
          :price="120000"
          :img="temp2"
          :discount="false"
        />
      </div>
    </div>
    <div>
      <h3 class="head-title font-[dana-extra] text-[32px]">حراج واقعی</h3>
      <div class="mt-10 flex flex-col gap-y-6">
        <MiniProductCard
          name="صفحه اهنبر مینی"
          :price="120000"
          :img="temp2"
          :price-after-discount="90000"
          :discount="true"
        />
        <MiniProductCard
          name="صفحه اهنبر مینی"
          :price="120000"
          :img="temp2"
          :price-after-discount="90000"
          :discount="true"
        />
        <MiniProductCard
          name="صفحه اهنبر مینی"
          :price="120000"
          :img="temp2"
          :discount="true"
          :price-after-discount="90000"
        />
      </div>
    </div>
    <div>
      <h3 class="head-title font-[dana-extra] text-[32px]">قیمت اقتصادی</h3>
      <div class="mt-10 flex flex-col gap-y-6">
        <MiniProductCard
          name="صفحه اهنبر مینی"
          :price="120000"
          :img="temp2"
          :discount="false"
        />
        <MiniProductCard
          name="صفحه اهنبر مینی"
          :price="120000"
          :img="temp2"
          :discount="false"
        />
        <MiniProductCard
          name="صفحه اهنبر مینی"
          :price="120000"
          :img="temp2"
          :discount="false"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.head-title {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 3px;
    width: 80px;
    background-color: #fcba2e;
    bottom: -8px;
  }
}
</style>
