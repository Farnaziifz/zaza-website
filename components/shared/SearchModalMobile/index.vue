<script setup lang="ts">
import DropDown from '@/components/shared/DropDown/index.vue'
import { type categoryType } from '@/core/types/category.type'
import { useRouter } from 'vue-router'

const router = useRouter()
type modalProps = {
  isOpen: boolean
  category: categoryType[]
}

type cat = {
  id: number
  label: string
}

const categoryMain: Ref<cat[]> = ref([])
const subCat: Ref<cat[]> = ref([])
const catMainValue: Ref<cat> = ref({
  id: 0,
  label: '',
})
const catSubValue: Ref<cat> = ref({
  id: 0,
  label: '',
})

const props = defineProps<modalProps>()

const emits = defineEmits(['update:isOpen'])

const closeModal = () => {
  emits('update:isOpen', false)
}

onBeforeMount(async () => {
  props.category.forEach((el) => {
    if (el.children?.length) {
      categoryMain.value.push({ id: +el.id, label: el.title_product })
    }
  })
})

const optionMainSelected = (val: cat) => {
  const temp = props.category.filter((el) => el.id === val.id)
  subCat.value.length = 0
  temp[0].children.forEach((el) => {
    subCat.value.push({ id: +el.id, label: el.title_product })
  })
  catMainValue.value = val
}

const subSelected = (val: cat) => {
  catSubValue.value = val
}

const submitSearch = () => {
  router.push(
    `/product-category/${catMainValue.value.label}/${catSubValue.value.label}?id=${catSubValue.value.id}`
  )
  emits('update:isOpen', false)
}
</script>

<template>
  <div
    class="h-screen w-full bg-white fixed top-0 left-0 inset-0"
    v-if="props.isOpen"
  >
    <div class="flex justify-end items-center mb-4 mt-5">
      <button @click="closeModal" class="focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <div class="w-full">
      <p
        class="font-[dana-bold] text-[32px] mt-20 text-[#807F7F] text-center lg:text-right w-full"
      >
        دنبال چه محصولی میگردید؟
      </p>
      <div class="mt-7 w-full">
        <div class="px-4 mb-5">
          <DropDown
            title="انتخاب دسته‌بندی اصلی"
            :options="categoryMain"
            @optionSelected="optionMainSelected"
          />
        </div>
        <div class="px-4 mb-5">
          <DropDown
            title="انتخاب دسته‌بندی دوم"
            :options="subCat"
            @optionSelected="subSelected"
            v-if="catMainValue.label"
          />
        </div>
        <div class="px-4">
          <button
            class="focus:outline-none bg-primary rounded px-4 py-3 w-full"
            @click="submitSearch"
          >
            انتخاب
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
