<script setup lang="ts">
import { type categoryType } from '@/core/types/category.type'

type megaMenuProps = {
  isShow: boolean
  category: categoryType[]
}

const props = defineProps<megaMenuProps>()
</script>
<template>
  <div
    class="w-full bg-white rounded box-shadow px-4"
    :class="{ 'py-4': props.isShow }"
  >
    <div class="px-2" :class="props.isShow ? 'block' : 'hidden'">
      <div class="grid grid-cols-4 gap-4">
        <template v-for="catItem in category">
          <div v-if="catItem?.children" :key="catItem?.id" class="mb-5">
            <div>
              <NuxtLink
                :to="`/product-category/${catItem.seo_slug}?id=${catItem.id}`"
              >
                <p class="text-primary font-[dana-bold] text-md cursor-pointer">
                  {{ catItem?.title_product }}
                </p>
              </NuxtLink>
              <div :key="sub?.id" class="mt-5" v-for="sub in catItem.children">
                <NuxtLink
                  :to="`/product-category/${catItem.seo_slug}/${sub.seo_slug}?id=${sub.id}`"
                >
                  <p class="text-sm cursor-pointer">
                    {{ sub?.title_product }}
                  </p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box-shadow {
  box-shadow: 00px 3px 10px #c7c7c7;
  transition: all 0.5s;
}
</style>
