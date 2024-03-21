<script setup lang="ts">
type CardProps = {
  title: string
  text: string
  buttonText: string
}

const props = defineProps<CardProps>()
</script>

<template>
  <div
    class="w-full h-[350px] rounded border-sec-gray border shadow-lg flex flex-col justify-between"
  >
    <div>
      <div class="py-1 px-2 w-fit rounded-ee-lg bg-[#C9F9D1] rounded-ss-sm">
        <p class="text-[#007737] font-[dana-demi]">{{ props.title }}</p>
      </div>
      <div class="px-3 mt-4">{{ props.text }}</div>
    </div>
    <div class="flex justify-end w-full p-3">
      <button class="bg-primary p-2 rounded text-xs">
        {{ props.buttonText }}
      </button>
    </div>
  </div>
</template>
