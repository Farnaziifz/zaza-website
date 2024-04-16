<script setup lang="ts">
type CardProps = {
  title: string
  text: string
  buttonText: string
  shortDesc: string
  link?: string
}

const props = defineProps<CardProps>()
</script>

<template>
  <div
    class="w-full lg:h-[350px] rounded border-sec-gray border shadow-lg flex flex-col justify-between"
  >
    <div>
      <div
        class="lg:py-1 py-4 px-2 w-fit rounded-ee-lg bg-[#C9F9D1] rounded-ss-sm hidden lg:block"
      >
        <p class="text-[#007737] font-[dana-demi]">{{ props.title }}</p>
      </div>
      <div class="px-3 mt-4 text-center lg:text-right">{{ props.text }}</div>
      <div class="px-3 mt-2 hidden lg:block">{{ shortDesc }}</div>
    </div>
    <div class="flex lg:justify-end justify-center lg:mt-1 mt-5 w-full p-3">
      <NuxtLink :to="props.link">
        <button class="bg-primary p-2 rounded text-xs">
          {{ props.buttonText }}
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
