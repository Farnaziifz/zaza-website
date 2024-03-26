<script setup lang="ts">
import man2 from '@/assets/images/man/man-3.png'
</script>

<template>
  <div class="grid lg:grid-cols-2 gap-4">
    <div class="flex flex-col justify-center h-full items-center">
      <div>
        <p class="font-[dana-bold] text-[32px] text-center">
          دنبال متخصص میگردید؟
        </p>
        <p class="font-[dana-bold] text-[24px] mt-12 text-center">
          برترین متخصصین در سراسر کشور را اینجا میتونید پیدا کنید
        </p>
      </div>
      <button
        class="bg-primary p-4 focus:outline-none lg:rounded -mt-10 lg:mt-10 w-full lg:w-auto"
      >
        انتخاب متخصص
      </button>
    </div>
    <div>
      <img :src="man2" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
.has-line {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 30px;
    height: 2px;
    background: #fff;
  }
}
</style>
