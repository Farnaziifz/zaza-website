<script setup lang="ts">
import { type categoryList } from '@/core/types/category.type'

type megaMenuProps = {
  isShow: boolean
  category: categoryList
}

const props = defineProps<megaMenuProps>()
</script>
<template>
  <div
    class="w-full bg-white rounded box-shadow"
    :class="{ 'py-4': props.isShow }"
  >
    <div class="px-2" :class="props.isShow ? 'block' : 'hidden'">
      <pre>
        {{ category }}
      </pre>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box-shadow {
  box-shadow: 00px 3px 10px #c7c7c7;
  transition: all 0.5s;
}
</style>
