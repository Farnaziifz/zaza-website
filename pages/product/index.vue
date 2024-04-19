<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import ProductCard from '@/components/shared/Cards/ProductCard/index.vue'
import CollapsibleCard from '@/components/shared/CollapsibelCard/index.vue'
import FilterBox from '@/components/specific/ProductCategory/FilterBox/index.vue'
import { getProductList } from '@/logics/specifics/product.handler'
import { type productList } from '~/core/types/product.type'
import { useRoute } from 'vue-router'

const route = useRoute()
const isShowFilter = ref(false)

const openFilterBox = () => {
  isShowFilter.value = true
}
const closeBox = () => {
  isShowFilter.value = false
}
const productLisData: Ref<productList> = ref({
  count: 0,
  total_pages: 0,
  next: '',
  previous: '',
  current_page: 0,
  results: [],
})

onBeforeMount(async () => {
  productLisData.value = await getProductList(
    [],
    1,
    null,
    route.query.type === 'sales' ? true : false,
    route.query.type === 'best' ? true : false
  )
})
watch(
  () => route.query.type,
  async () => {
    productLisData.value = await getProductList(
      [],
      1,
      null,
      route.query.type === 'sales' ? true : false,
      route.query.type === 'best' ? true : false
    )
  }
)
const submitFilters = (val) => {
  console.log('parent', val)
}
</script>

<template>
  <div class="container px-2 lg: px-0">
    <FilterBox
      :is-show="isShowFilter"
      @closeBox="closeBox"
      @sendFilter="submitFilters"
    />
    <div class="my-4 mt-[100px] lg:mt-1"></div>
    <div class="grid lg:grid-cols-4 grid-cols-1 gap-4">
      <div class="w-full">
        <div class="border border-sec-gray rounded p-4 mt-5 hidden lg:block">
          <CollapsibleCard title="فیلتر بر اساس برند">
            <div
              class="flex items-center justify-between cursor-pointer px-4 mb-3"
            >
              <label for="name1">ایران</label>
              <input type="checkbox" id="name1" class="borde-none w-4 h-4" />
            </div>
            <div
              class="flex items-center justify-between cursor-pointer px-4 mb-3"
            >
              <label for="name2">ایران</label>
              <input type="checkbox" id="name2" class="borde-none w-4 h-4" />
            </div>
            <div
              class="flex items-center justify-between cursor-pointer px-4 mb-3"
            >
              <label for="name3">ایران</label>
              <input type="checkbox" id="name3" class="borde-none w-4 h-4" />
            </div>
          </CollapsibleCard>
          <CollapsibleCard title="فیلتر بر اساس برند محصول">
            <div
              class="flex items-center justify-between cursor-pointer px-4 mb-3"
            >
              <label for="name1">ایران</label>
              <input type="checkbox" id="name1" class="borde-none w-4 h-4" />
            </div>
            <div
              class="flex items-center justify-between cursor-pointer px-4 mb-3"
            >
              <label for="name2">ایران</label>
              <input type="checkbox" id="name2" class="borde-none w-4 h-4" />
            </div>
            <div
              class="flex items-center justify-between cursor-pointer px-4 mb-3"
            >
              <label for="name3">ایران</label>
              <input type="checkbox" id="name3" class="borde-none w-4 h-4" />
            </div>
          </CollapsibleCard>
        </div>
        <div
          class="border border-sec-gray rounded p-4 mt-5 block lg:hidden flex items-center justify-between cursor-pointer"
          @click="openFilterBox"
        >
          <p>اعمال فیلتر</p>
          <Icon name="material-symbols:filter-alt-outline-sharp" />
        </div>
      </div>
      <div class="lg:col-span-3 col-span-1 w-full">
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
          <template v-for="item in productLisData.results">
            <ProductCard
              :has-border="true"
              v-if="item.seo_slug && item.id"
              :key="item.id"
              :productData="item"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
