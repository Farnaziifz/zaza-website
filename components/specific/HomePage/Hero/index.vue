<script setup lang="ts">
import man1 from '@/assets/images/man/man-1.png'
import DropDown from '@/components/shared/DropDown/index.vue'
import { type categoryType } from '@/core/types/category.type'
import { useRouter } from 'vue-router'

const router = useRouter()

type cat = {
  id: number
  label: string
}

type HeroProps = {
  category: categoryType[]
}

const props = defineProps<HeroProps>()

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
}
</script>

<template>
  <div class="">
    <div class="container">
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div class="lg:col-span-2 flex flex-col justify-center">
          <div class="flex flex-col w-full items-center lg:justify-items-start">
            <img
              :src="man1"
              alt="hero-image"
              class="lg:hidden block mt-10 w-64 center-img"
            />
            <h1
              class="font-[dana-extra] lg:text-[42px] text-[20px] leading-[70px] px-4 text-center lg:text-justify"
            >
              از فروش محصولات تا نصب و راه‌اندازی و انتخاب متخصص مناسب شما دست
              دوستی میدهیم.
            </h1>
            <div class="w-full" v-if="props.category.length">
              <p
                class="font-[dana-bold] text-[32px] mt-20 text-[#807F7F] lg:block hidden text-center lg:text-right w-full"
              >
                دنبال چه محصولی میگردید؟
              </p>
              <div class="grid grid-cols-3 gap-4 mt-7 lg:grid hidden w-full">
                <DropDown
                  title="انتخاب دسته‌بندی اصلی"
                  :options="categoryMain"
                  @optionSelected="optionMainSelected"
                />
                <DropDown
                  title="انتخاب دسته‌بندی دوم"
                  :options="subCat"
                  @optionSelected="subSelected"
                />
                <button
                  class="focus:outline-none bg-primary rounded px-4 py-3"
                  @click="submitSearch"
                >
                  انتخاب
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img :src="man1" alt="hero-image" class="lg:block hidden" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-primary h-14 hidden lg:block"></div>
  </div>
</template>

<style lang="scss" scoped>
.center-img {
  margin: 20px auto;
}
</style>
