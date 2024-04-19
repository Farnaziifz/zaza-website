<script setup lang="ts">
import CollapsibleCard from '@/components/shared/CollapsibelCard/index.vue'
import { type brandList } from '~/core/types/product.type'
import { getBrandList } from '~/logics/specifics/product.handler'
import _ from 'lodash'
const emits = defineEmits(['closeBox', 'sendFilter'])

type filterBoxProps = {
  isShow: boolean
}

const props = defineProps<filterBoxProps>()
const closeFilter = () => {
  emits('closeBox', false)
}

const brandData: Ref<brandList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})
const filters = {
  brands: [],
  price: { from: '', to: '' },
}
onBeforeMount(async () => {
  brandData.value = await getBrandList()
})

const addFilter = (id: string | number) => {
  if (filters.brands.find((el) => el === id)) console.log('salam')
  else filters.brands.push(id)
}

const submitFilters = () => {
  emits('sendFilter', filters)
}
</script>
<template>
  <div
    class="h-screen w-full bg-white fixed top-0 z-[100] p-10 transition-open"
    :class="props.isShow ? 'right-0' : 'right-[-100%]'"
  >
    <div class="flex justify-end mb-10" @click="closeFilter">
      <Icon name="material-symbols-light:close-rounded" />
    </div>

    <CollapsibleCard title="فیلتر بر اساس برند محصول">
      <div
        class="flex items-center justify-between cursor-pointer px-4 mb-3"
        v-for="item in brandData.results"
        :key="item.id"
      >
        <label :for="_.toString(item.id)">{{ item.title }}</label>
        <input
          type="checkbox"
          :id="_.toString(item.id)"
          class="borde-none w-4 h-4"
          @change="addFilter(item.id)"
        />
      </div>
    </CollapsibleCard>
    <div class="mt-10">
      <p>فیلتر بر اساس قیمت:</p>
      <div class="flex mt-5">
        <span>از</span><input class="price" type="number" /><span>تا</span
        ><input class="price" type="number" /><span>ریال</span>
      </div>
    </div>
    <button
      class="bg-primary w-full absolute bottom-5 centeri py-5"
      @click="submitFilters"
    >
      اعمال فیلتر
    </button>
  </div>
</template>

<style lang="scss" scoped>
.transition-open {
  transition: all 0.5s;
}
.centeri {
  left: 50%;
  transform: translateX(-50%);
}
.price {
  width: 100%;
  border-bottom: 2px solid #fcba2e;
  margin: 0 4px;
  &:focus {
    outline: none;
  }
}
</style>
