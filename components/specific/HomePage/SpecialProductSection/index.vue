<script lang="ts" setup>
import MiniProductCard from '@/components/shared/Cards/MiniProduct/index.vue'
import { type promoted } from '~/core/types/product.type'
type productProps = {
  product: promoted
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
          v-for="pr in props.product.bestsellings"
          :key="pr.title"
          :name="pr.title"
          :price="pr.first_price.price"
          :img="pr.thumbnail"
          :discount="pr.first_price.off_percent ? true : false"
          :priceAfterDiscount="pr.first_price.off_price"
        />
        <NuxtLink :to="`/product`">
          <p>مشاهده همه</p>
        </NuxtLink>
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
          v-for="pr in props.product.sales"
          :key="pr.title"
          :name="pr.title"
          :price="pr.first_price.price"
          :img="pr.thumbnail"
          :discount="pr.first_price.off_percent ? true : false"
          :priceAfterDiscount="pr.first_price.off_price"
        />
        <NuxtLink :to="`/product`">
          <p>مشاهده همه</p>
        </NuxtLink>
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
          v-for="pr in props.product.specials"
          :key="pr.title"
          :name="pr.title"
          :price="pr.first_price.price"
          :img="pr.thumbnail"
          :discount="pr.first_price.off_percent ? true : false"
          :priceAfterDiscount="pr.first_price.off_price"
        />
        <NuxtLink :to="`/product`">
          <p>مشاهده همه</p>
        </NuxtLink>
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
