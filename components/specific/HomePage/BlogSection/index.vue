<script setup lang="ts">
import BlogCard from '@/components/shared/Cards/BlogCard/index.vue'
import tem3 from '@/assets/images/temp/3.png'
</script>

<template>
  <div class="container">
    <h2 class="font-[dana-medium] text-[42px] text-center">آخرین وبلاگ</h2>
    <div class="grid grid-cols-3 gap-6 mt-5">
      <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
      <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
      <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
    </div>
  </div>
</template>
