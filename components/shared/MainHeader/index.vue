<script setup lang="ts">
import { ref, type Ref, onBeforeMount } from 'vue'
import serach from '../Icons/serach.vue'
import MegaMenu from '@/components/shared/MegaMenu/index.vue'
import { getCategoryList } from '@/logics/specifics/category.handler'
import { type categoryList } from '@/core/types/category.type'
const isShowMenu = ref(false)
const categoryData: Ref<categoryList> = ref({
  count: 0,
  total_pages: 0,
  next: false,
  previous: false,
  current_page: 1,
  results: [],
})

const toggleMenu = () => {
  isShowMenu.value = true
}
const hideMenu = () => {
  isShowMenu.value = false
}

onBeforeMount(async () => {
  categoryData.value = await getCategoryList()
})
</script>

<template>
  <div>
    <div class="container relative">
      <MegaMenu
        class="absolute top-[155px] right-0 z-50"
        :is-show="isShowMenu"
        @mouseover="toggleMenu"
        @mouseleave="hideMenu"
        :category="categoryData.results"
      />
      <div class="flex lg:justify-between items-center flex-1 justify-center">
        <NuxtLink to="/">
          <div>
            <img src="@/assets/images/logo.svg" alt="" />
          </div>
        </NuxtLink>
        <div class="w-full h-[60px] hidden lg:block">
          <div
            class="border h-full rounded mx-8 border-sec-gray flex items-center"
          >
            <input
              type="text"
              class="w-full h-full indent-4 focus:outline-none bg-transparent"
              placeholder="دنبال چی میگردی؟..."
            />
            <button
              class="h-full w-44 bg-primary text-white flex items-center justify-center"
            >
              <span class="text-white">جستجو</span>
              <serach />
            </button>
          </div>
        </div>
        <div class="w-full flex-1 hidden lg:block">
          <div class="w-10 h-10"><user /></div>
          <div class="w-10 h-10"><user /></div>
        </div>
      </div>
    </div>
    <div class="border-b border-t border-sec-gray h-12">
      <div
        class="container flex w-full justify-around lg:justify-between items-center h-full"
      >
        <div class="h-full flex items-center">
          <button
            class="h-full w-44 bg-primary text-white flex items-center justify-center hidden lg:block"
            @mouseover="toggleMenu"
            @mouseleave="hideMenu"
          >
            دسته بندی کالا
          </button>

          <div class="mr-2 hidden lg:block">
            <span>icon</span>
            <span class="mr-1 font-[dana-light]">پر فروش‌ترین‌ها</span>
          </div>
          <div class="mr-2 hidden lg:block">
            <span>icon</span>
            <span class="mr-1 font-[dana-light]">تخفیف‌ها</span>
          </div>
          <div class="mr-2 hidden lg:block">
            <NuxtLink to="/services">
              <span>icon</span>
              <span class="mr-1 font-[dana-light]">متخصصین</span>
            </NuxtLink>
          </div>
          <div class="h-8 bg-sec-gray w-px mx-2 hidden lg:block"></div>
          <div class="mr-2">
            <NuxtLink to="faq">
              <span class="mr-1 font-[dana-light] text-xs lg:text-lg"
                >سوالی دارید؟</span
              >
            </NuxtLink>
          </div>
          <div class="mr-2">
            <NuxtLink to="/contact">
              <span class="mr-1 font-[dana-light] text-xs lg:text-lg"
                >تماس با ما</span
              >
            </NuxtLink>
          </div>
          <div class="mr-2">
            <NuxtLink to="blog">
              <span class="mr-1 font-[dana-light] text-xs lg:text-lg"
                >مجله زازا</span
              >
            </NuxtLink>
          </div>
        </div>
        <div>
          <span class="font-[dana-medium] text-xs lg:text-lg">
            ثبت نام متخصصین</span
          >
        </div>
      </div>
      <div
        class="lg:hidden bg-primary flex items-center justify-center py-3 font-[dana-extra] text-[24px]"
      >
        به زازا کالا خوش آمدید
      </div>
    </div>
  </div>
</template>
