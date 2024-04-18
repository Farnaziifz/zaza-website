<script setup lang="ts">
import { onBeforeMount } from 'vue'
import BlogCard from '@/components/shared/Cards/BlogCard/index.vue'
import { type categoryList } from '@/core/types/category.type'
import { getCategoryList } from '@/logics/specifics/category.handler'
import { getBlogList } from '@/logics/specifics/blog.handler'
import { type blogList } from '@/core/types/blog.type'
import Pagination from '@/components/shared/pagination/index.vue'
import _ from 'lodash'

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const categoryData: Ref<categoryList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})

const blogData: Ref<blogList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})

let filterList = reactive([])

onBeforeMount(async () => {
  categoryData.value = await getCategoryList()
  blogData.value = await getBlogList(filterList, route.query?.page)
})

const addToFilterList = (item: number | string) => {
  if (filterList.find((el) => el === item))
    filterList = filterList.filter((nm) => nm !== item)
  else filterList.push(item)
}

const submitFilter = async () => {
  blogData.value = await getBlogList(filterList, 1)
  console.log(blogData.value)
  router.push({ path: '/blog', query: { page: 1 } })
}
const pageChange = async (page: number | string) => {
  router.push({ path: '/blog', query: { page: page } })
  blogData.value = await getBlogList(filterList, page)
}
</script>

<template>
  <div class="container grid grid-cols-4 gap-4 mt-14">
    <div class="col-span-1">
      <div class="border border-sec-gray rounded p-4">
        <p class="text-[20px] font-[dana-demi] mb-10">دسته‌بندی</p>
        <div
          class="flex items-center justify-between cursor-pointer px-4 mb-3"
          v-for="cat in categoryData.results"
          :key="cat.id"
        >
          <label :for="_.toString(cat.id)">{{ cat.title_blog }}</label>
          <input
            type="checkbox"
            :id="_.toString(cat.id)"
            class="borde-none w-4 h-4"
            @change="addToFilterList(cat.id)"
          />
        </div>
        <button
          class="bg-primary w-full rounded text-white py-2 mt-5"
          @click="submitFilter"
        >
          اعمال فیلتر
        </button>
      </div>
    </div>
    <div class="col-span-3 w-full">
      <div class="grid grid-cols-3 gap-4">
        <BlogCard
          :img="blog.thumbnail"
          :title="blog.title"
          :date="blog.updated_at"
          :id="blog.id"
          v-for="blog in blogData.results"
          :key="blog.id"
          :slug="blog.seo_slug"
        />
      </div>

      <div v-if="blogData.count">
        <Pagination
          :count="blogData.count"
          :total_pages="blogData.total_pages"
          :next="blogData.next"
          :previous="blogData.previous"
          :current_page="blogData.current_page"
          @pageChange="pageChange"
        />
      </div>
    </div>
  </div>
</template>
