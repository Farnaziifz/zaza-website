<script setup lang="ts">
import serach from '../Icons/serach.vue'
</script>

<template>
  <div>
    <div class="container">
      <div class="flex justify-between items-center flex-1">
        <div>
          <img src="@/assets/images/logo.svg" alt="" />
        </div>
        <div class="w-full h-[60px]">
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
        <div class="w-full flex-1">
          <div class="w-10 h-10"><user /></div>
          <div class="w-10 h-10"><user /></div>
        </div>
      </div>
    </div>
    <div class="border-b border-t border-sec-gray h-12">
      <div class="container flex w-full justify-between items-center h-full">
        <div class="h-full flex items-center">
          <button
            class="h-full w-44 bg-primary text-white flex items-center justify-center"
          >
            دسته بندی کالا
          </button>
          <div class="mr-2">
            <span>icon</span>
            <span class="mr-1 font-[dana-light]">پر فروش‌ترین‌ها</span>
          </div>
          <div class="mr-2">
            <span>icon</span>
            <span class="mr-1 font-[dana-light]">تخفیف‌ها</span>
          </div>
          <div class="mr-2">
            <span>icon</span>
            <span class="mr-1 font-[dana-light]">متخصصین</span>
          </div>
          <div class="h-8 bg-sec-gray w-px mx-2"></div>
          <div class="mr-2">
            <span class="mr-1 font-[dana-light]">سوالی دارید؟</span>
          </div>
          <div class="mr-2">
            <span class="mr-1 font-[dana-light]">تماس با ما</span>
          </div>
          <div class="mr-2">
            <span class="mr-1 font-[dana-light]">مجله زازا</span>
          </div>
        </div>
        <div>
          <span class="font-[dana-medium]"> ثبت نام متخصصین</span>
        </div>
      </div>
    </div>
  </div>
</template>
