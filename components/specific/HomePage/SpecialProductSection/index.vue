<script lang="ts" setup>
import MiniProductCard from '@/components/shared/Cards/MiniProduct/index.vue'
import temp2 from '@/assets/images/temp/2.png'
import { type productItem } from '~/core/types/product.type'
type productProps = {
  product: productItem
}

const props = defineProps<productProps>()

</script>

<template>
  <div class="container grid lg:grid-cols-3 grid-cols-1 gap-4 gap-y-20">
    <div>
      <h3
        class="head-title font-[dana-extra] lg:text-[32px] w-full lg:bg-white bg-primary lg:text-right text-center py-4 text-lg"
      >
        بیشترین فروش
      </h3>
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
      <h3
        class="head-title font-[dana-extra] lg:text-[32px] w-full lg:bg-white bg-primary lg:text-right text-center py-4 text-lg"
      >
        حراج واقعی
      </h3>
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
      <h3
        class="head-title font-[dana-extra] lg:text-[32px] w-full lg:bg-white bg-primary lg:text-right text-center py-4 text-lg"
      >
        قیمت اقتصادی
      </h3>
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

    background-color: #fcba2e;
    bottom: -8px;
    @media screen and (min-width: 1024px) {
      height: 3px;
      width: 80px;
    }
  }
}
</style>
