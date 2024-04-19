<script setup lang="ts">
import Logo from '@/assets/images/logo.svg'
import cert1 from '@/assets/images/cert1.png'
import cert2 from '@/assets/images/cert2.png'
import cert3 from '@/assets/images/cert3.png'
</script>

<template>
  <div class="w-full bg-[#F7F7F7] mt-14">
    <div
      class="container grid lg:grid-cols-12 gap-4 py-20 grid-cols-1 px-2 lg:px-0"
    >
      <div class="col-span-4 flex flex-col justify-center lg:justify-start">
        <img :src="Logo" alt="zaza kala" class="mb-4 w-40 mx-auto" />
        <p class="mb-4 font-[dana-light] text-justify">
          دفتر مرکزی: : تهران، میدان حسن آباد، روبروی درب غربی پارک شهر، کوچه
          کاوه زهره کرمانی
        </p>
        <p class="mb-4 font-[dana-light]">
          انبار و فروشگاه: : تهران، جاده رباط‌کریم به شهریار، پلاک ۱۱۱
        </p>
        <p class="mb-4 font-[dana-light]">info@zazakala.com</p>
      </div>
      <div class="col-span-4 lg:col-span-3 flex justify-center">
        <div class="flex flex-col justify-start">
          <p class="my-10 font-[dana-bold] lg:block hidden">لینک‌های مفید</p>
          <NuxtLink to="/privacy" class="mb-4 text-center lg:text-right"
            >حریم خصوصی</NuxtLink
          >
          <NuxtLink to="/faq" class="mb-4 text-center lg:text-right"
            >سوالات متداول</NuxtLink
          >
          <NuxtLink to="/terms" class="mb-4 text-center lg:text-right"
            >شرایط و ضوابط</NuxtLink
          >
          <NuxtLink to="/" class="mb-4 text-center lg:text-right"
            >ثبت نام متخصصین</NuxtLink
          >
        </div>
      </div>
      <div class="col-span-4 lg:col-span-5 my-0 lg:my-10">
        <div class="w-full h-[60px] hidden lg:block">
          <div class="border h-full rounded border-sec-gray flex items-center">
            <input
              type="number"
              class="w-full h-full indent-4 focus:outline-none bg-transparent"
              placeholder="شماره موبایل خود را وارد کنید"
            />
            <button
              class="h-full w-60 bg-primary text-white flex items-center justify-center"
            >
              <span class="text-white">درخواست مشاوره</span>
            </button>
          </div>
        </div>
        <div class="my-4 text-center lg:text-right">
          <NuxtLink to="/about" class="mb-4 text-center lg:text-right"
            >درباره ما</NuxtLink
          >
        </div>
        <div class="my-4 text-center lg:text-right">
          <NuxtLink to="/contact" class="mb-4 text-center lg:text-right"
            >تماس با ما</NuxtLink
          >
        </div>
        <div class="flex w-full justify-between mt-4">
          <img :src="cert1" alt="" />
          <a
            referrerpolicy="origin"
            target="_blank"
            href="https://trustseal.enamad.ir/?id=358706&amp;Code=Y7Lej2Z0gre6RZcvBnXY"
          >
            <img
              data-lazyloaded="1"
              data-placeholder-resp="125x136"
              :src="cert2"
              referrerpolicy="origin"
              :data-src="cert2"
              alt="Enamad"
              id="Y7Lej2Z0gre6RZcvBnXY"
              style="width: 100px; height: 100px; cursor: pointer"
              data-ll-status="loaded"
              class="entered litespeed-loaded"
            />
          </a>
          <a
            referrerpolicy="origin"
            target="_blank"
            href="https://apinovin.iranianasnaf.ir/parvaneh/62f99d03-ba38-47fd-afa9-78b6c85ae8f7/html"
          >
            <img
              data-lazyloaded="1"
              data-placeholder-resp="168x222"
              :src="cert3"
              referrerpolicy="origin"
              :data-src="cert3"
              alt="kasbokar"
              style="width: 100px; height: 100px; cursor: pointer"
              data-ll-status="loaded"
              class="entered litespeed-loaded"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white py-4 flex justify-center">
    کلیه حقوق مادی و معنوی سایت برای زازا کالا محفوظ میباشد
  </div>
</template>
