<script lang="ts" setup>
type BlogProps = {
  img: string
  title: string
  date: string
  id: string | number
}

const props = defineProps<BlogProps>()
</script>

<template>
  <div class="w-full flex flex-col cursor-pointer mb-10">
    <img :src="img" alt="" class="w-full" />
    <p class="mt-3 font-[dana-medium] text-lg text-center lg:text-right">
      {{ props.title }}
    </p>
    <div class="flex mt-2 w-full justify-center lg:justify-start">
      <div class="flex items-center">
        <p class="text-sm text-text-gray">icon</p>
        <p class="mr-2 text-sm text-text-gray">{{ props.date }}</p>
      </div>

      <div class="w-px h-6 bg-sec-gray mx-2"></div>
      <p class="text-sm text-text-gray">بیشتر بخوانید</p>
    </div>
  </div>
</template>
