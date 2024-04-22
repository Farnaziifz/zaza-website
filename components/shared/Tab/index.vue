<script lang="ts" setup>
import { ref } from 'vue'

type tabprops = {
  tabs: string[]
  activeTab: number
}
const props = defineProps<tabprops>()
const activeTab = ref(0)
const emits = defineEmits(['tabChanged'])

const changeTab = (index: number) => {
  activeTab.value = index
  emits('tabChanged', index)
}

watch(activeTab, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    emits('tabChanged', newValue)
  }
})
</script>

<template>
  <div class="tabs">
    <div class="tab-buttons border-b border-sec-gray">
      <button
        v-for="(tab, index) in props.tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="changeTab(index)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tab-content mt-4">
      <slot :name="props.tabs[activeTab].id"></slot>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
}

.tab-buttons {
  display: flex;
}

.tab-buttons button {
  padding: 10px;
  margin-right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.tab-buttons button.active {
  font-weight: bold;
}

.tab-content {
  margin-top: 10px;
}
</style>
