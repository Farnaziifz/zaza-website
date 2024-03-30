<script lang="ts" setup>
import temp4 from '@/assets/images/temp/4.png'
type productCatgeoryLVL1Props = {
  isLeft: boolean
}

const props = defineProps<productCatgeoryLVL1Props>()
</script>

<template>
  <div class="hidden lg:block">
    <div class="w-full relative h-[450px] mb-1" v-if="props.isLeft">
      <div
        class="absolute left-0 top-0 rounded border-4 border-primary h-full w-[60%] -z-50"
      ></div>
      <div class="container grid grid-cols-2 gap-4 h-full">
        <div class="w-full h-full flex items-center justify-center">
          <img :src="temp4" alt="" />
        </div>
        <div class="w-full h-full flex justify-around flex-col">
          <div>
            <h1 class="font-[dana-extra] text-[32px] mb-7">
              تجهیزات استخر، سونا و جکوزی
            </h1>
            <p class="text-text-gray text-lg font-[dana-bold]">
              تمامی تجهیزات مربوط به استخر، سونا جکوری نما، تعمیرات، ساخت و ....
            </p>
          </div>
          <button class="w-[250px] h-[70px] rounded bg-primary text-white">
            مشاهده همه محصولات
          </button>
        </div>
      </div>
    </div>
    <div class="w-full relative h-[450px] mb-1" v-if="!props.isLeft">
      <div
        class="absolute right-0 top-0 rounded border-4 border-primary h-full w-[60%] -z-50"
      ></div>
      <div class="container grid grid-cols-2 gap-4 h-full">
        <div class="w-full h-full flex justify-around flex-col">
          <div>
            <h1 class="font-[dana-extra] text-[32px] mb-7">
              تجهیزات استخر، سونا و جکوزی
            </h1>
            <p class="text-text-gray text-lg font-[dana-bold]">
              تمامی تجهیزات مربوط به استخر، سونا جکوری نما، تعمیرات، ساخت و ....
            </p>
          </div>
          <button class="w-[250px] h-[70px] rounded bg-primary text-white">
            مشاهده همه محصولات
          </button>
        </div>
        <div class="w-full h-full flex items-center justify-center">
          <img :src="temp4" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="block lg:hidden mb-10 relative">
    <div class="w-full h-full flex items-center justify-center">
      <img :src="temp4" alt="" />
    </div>
    <div
      class="w-[90%] h-full flex justify-center flex-col mt-10 rounded border-4 border-primary h-full m-auto py-10 -mt-5 px-2"
    >
      <div>
        <h1 class="font-[dana-extra] text-lg mb-7 text-center">
          تجهیزات استخر، سونا و جکوزی
        </h1>
        <p class="text-text-gray text-sm font-[dana-bold] text-center">
          تمامی تجهیزات مربوط به استخر، سونا جکوری نما، تعمیرات، ساخت و ....
        </p>
      </div>
      <button
        class="w-[250px] h-[48px] rounded bg-primary text-white mt-10 m-auto"
      >
        مشاهده همه محصولات
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
