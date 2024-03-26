<script lang="ts" setup>
import HeaderComponent from '@/components/shared/MainHeader/index.vue'
import FooterComponent from '@/components/shared/MainFooter/index.vue'
import MobileMenu from '@/components/shared/MobileMenu/index.vue'
</script>

<template>
  <div>
    <HeaderComponent />
    <slot />
    <FooterComponent/>
    <MobileMenu />
  </div>
</template>
