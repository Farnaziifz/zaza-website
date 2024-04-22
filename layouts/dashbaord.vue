<script setup lang="ts">
import dashbaordMenu from '@/components/shared/dashboardMenu/index.vue'
import MainHeader from '@/components/shared/MainHeader/index.vue'
</script>
<template>
  <MainHeader />
  <div class="container grid grid-cols-3 gap-4 mt-12">
    <div class="col-span-1">
      <dashbaordMenu />
    </div>
    <div class="col-span-2 rounded border border-sec-gray p-4">
      <slot />
    </div>
  </div>
</template>
