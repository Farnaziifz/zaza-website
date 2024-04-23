<script setup lang="ts">
import AddressCard from '@/components/shared/Cards/AddressCard/index.vue'
definePageMeta({
  layout: 'dashbaord',
})
</script>

<template>
  <div class="flex justify-between items-center">
    <h2 class="font-[dana-bold] text-[16px]">تاریخچه سفارشات</h2>
    <button class="text-primary rounded border border-primary px-3 py-2">
      افزودن آدرس جدید
      <Icon name="material-symbols:add" />
    </button>
  </div>
  <div class="mt-4">
    <AddressCard />
    <div class="w-full border-b border-sec-gray my-4"></div>
  </div>
</template>
