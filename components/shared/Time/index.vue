<script lang="ts" setup>
import { ref, watch } from 'vue'

const totalSeconds = ref<number>(120) // Total number of seconds (5 minutes)
const countdownMinutes = ref<number>(0)
const countdownSeconds = ref<number>(0)

onMounted(() => {
  // Update countdown every second
  const timer = setInterval(() => {
    totalSeconds.value--
  }, 1000)

  // Watch for changes in totalSeconds and update countdown accordingly
  setInterval(() => {
    countdownMinutes.value = Math.floor(totalSeconds.value / 60)
    countdownSeconds.value = totalSeconds.value % 60
    if (totalSeconds.value <= 0) {
      clearInterval(timer) // Stop the timer when countdown reaches 0
    }
  }, 1000)
})
</script>
<template>
  <div>
    <p>
      مانده تا دریافت مجدد کد: {{ countdownMinutes }}:{{ countdownSeconds }}
    </p>
  </div>
</template>
