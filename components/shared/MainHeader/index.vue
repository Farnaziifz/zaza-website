<script setup lang="ts">
import { ref, type Ref, onBeforeMount } from 'vue'
import MegaMenu from '@/components/shared/MegaMenu/index.vue'
import { getCategoryList } from '@/logics/specifics/category.handler'
import { type categoryList } from '@/core/types/category.type'

type MenuProps = {
  showWelcome: boolean
}

const props = defineProps<MenuProps>()
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
              <Icon name="mdi-light:magnify" size="24px" color="white" />
            </button>
          </div>
        </div>
        <div class="w-full flex-1 hidden lg:block">
          <div class="w-full flex">
            <div class="w-10 h-10">
              <NuxtLink to="/login">
                <Icon name="mdi-light:account" color="black" size="32px" />
              </NuxtLink>
            </div>
            <div class="w-10 h-10">
              <Icon name="mdi-light:briefcase" color="black" size="32px" />
            </div>
          </div>
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
            <Icon
              name="mdi-light:format-align-justify"
              color="white"
              size="24px"
            />
            دسته بندی کالا
          </button>
          <NuxtLink :to="`/product?type=best&page=1`">
            <div class="mr-2 hidden lg:block">
              <Icon name="mdi-light:diamond" size="20px" color="black" />
              <span class="mr-1 font-[dana-light]">پر فروش‌ترین‌ها</span>
            </div>
          </NuxtLink>
          <NuxtLink :to="`/product?type=sales&page=1`">
            <div class="mr-2 hidden lg:block">
              <Icon name="streamline:discount-percent-coupon" color="black" />
              <span class="mr-1 font-[dana-light]">تخفیف‌ها</span>
            </div>
          </NuxtLink>
          <div class="mr-2 hidden lg:block">
            <NuxtLink to="/services">
              <Icon
                name="healthicons:factory-worker-outline"
                color="black"
                size="24px"
              />
              <span class="mr-1 font-[dana-light]">متخصصین</span>
            </NuxtLink>
          </div>
          <div class="h-8 bg-sec-gray w-px mx-2 hidden lg:block"></div>
          <div class="mr-2">
            <NuxtLink to="/faq">
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
            <NuxtLink to="/blog?page=1">
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
        v-if="props.showWelcome"
        class="lg:hidden bg-primary flex items-center justify-center py-3 font-[dana-extra] text-[24px]"
      >
        به زازا کالا خوش آمدید
      </div>
    </div>
  </div>
</template>
