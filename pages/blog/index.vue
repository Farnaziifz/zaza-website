<script setup lang="ts">
import BlogCard from '@/components/shared/Cards/BlogCard/index.vue'
import tem3 from '@/assets/images/temp/3.png'
</script>

<template>
  <div class="container grid grid-cols-4 gap-4 mt-14">
    <div class="col-span-1">
      <div class="border border-sec-gray rounded p-4">
        <p class="text-[20px] font-[dana-demi] mb-10">دسته‌بندی</p>
        <div class="flex items-center justify-between cursor-pointer px-4 mb-3">
          <label for="name1">ایران</label>
          <input type="checkbox" id="name1" class="borde-none w-4 h-4" />
        </div>
        <div class="flex items-center justify-between cursor-pointer px-4 mb-3">
          <label for="name1">ایران</label>
          <input type="checkbox" id="name1" class="borde-none w-4 h-4" />
        </div>
        <div class="flex items-center justify-between cursor-pointer px-4 mb-3">
          <label for="name1">ایران</label>
          <input type="checkbox" id="name1" class="borde-none w-4 h-4" />
        </div>
      </div>
    </div>
    <div class="col-span-3 w-full">
      <div class="grid grid-cols-3 gap-4">
        <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
        <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
        <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
        <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
        <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
        <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
      </div>
    </div>
  </div>
</template>
