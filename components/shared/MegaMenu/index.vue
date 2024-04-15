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
          <div v-if="!catItem?.parent" :key="catItem?.id" class="mb-5">
            <div>
              <p class="text-primary font-[dana-bold] text-md cursor-pointer">
                {{ catItem?.title_product }}
              </p>
              <template v-for="subCat in category">
                <div
                  v-if="subCat?.parent?.id === catItem.id"
                  :key="subCat?.id"
                  class="mt-5"
                >
                  <p class="text-sm cursor-pointer">
                    {{ subCat?.title_product }}
                  </p>
                </div>
              </template>
            </div>
            <!-- -->
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
