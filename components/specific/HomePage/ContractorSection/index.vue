<script setup lang="ts">
import man2 from '@/assets/images/man/man-2.png'
</script>

<template>
  <div class="grid grid-cols-2 gap-4 container">
    <div>
      <img :src="man2" alt="" />
    </div>
    <div class="flex flex-col justify-center h-full items-center">
      <p class="font-[dana-bold] text-[32px]">دنبال متخصص میگردید؟</p>
      <p class="font-[dana-bold] text-[24px] mt-12">
        برترین متخصصین در سراسر کشور را اینجا میتونید پیدا کنید
      </p>
      <button class="bg-primary p-4 focus:outline-none rounded mt-12">
        انتخاب متخصص
      </button>
    </div>
  </div>
</template>
