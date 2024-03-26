<script lang="ts" setup>
import ServicesCategory from '@/components/specific/ServicesPage/ServicesCategory/index.vue'
</script>

<template>
  <div class="main-page">
    <div class="page-shadow">
      <div class="mt-14 bg-sec-gray h-full">
        <ServicesCategory />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  min-height: 100vh;
  position: relative;
  .page-shadow {
    height: 500px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(252, 186, 46, 0.738813025210084) 0%,
      rgba(255, 255, 255, 1) 82%
    );
  }
}
</style>
