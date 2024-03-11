<script lang="ts" setup>
import HeaderComponent from "@/components/MainHeader/index.vue";
</script>

<template>
  <div>
    <HeaderComponent />
    <slot />
    <p>salam man footeram</p>
  </div>
</template>
