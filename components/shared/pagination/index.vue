<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="goToPage(1)">First</button>
    <button :disabled="currentPage === 1" @click="prevPage">Prev</button>

    <template v-for="page in visiblePages" :key="page">
      <button :class="{ active: currentPage === page }" @click="goToPage(page)">
        {{ page }}
      </button>
    </template>

    <button :disabled="currentPage === totalPages" @click="nextPage">
      Next
    </button>
    <button
      :disabled="currentPage === totalPages"
      @click="goToPage(totalPages)"
    >
      Last
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
const emits = defineEmits(['update:currentPage'])

type paginationProps = {
  totalItems: number
  itemsPerPage: number
  currentPage: number
}
const props = defineProps<paginationProps>()
const currentPage = ref(props.currentPage)

const totalPages = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage)
)

const visiblePages = computed(() => {
  const pages = []
  const maxVisiblePages = 5 // Change this value if you want to display more or fewer pages

  let start = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2))
  let end = Math.min(totalPages.value, start + maxVisiblePages - 1)

  while (pages.length < maxVisiblePages && start <= end) {
    pages.push(start)
    start++
  }

  return pages
})
const goToPage = (page: number) => {
  if (page !== currentPage.value) {
    currentPage.value = page
    emits('update:currentPage', currentPage.value)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    emits('update:currentPage', currentPage.value)
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    emits('update:currentPage', currentPage.value)
  }
}

watch(
  () => props.currentPage,
  (newValue) => {
    currentPage.value = newValue
  }
)
</script>

<style scoped>
.pagination {
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  background-color: #f0f0f0;
}

.pagination button:disabled {
  cursor: not-allowed;
}

.pagination button.active {
  background-color: #007bff;
  color: #fff;
}
</style>
