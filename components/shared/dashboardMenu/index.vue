<script setup lang="ts">
import { toPersianCurrency } from '~/logics/shared/toPersianCurrency'
</script>

<template>
  <div class="rounded border border-sec-gray p-4">
    <div class="flex justify-between">
      <div>
        <p class="font-[dana-demi] text-lg">فرناز فرضی پور</p>
        <p class="text-text-gray text-sm mt-2">۰۹۲۱۲۰۷۹۳۶۹</p>
      </div>
      <div class="cursor-pointer">
        <Icon
          name="material-symbols-light:edit-square-outline-rounded"
          size="26"
          color="#FCBA2E"
        />
      </div>
    </div>
    <div class="flex justify-between mt-5">
      <p>کیف پول</p>
      <p>{{ toPersianCurrency(2000) }}</p>
    </div>
    <div class="flex justify-between mt-5">
      <p>سطح بندی</p>
      <p class="flex items-end">
        <Icon name="iconoir:badge-check" color="#FCBA2E" size="32"/>
        <p class="text-primary text-xs mr-1">طلایی</p>
      </p>
    </div>
    <div class="w-full border border-sec-gray my-5"></div>
    <div class="flex items-center cursor-pointer">
      <Icon name="ph:shopping-bag-light" size="24"/>
      <p class="mr-1 font-[dana-demi] text-sm">سفارشات</p>
    </div>
      <div class="w-full border border-sec-gray my-5"></div>
    <div class="flex items-center cursor-pointer">
      <Icon name="material-symbols-light:list-alt-outline-sharp" size="24"/>
      <p class="mr-1 font-[dana-demi] text-sm">درخواست‌ها</p>
    </div>
      <div class="w-full border border-sec-gray my-5"></div>
    <div class="flex items-center cursor-pointer">
      <Icon name="material-symbols:my-location" size="24"/>
      <p class="mr-1 font-[dana-demi] text-sm">آدرس‌ها</p>
    </div>
    <div class="w-full border border-sec-gray my-5"></div>
    <div class="flex items-center cursor-pointer">
      <Icon name="material-symbols-light:heart-broken-outline-rounded" size="24"/>
      <p class="mr-1 font-[dana-demi] text-sm">علاقمندی‌ها</p>
    </div>
     <div class="w-full border border-sec-gray my-5"></div>
    <div class="flex items-center cursor-pointer">
      <Icon name="iconamoon:comment-light" size="24"/>
      <p class="mr-1 font-[dana-demi] text-sm">دیدگاه</p>
    </div>
     <div class="w-full border border-sec-gray my-5"></div>
    <div class="flex items-center cursor-pointer">
      <Icon name="cil:exit-to-app" size="24"/>
      <p class="mr-1 font-[dana-demi] text-sm">خروج</p>
    </div>
  </div>
</template>
