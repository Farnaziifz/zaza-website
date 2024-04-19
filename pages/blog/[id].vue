<script setup lang="ts">
import tem3 from '@/assets/images/temp/3.png'
import BlogCard from '@/components/shared/Cards/BlogCard/index.vue'
import CommentItem from '@/components/shared/CommentItem/index.vue'
import { getBlogData } from '@/logics/specifics/blog.handler'
import { type blogItem, type blogList } from '@/core/types/blog.type'
import { useRoute } from 'vue-router'
import { getPersianYear } from '@/logics/shared/date.handler'
import { getBlogList } from '@/logics/specifics/blog.handler'

const route = useRoute()
const blogData: Ref<blogItem> = ref({
  title: '',
  id: 0,
  all_comments_count: 0,
  approved_comments_count: 0,
  not_approved_comments_count: 0,
  created_at: '',
  updated_at: '',
  body: '',
  thumbnail: '',
  status: '',
  publish_at: '',
  seo_slug: '',
  seo_title: '',
  seo_description: '',
  creator: [],
  category: {},
  parent: 0,
  banner: [],
  tag: [],
})

const blogListData: Ref<blogList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})
onBeforeMount(async () => {
  blogData.value = await getBlogData(route.query.id)
  blogListData.value = await getBlogList([], 1)
})
</script>

<template>
  <div class="container px-4 lg:px-0" v-if="blogData.id">
    <div class="mt-20 lg:mt-14">
      <span
        class="bg-primary p-2 rounded-lg text-xs mx-2"
        v-for="item in blogData.category"
        >{{ item.title_blog }}</span
      >
    </div>
    <p class="mt-10">{{ blogData.title }}</p>
    <div class="flex mt-5">
      <div class="flex items-center">
        <Icon name="material-symbols:person-rounded" />
        <p class="mr-2 text-sm text-text-gray">
          ارسال توسط {{ blogData.creator.first_name }}
        </p>
      </div>

      <div class="w-px h-6 bg-sec-gray mx-2"></div>
      <p class="mr-2 text-sm text-text-gray">
        تاریخ {{ blogData.persian_created_at }}
      </p>
    </div>
    <div class="w-full h-img mt-4">
      <img
        :src="blogData.thumbnail"
        alt=""
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <p class="mt-10 text-justify" v-html="blogData.body"></p>
    <div class="mt-14">
      <h3 class="text-xl font-[dana-demi] mb-4">مطالب مرتبط</h3>
      <div class="grid lg:grid-cols-4 grid-cols-1 gap-8 px-4 lg:px-0">
        <BlogCard
          :img="item.thumbnail"
          :title="item.title"
          :date="item.updated_at"
          :id="1"
          v-for="item in blogListData.results.slice(0, 2)"
          :key="item.id"
          :slug="item.seo_slug"
        />
      </div>
    </div>
    <div class="mt-14">
      <textarea
        class="w-full rounded border border-sec-gray focus:outline-none indent-4 py-2 resize-none"
        placeholder="دیدگاه شما"
      />
      <div class="grid grid-cols-2 gap-4">
        <input
          class="w-full h-full indent-4 focus:outline-none bg-transparent border rounded border-sec-gray py-4"
          placeholder="نام شما"
        />
        <input
          class="w-full h-full indent-4 focus:outline-none bg-transparent border rounded border-sec-gray py-4"
          placeholder="آدرس ایمیل شما"
        />
      </div>
      <div class="flex justify-end w-full mt-4">
        <button class="bg-primary text-lg py-2 px-4 rounded">
          ارسال دیدگاه
        </button>
      </div>
    </div>
    <div class="border rounded border-sec-gray p-4 mt-14">
      <div class="font-[dana-bold] text-[20px]">نظرات</div>
      <CommentItem />
    </div>
  </div>
</template>
