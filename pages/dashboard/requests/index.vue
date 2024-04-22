<script setup lang="ts">
import ReqCard from '@/components/shared/Cards/ReqCard/index.vue'

definePageMeta({
  layout: 'dashbaord',
})
</script>

<template>
  <h2 class="font-[dana-bold] text-[16px]">لیست درخواست‌ها</h2>

  <div class="mt-10">
    <ReqCard />
  </div>
</template>
