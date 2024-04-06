<script setup lang="ts">
import ServicesCategory from '@/components/specific/ServicesPage/ServicesCategory/index.vue'
import man5 from '@/assets/images/man/man-5.png'
import PeymankarCard from '@/components/shared/Cards/PeymankdarCard/index.vue'
</script>
<template>
  <div class="main-page pt-14">
    <div class="page-shadow"></div>
    <div class="container">
      <ServicesCategory />
      <div class="lg:grid lg:grid-cols-12 lg:gap-4 px-4 lg:px-0">
        <div class="col-span-4 hidden lg:block">
          <img :src="man5" alt="" />
          <p class="mt-5 font-[dana-bold] text-[22px] text-center">
            متخصص مورد نیاز
          </p>
          <p class="mt-5 font-[dana-bold] text-[22px] text-center">شما</p>
          <p class="mt-5 font-[dana-bold] text-[22px] text-center">
            نزدیک‌تر از همیشه
          </p>
        </div>
        <div class="lg:col-span-8">
          <PeymankarCard />
          <PeymankarCard />
          <PeymankarCard />
          <PeymankarCard />
          <PeymankarCard />
          <PeymankarCard />
        </div>
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
    z-index: -1;
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(252, 186, 46, 0.738813025210084) 0%,
      rgba(255, 255, 255, 1) 82%
    );
  }
}
</style>
