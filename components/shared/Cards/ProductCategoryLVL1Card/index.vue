<script lang="ts" setup>
import { type categoryType } from '~/core/types/category.type'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log('hellow', route)

type productCatgeoryLVL1Props = {
  isLeft: boolean
  catData: categoryType
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
          <img
            :src="props.catData.thumbnail_main"
            alt=""
            class="w-[600px] h-[400px] object-cover"
          />
        </div>
        <div class="w-full h-full flex justify-around flex-col">
          <div>
            <h1 class="font-[dana-extra] text-[32px] mb-7">
              {{ props.catData?.title_product }}
            </h1>

            <p class="text-text-gray text-lg font-[dana-bold]">
              {{ props.catData.short_description_main }}
            </p>
          </div>
          <NuxtLink
            :to="`/product-category/${route.params.name}/${props.catData.seo_slug}?id=${props.catData.id}`"
          >
            <button class="w-[250px] h-[70px] rounded bg-primary text-white">
              مشاهده همه محصولات
            </button>
          </NuxtLink>
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
              {{ props.catData.title_product }}
            </h1>
            <p class="text-text-gray text-lg font-[dana-bold]">
              {{ props.catData.short_description_main }}
            </p>
          </div>
          <NuxtLink
            :to="`/product-category/${route.params.name}/${props.catData.seo_slug}?id=${props.catData.id}`"
          >
            <button class="w-[250px] h-[70px] rounded bg-primary text-white">
              مشاهده همه محصولات
            </button>
          </NuxtLink>
        </div>
        <div class="w-full h-full flex items-center justify-center">
          <img
            :src="props.catData.thumbnail_main"
            alt=""
            class="w-[600px] h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="block lg:hidden mb-10 relative">
    <div class="w-full h-full flex items-center justify-center">
      <img
        :src="props.catData.thumbnail_main"
        alt=""
        class="w-full h-[300px] object-cover"
      />
    </div>
    <div
      class="w-[90%] h-full flex justify-center flex-col mt-10 rounded border-4 border-primary h-full m-auto py-10 -mt-[30px] px-2"
    >
      <div>
        <h1 class="font-[dana-extra] text-lg mb-7 text-center">
          {{ props.catData.title_product }}
        </h1>
        <p class="text-text-gray text-sm font-[dana-bold] text-center">
          {{ props.catData.short_description_main }}
        </p>
      </div>
      <NuxtLink
        :to="`/product-category/${route.params.name}/${props.catData.seo_slug}?id=${props.catData.id}`"
      >
        <button
          class="w-[250px] h-[48px] rounded bg-primary text-white mt-10 m-auto"
        >
          مشاهده همه محصولات
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
