<script setup lang="ts">
type gallery = {
  created_at: string
  file: string
}
type albumProps = {
  fistname: string
  lastname: string
  gallery: gallery[]
}

const props = defineProps<albumProps>()
</script>

<template>
  <div class="p-4 py-8 bg-white rounded my-shadow">
    <p class="font-[dana-demi] text-lg mb-10">
      نمونه کارهای {{ props.fistname }} {{ props.lastname }}
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-y-4 lg:gap-4 gap">
      <img
        :src="item.file"
        alt=""
        class="w-full"
        v-for="item in props.gallery"
      />
    </div>
  </div>
</template>
