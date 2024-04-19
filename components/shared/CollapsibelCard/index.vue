<script lang="ts" setup>
import { ref } from 'vue'
const isCollapsed = ref(true)
type collapsibleCardProps = {
  title: string
  hasBorder: boolean
}
const props = defineProps<collapsibleCardProps>()
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>
<template>
  <div
    class="collapsible-card"
    :class="hasBorder ? 'border border-primary rounded' : ''"
  >
    <div
      class="header flex items-center justify-between"
      @click="toggleCollapse"
    >
      <p>{{ props.title }}</p>
      <Icon name="mdi:chevron-double-down" />
    </div>
    <transition name="fade">
      <div v-if="!isCollapsed" class="py-3 px-6 text-justify">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.header {
  padding: 10px;
  cursor: pointer;
}
</style>
