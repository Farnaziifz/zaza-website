<script setup lang="ts">
import CollapsibleCard from '@/components/shared/CollapsibelCard/index.vue'
const emits = defineEmits(['closeBox'])

type filterBoxProps = {
  isShow: boolean
}

const props = defineProps<filterBoxProps>()
const closeFilter = () => {
  emits('closeBox', false)
}
</script>
<template>
  <div
    class="h-screen w-full bg-white fixed top-0 z-[100] p-10 transition-open"
    :class="props.isShow ? 'right-0' : 'right-[-100%]'"
  >
    <div class="flex justify-end mb-10" @click="closeFilter">close icon</div>
    <CollapsibleCard title="فیلتر بر اساس کشور سازنده">
      <div class="flex items-center justify-between cursor-pointer px-4 mb-3">
        <label for="name1">ایران</label>
        <input type="checkbox" id="name1" class="borde-none w-4 h-4" />
      </div>
      <div class="flex items-center justify-between cursor-pointer px-4 mb-3">
        <label for="name2">ایران</label>
        <input type="checkbox" id="name2" class="borde-none w-4 h-4" />
      </div>
      <div class="flex items-center justify-between cursor-pointer px-4 mb-3">
        <label for="name3">ایران</label>
        <input type="checkbox" id="name3" class="borde-none w-4 h-4" />
      </div>
    </CollapsibleCard>
    <CollapsibleCard title="فیلتر بر اساس برند محصول">
      <div class="flex items-center justify-between cursor-pointer px-4 mb-3">
        <label for="name1">ایران</label>
        <input type="checkbox" id="name1" class="borde-none w-4 h-4" />
      </div>
      <div class="flex items-center justify-between cursor-pointer px-4 mb-3">
        <label for="name2">ایران</label>
        <input type="checkbox" id="name2" class="borde-none w-4 h-4" />
      </div>
      <div class="flex items-center justify-between cursor-pointer px-4 mb-3">
        <label for="name3">ایران</label>
        <input type="checkbox" id="name3" class="borde-none w-4 h-4" />
      </div>
    </CollapsibleCard>
  </div>
</template>

<style lang="scss" scoped>
.transition-open {
  transition: all 0.5s;
}
</style>
