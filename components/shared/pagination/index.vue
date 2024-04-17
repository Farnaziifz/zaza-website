<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  total_pages: {
    type: Number,
    required: true,
  },
  next: {
    type: String,
  },
  previous: {
    type: String,
  },
  current_page: {
    type: Number,
    required: true,
  },
})

const emits = defineEmits(['pageChange'])

interface Pagination {
  count: number
  total_pages: number
  next?: string
  previous?: string
  current_page: number
}

const pagination = ref<Pagination>({
  count: props.count,
  total_pages: props.total_pages,
  next: props.next,
  previous: props.previous,
  current_page: props.current_page,
})


const fetchPage = (direction: 'next' | 'previous') => {
  if (direction === 'next' && pagination.value.next) {
    pagination.value.current_page++
    emits('pageChange', pagination.value.current_page)
  } else if (direction === 'previous' && pagination.value.previous) {
    pagination.value.current_page--
    emits('pageChange', pagination.value.current_page)
  }
}

const changePage = (page: number | string) => {
  emits('pageChange', page)
}
</script>

<template>
  <div class="flex items-center justify-center">
    <!-- <button
      @click="fetchPage('previous')"
      :disabled="!pagination.previous"
      class="pagination-button"
    >
      Previous
    </button> -->
    <span
      class="cursor-pointer pagination-info text-xs w-[30px] h-[30px] rounded flex items-center justify-center"
      v-for="dotted in pagination.total_pages"
      :class="dotted === +route.query.page ? 'bg-primary' : 'bg-sec-gray'"
      @click="changePage(dotted)"
    >
      {{ dotted }}
    </span>
    <!-- <button
      @click="fetchPage('next')"
      :disabled="!pagination.next"
      class="pagination-button"
    >
      Next
    </button> -->
  </div>
</template>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination-button {
  margin: 0 5px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.pagination-info {
  margin: 0 10px;
  font-size: 14px;
  line-height: 30px;
}
</style>
