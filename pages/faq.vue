<script setup lang="ts">
import { getFaqList } from '@/logics/specifics/general.handler'
import { type faqList } from '@/core/types/general.type'
import CollapsibleCard from '@/components/shared/CollapsibelCard/index.vue'

const faqData: Ref<faqList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 0,
  results: [],
})

onBeforeMount(async () => {
  faqData.value = await getFaqList()
})
</script>

<template>
  <div class="container mt-20">
    <h1 class="text-[32px] font-[dana-bold] mb-10">سوالات متداول</h1>
    <CollapsibleCard
      :title="item.title"
      v-for="item in faqData.results"
      class="mb-5"
      :has-border="true"
    >
      <p>{{ item.description }}</p>
    </CollapsibleCard>
  </div>
</template>
