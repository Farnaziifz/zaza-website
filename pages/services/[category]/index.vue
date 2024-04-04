<script setup lang="ts">
import { ref, defineAsyncComponent, computed } from 'vue'
import ServicesCategory from '@/components/specific/ServicesPage/ServicesCategory/index.vue'
import ExerciseIcon from '@/assets/images/icons/Exercise.png'
import WorkerIcon from '@/assets/images/icons/worker.png'
import ModalComponent from '@/components/shared/Modal/index.vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}
const datePicker = computed(() => {
  if (process.client) {
    return defineAsyncComponent(() => import('vue3-persian-datetime-picker'))
  }
})
</script>
<template>
  <div class="main-page pt-14">
    <div class="page-shadow"></div>
    <div>
      <ServicesCategory />
      <div
        class="container grid lg:grid-cols-2 lg:gap-4 grid-cols-1 gap-y-4 px-4 lg:px-0 "
      >
        <div
          class="border rounded border-primary bg-white p-10 flex flex-col items-center justify-center"
        >
          <img :src="ExerciseIcon" alt="" class="lg:w-[120px] w-[80px]" />
          <p class="text-[22px] font-[dana-bold] mt-5">ارسال درخواست فوری</p>
          <p class="text-lg font-[dana-light] text-center mt-10">
            در صورتی که شما از سرویس درخواست فوری استفاده کنید، درخواست شما برای
            تمامی متخصصین آنلاین و در دسترس ما ارسال خواهد و شما میتوانید از بین
            پیشنهادات ارایه شده یک متخصص را انتخاب کنید این سرویس برای زمانی است
            که شما نیاز فوری به متخصص یا تعمیرکار دارید
          </p>
          <button
            class="bg-white border border-primary rounded text-primary w-full py-4 mt-10 focus:outline-none"
            @click="openModal"
          >
            ارسال درخواست
          </button>
        </div>
        <div
          class="border rounded border-primary bg-white p-10 flex flex-col items-center justify-center"
        >
          <img :src="WorkerIcon" alt="" class="lg:w-[120px] w-[80px]" />
          <p class="text-[22px] font-[dana-bold] mt-5">
            درخواست گزینشی پیمانکار
          </p>
          <p class="text-lg font-[dana-light] text-center mt-10">
            در صورتی که از سرویس درخواست گزینشی پیمانکار استفاده کنید. این امکان
            را دارید تا سر فرصت پیمانکار موزد نظر خود را انتخاب کرده و درخواست
            خود را ارسال کنید. پس از بررسی، متخصص ما قیمت و زمان پیشنهادی خود را
            برای شما ارسال میکند و شما پرداخت میکنید
          </p>
          <button
            class="bg-white border border-primary rounded text-primary w-full py-4 mt-10 focus:outline-none"
          >
            مشاهده متخصصین
          </button>
        </div>
      </div>
    </div>
    <ModalComponent :isOpen="isModalOpen" @update:isOpen="isModalOpen = $event">
      <p class="text-[22px] font-[dana-bold] mb-5">ارسال درخواست فوری</p>
      <p class="text-lg font-[dana-regular] mb-4">مشتری گرامی</p>
      <p class="lg:text-lg text-sm font-[dana-regular] lg:font-[dana-regular] mb-4 text-justify">
        لطفا در خواست خود را به صورت کامل و با حداکثر جزییات در باکس زیر
        بنویسید. توضیحات شما می‌تواند به همکاران و پیمانکاران ما در تخمین زمان و
        قیمت کمک بیشتری بکند. همچنین شما میتوانید زمان مناسب برای خود را انتخاب
        کنید
      </p>
      <textarea
        class="w-full rounded border border-sec-gray focus:outline-none indent-4 py-2 resize-none"
        placeholder="توضیحات درخواست"
      />
      <client-only>
        <component :is="datePicker" color="#FCBA2E" label=" " />
      </client-only>
      <div class="w-full flex justify-end">
        <button class="px-8 py-4 bg-primary focus:outline-none rounded mt-4">
          ارسال درخواست
        </button>
      </div>
    </ModalComponent>
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
