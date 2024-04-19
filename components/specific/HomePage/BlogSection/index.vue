<script setup lang="ts">
import BlogCard from '@/components/shared/Cards/BlogCard/index.vue'
import tem3 from '@/assets/images/temp/3.png'
import { type blogItem } from '~/core/types/blog.type'

type blogProps = {
  blog: blogItem[]
}

const props = defineProps<blogProps>()
</script>

<template>
  <div class="container px-2">
    <h2 class="font-[dana-medium] text-[42px] text-center">آخرین وبلاگ</h2>
    <div class="grid lg:grid-cols-3 lg-grid-col gap-6 mt-5">
      <BlogCard
        :img="item.thumbnail"
        :title="item.title"
        :date="item.persian_created_at"
        :id="item.id"
        v-for="item in blog"
        :key="item.id"
        :slug="item.seo_slug"
      />
    </div>
  </div>
</template>
