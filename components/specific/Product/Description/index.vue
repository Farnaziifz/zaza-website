<script setup lang="ts">
type descProps = {
  desc: string
}
const props = defineProps<descProps>()
</script>
<template>
  <div class="rounded border border-sec-gray p-4">
    <div class="font-[dana-bold] text-[20px]">توضیحات</div>
    <p
      class="text-justify text-lg font-[dana-light] mt-5"
      v-html="props.desc"
    ></p>
  </div>
</template>
