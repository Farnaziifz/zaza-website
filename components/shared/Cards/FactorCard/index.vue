<script setup lang="ts">
import { toPersianCurrency } from '~/logics/shared/toPersianCurrency'
import temp1 from '@/assets/images/temp/2.png'
</script>
<template>
  <div class="rounded border border-sec-gray p-4 mb-4">
    <p>
      <span class="text-text-gray font-sm">24 آذر ۱۴۰۲</span> .
      <span class="text-text-gray font-sm">کد سفارش</span>:
      <span>۲۲۸۵۴۷۹</span> . <span class="text-text-gray font-sm">مبلغ</span>:
      <span>{{ toPersianCurrency(3000) }}</span> .
      <span class="text-text-gray font-sm">تخفیف</span>:
      <span>{{ toPersianCurrency(30000) }}</span>
    </p>
    <div class="mt-4">
      <img :src="temp1" alt="" class="w-[80px] object-contain" />
    </div>
    <p
      class="w-full flex justify-end mt-4 font-[dana-bold] text-primary cursor-pointer"
    >
      مشاهده فاکتور
    </p>
  </div>
</template>
