<script setup lang="ts">
import tem3 from '@/assets/images/temp/3.png'
import BlogCard from '@/components/shared/Cards/BlogCard/index.vue'
import CommentItem from '@/components/shared/CommentItem/index.vue'
</script>

<template>
  <div class="container px-4 lg:px-0">
    <div class="mt-20 lg:mt-14">
      <span class="bg-primary p-2 rounded-lg text-xs">دسته بندی</span>
    </div>
    <p class="mt-10">تایتب</p>
    <div class="flex mt-5">
      <div class="flex items-center">
        <p class="text-sm text-text-gray">icon</p>
        <p class="mr-2 text-sm text-text-gray">ارسال توسط محمد</p>
      </div>

      <div class="w-px h-6 bg-sec-gray mx-2"></div>
      <p class="mr-2 text-sm text-text-gray">تاریخ امروز</p>
    </div>
    <div class="w-full h-img mt-4">
      <img :src="tem3" alt="" class="w-full h-full object-cover rounded-lg" />
    </div>
    <p class="mt-10 text-justify">
      لوله کشی استخر به عنوان رگ‌های حیاتی نامرئی استخر، نقش کلیدی در کارکرد
      صحیح این فضاهای آبی دارند و انجام آن، نیاز به مهارت، تجربه و هنر دارد و
      البته باید تجهیزات درست و باکیفیت آن هم فراهم شود. با این مقدمه کوتاه ما
      در زازاکالا سعی داریم نکات اصلی و کاملی از لوله کشی استخر را در اختیار شما
      قرار دهیم تا با دید بازتری اقدام به خرید تجهیزات کرده و کارشناس مناسب را
      انتخاب کنید. پس بدون معطلی برویم به سراغ کشف رگ‌های حیاتی استخرها. چرا
      لوله کشی صحیح استخر مهم است؟ لوله کشی استخر یکی از مراحل مهم در ساخت و
      نگهداری استخراست. این سیستم وظیفه انتقال آب استخر را به سیستم تصفیه،
      گرمایش و سایر تجهیزات استخر برعهده دارد. فرآیند لوله کشی باید به درستی
      انجام شود تا از نشتی آب جلوگیری شود و آب استخر به طور مداوم و با کیفیت
      بالا در گردش باشد. انواع لوله کشی استخر لوله کشی در استخرها به دو روش
      توکار و روکار انجام می شود. در روش توکار، لوله ها در داخل دیوارها و کف
      استخر قرار می‌گیرند. این روش زیبایی بهتری به محیط استخر می‌دهد، اما هزینه
      بیشتری دارد و البته انجام آن دشوارتر است. در روش روکار، لوله‌ها روی
      دیوارها و کف استخر قرار می‌گیرند. این روش از نظر هزینه و اجرا آسان تر است،
      اما از نظر زیبایی نظر شما را جلب نخواهد کرد. همچنین لوله کشی برای بخش‌های
      دیگری به جز محیط استخر لازم است که در ادامه درباره آنها صحبت کرده‌ایم:
      لوله کشی تصفیه خانه استخر لوله کشی تصفیه خانه استخر وظیفه انتقال آب استخر
      به سیستم تصفیه را برعهده دارد. این سیستم شامل فیلترهای شنی، فیلترهای
      دیسکی، سیستم‌های تصفیه UV و سایر تجهیزات تصفیه است. لوله کشی تصفیه خانه
      استخر باید به گونه‌ای انجام شود که آب در سیستم تصفیه به طور یکنواخت و بدون
      نشتی جریان داشته باشد.
    </p>
    <div class="mt-14">
      <h3 class="text-xl font-[dana-demi] mb-4">مطالب مرتبط</h3>
      <div class="grid lg:grid-cols-4 grid-cols-1 gap-8 px-4 lg:px-0">
        <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
        <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
        <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
        <BlogCard :img="tem3" title="لوله کشی استخهر" date="بهمن ۴۰۲" :id="1" />
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
