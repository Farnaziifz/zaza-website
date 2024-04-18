<script setup lang="ts">
import { useRoute } from 'vue-router'
const currentRouteName = useRoute().name
</script>

<template>
  <div class="py-7 fixed bottom-0 w-full bg-white block lg:hidden my-shadow">
    <div
      v-if="currentRouteName === 'services-category-peymankar-id'"
      class="container mb-5 px-5 border-b border-sec-gray pb-4"
    >
      <button class="bg-primary rounded w-full py-2">درخواست همکاری</button>
    </div>
    <div class="container px-4 grid grid-cols-4">
      <div class="text-center">
        <Icon
          name="material-symbols-light:production-quantity-limits"
          size="24px"
        />
        <p class="mt-1 text-xs">جستجو کالا</p>
      </div>
      <div class="text-center">
        <Icon name="mdi-light:format-align-justify" size="24px" />
        <p class="mt-1 text-xs">دسته بندی کالاها</p>
      </div>
      <div class="text-center">
        <NuxtLink to="/services">
          <Icon
            name="healthicons:factory-worker-outline"
            color="black"
            size="24px"
          />
        </NuxtLink>
        <p class="mt-1 text-xs">پیمانکاران</p>
      </div>
      <div class="text-center">
        <NuxtLink to="/login">
          <Icon name="mdi-light:account" color="black" size="32px" />
        </NuxtLink>
        <p class="mt-1 text-xs">حساب کاربری</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-shadow {
  box-shadow: 4px -4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}
</style>
