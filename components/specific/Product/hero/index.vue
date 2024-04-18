<script setup lang="ts">
import temp8 from '@/assets/images/temp/8.png'
import temp9 from '@/assets/images/temp/9.png'
import temp10 from '@/assets/images/temp/10.png'
import approvalIcon from '@/assets/images/icons/Approval.png'
import ExerciseIcon from '@/assets/images/icons/Exercise.png'
import StallIcon from '@/assets/images/icons/Stall.png'
import man4 from '@/assets/images/man/man-4.png'
import type { productItem } from '~/core/types/product.type'
import { toPersianCurrency } from '~/logics/shared/toPersianCurrency'
import DropDown from '@/components/shared/DropDown/index.vue'

type productProps = {
  productData: productItem
}

type cat = {
  id: number | string
  label: string
}

const props = defineProps<productProps>()

const pricesOption: Ref<cat[]> = ref([])
const first_price = ref({
  off_price: 0,
  off_percent: 0,
  price: 0,
})

onBeforeMount(() => {
  props.productData.price?.forEach((el) => {
    pricesOption.value.push({ id: el.id, label: el.title })
  })
  first_price.value.off_percent = props.productData.first_price.off_percent
  first_price.value.off_price = props.productData.first_price.off_price
  first_price.value.price = props.productData.first_price.price
})
console.log(pricesOption)
const optionSelected = (val: cat) => {}
</script>

<template>
  <div class="grid lg:grid-cols-3 gap-4 grid-cols-1">
    <div class="px-2 lg:px-0">
      <div class="w-full border-b border-sec-gray">
        <h1 class="font-[dana-demi] text-[18px] mb-2 block lg:hidden">
          {{ props.productData.title }}
        </h1>
      </div>
      <div class="w-full">
        <img
          :src="props.productData?.gallery[0]?.file"
          alt=""
          class="w-full h-[500px]"
        />
      </div>
      <div class="grid grid-cols-3 gap-4 mt-4">
        <img :src="temp8" alt="" class="w-full" />
        <img :src="temp9" alt="" class="w-full" />
        <img :src="temp8" alt="" class="w-full" />
      </div>
    </div>
    <div class="col-span-2 hidden lg:block">
      <div class="w-full border-b border-sec-gray">
        <h1 class="font-[dana-demi] text-[32px] mb-2">
          {{ props.productData.title }}
        </h1>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-10">
        <div class="flex flex-col justify-between">
          <div>
            <p class="font-[dana-demi] mb-2">
              ارتفاع: {{ props.productData.height }}متر
            </p>
            <p class="font-[dana-demi] mb-2">
              عرض:{{ props.productData.height }}متر
            </p>
            <p class="font-[dana-demi] mb-2">
              وزن:{{ props.productData.weight }}متر
            </p>
            <p class="font-[dana-demi] mb-2">
              طول:{{ props.productData.length }}متر
            </p>
          </div>
          <div class="prices">
            <p class="mb-1">انتخاب نوع محصول</p>
            <DropDown
              :options="pricesOption"
              v-if="pricesOption.length"
              @optionSelected="optionSelected"
            />
          </div>
          <div class="flex">
            <img :src="man4" alt="" class="w-20" />
            <div class="flex flex-col justify-end">
              <p class="text-md font-[dana-demi] mb-2">
                برای نصب نیاز به کمک دارید؟
              </p>
              <NuxtLink to="/services">
                <button class="bg-primary rounded py-2 font-[dana-demi]">
                  انتخاب متخصص
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-span-2 bg-[#F7F7F7] rounded h-full w-full p-4">
          <div class="flex justify-end border-b border-sec-gray pb-2">
            <img
              :src="props.productData.brand.image"
              alt=""
              class="w-[100px] object-contain"
            />
          </div>
          <div class="mt-5 border-b border-sec-gray">
            <div class="flex items-center mb-8">
              <img :src="approvalIcon" alt="" />
              <p class="mr-2 font-[dana-demi]">ضمانت اصل بودن کالا</p>
            </div>
            <div class="flex items-center mb-8">
              <img :src="StallIcon" alt="" />
              <p class="mr-2 font-[dana-demi]">
                امکان تحویل در فروشگاه زازا کالا
              </p>
            </div>
            <div class="flex items-center mb-8">
              <img :src="ExerciseIcon" alt="" />
              <p class="mr-2 font-[dana-demi]">ارسال سریع</p>
            </div>
          </div>
          <div class="flex justify-between mt-5">
            <div class="flex">
              <span
                class="bg-[#B80000] rounded-lg text-white px-2 py-1 text-xs"
                v-if="first_price.off_percent"
                >{{ first_price.off_percent }}%</span
              >
              <p class="font-[dana-bold] text-lg mr-2 text-text-gray">
                {{ toPersianCurrency(first_price.off_price) }}
              </p>
            </div>
            <p class="font-[dana-bold] text-lg">
              {{ toPersianCurrency(first_price.price) }}
            </p>
          </div>

          <div class="flex mt-10 justify-between items-center">
            <p class="text-[#ED0000] text-sm">تنها ۱ عدد در انبار باقی مانده</p>
            <button
              class="bg-primary rounded py-3 px-4 font-[dana-bold] text-[20px]"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="block lg:hidden">
      <div class="grid grid-cols-2 gap-4 mt-10">
        <p class="font-[dana-demi] mb-2">
          ارتفاع: {{ props.productData.height }}متر
        </p>
        <p class="font-[dana-demi] mb-2">
          عرض:{{ props.productData.height }}متر
        </p>
        <p class="font-[dana-demi] mb-2">
          وزن:{{ props.productData.weight }}متر
        </p>
        <p class="font-[dana-demi] mb-2">
          طول:{{ props.productData.length }}متر
        </p>
      </div>
      <div>
        <div class="mt-5 grid grid-cols-2 gap-4">
          <div class="flex items-center mb-8 text-center">
            <img :src="approvalIcon" alt="" />
            <p class="mr-2 font-[dana-demi] text-sm">ضمانت اصل بودن کالا</p>
          </div>
          <div class="flex items-center mb-8 text-center">
            <img :src="StallIcon" alt="" />
            <p class="mr-2 font-[dana-demi] text-sm">
              امکان تحویل در فروشگاه زازا کالا
            </p>
          </div>
        </div>
        <div
          class="flex items-center mb-8 text-center m-auto w-full justify-center"
        >
          <img :src="ExerciseIcon" alt="" />
          <p class="mr-2 font-[dana-demi] text-sm">ارسال سریع</p>
        </div>
      </div>
    </div>
  </div>
</template>
