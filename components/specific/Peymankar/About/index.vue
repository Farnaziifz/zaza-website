<script setup lang="ts">
type aboutProps = {
  fistname: string
  lastname: string
  about: string
}

const props = defineProps<aboutProps>()
</script>

<template>
  <div class="p-4 py-8 bg-white rounded my-shadow" v-if="props.about">
    <p class="font-[dana-demi] text-lg mb-10">
      درباره {{ props.fistname }} {{ props.lastname }}
    </p>
    <p class="text-justify">
      {{ props.about }}
    </p>
    <div class="mt-10">
      <span class="bg-primary px-5 py-2 rounded bg-[#FBDAA8] ml-2 text-sm"
        >تخخخصص ۱</span
      >
      <span class="bg-primary px-5 py-2 rounded bg-[#FBDAA8] ml-2 text-sm"
        >تخخخصص ۱</span
      >
      <span class="bg-primary px-5 py-2 rounded bg-[#FBDAA8] ml-2 text-sm"
        >تخخخصص ۱</span
      >
      <span class="bg-primary px-5 py-2 rounded bg-[#FBDAA8] ml-2 text-sm"
        >تخخخصص ۱</span
      >
    </div>
  </div>
</template>
