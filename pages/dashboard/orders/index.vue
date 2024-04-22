<script setup lang="ts">
import Tab from '@/components/shared/tab/index.vue'
import FactorCard from '@/components/shared/Cards/FactorCard/index.vue'
definePageMeta({
  layout: 'dashbaord',
})

const tabs = [
  { id: 'Tab1', label: 'جاری' },
  {
    id: 'Tab2',
    label: 'تحویل شده',
  },
  { id: 'Tab3', label: 'لغو شده' },
]
</script>
<template>
  <div>
    <h2 class="font-[dana-bold] text-[16px]">تاریخچه سفارشات</h2>
    <Tab :tabs="tabs" class="mt-10">
      <template #Tab1>
        <div>
          <FactorCard />
          <FactorCard />
          <FactorCard />
          <FactorCard />
          <FactorCard />
          <FactorCard />
          <FactorCard />
          <FactorCard />
        </div>
      </template>
      <template #Tab2>
        <div>Content of Tab 2</div>
      </template>
      <template #Tab3>
        <div>Content of Tab 3</div>
      </template></Tab
    >
  </div>
</template>
