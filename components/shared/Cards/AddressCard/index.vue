<script setup lang="ts">

const NeshanMap = computed(() => {
  if (process.client) {
    return defineAsyncComponent(
      () => import('@neshan-maps-platform/vue3-openlayers')
    )
  }
})
</script>
<template>
  <div class="w-full flex justify-between py-2">
    <div></div>
    <div class="h-[300px]">
      <client-only>
        
        <NeshanMap
          mapKey="web.d278f712378242a090a4903dd3108a2c"
          :center="{
            latitude: 35.70222201840939,
            longitude: 51.35178336960962,
          }"
        />
      </client-only>
    </div>
  </div>
</template>

<style>
@import url('@neshan-maps-platform/vue3-openlayers/dist/style.css');
</style>
