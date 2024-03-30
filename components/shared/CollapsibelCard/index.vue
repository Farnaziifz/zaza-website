<script lang="ts" setup>
import { ref } from 'vue'
const isCollapsed = ref(true)
type collapsibleCardProps = {
  title: string
}
const props = defineProps<collapsibleCardProps>()
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>
<template>
  <div class="collapsible-card">
    <div
      class="header flex items-center justify-between"
      @click="toggleCollapse"
    >
      <p>{{ props.title }}</p>
      <p>icon</p>
    </div>
    <transition name="fade">
      <div v-if="!isCollapsed" class="p-2">
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
