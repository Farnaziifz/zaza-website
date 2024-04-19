<script setup lang="ts">
import starIcon from '@/assets/images/icons/Star.png'
import About from '@/components/specific/Peymankar/About/index.vue'
import Album from '@/components/specific/Peymankar/Album/index.vue'
import Comments from '@/components/specific/Peymankar/Comments/index.vue'
import { type contractorItem } from '~/core/types/contractor.type'
import { useRoute } from 'vue-router'
import { getConcData } from '@/logics/specifics/contractor.handler'
const route = useRoute()
const concData: Ref<contractorItem> = ref({
  id: 0,
  aggregate_rate: 0,
  created_at: '',
  updated_at: '',
  father_name: '',
  birth_place: '',
  bio: '',
  user: {
    id: 0,
    first_name: '',
    last_name: '',
    avatar: '',
  },
})

onBeforeMount(async () => {
  concData.value = await getConcData(route.params.id)
})
</script>

<template>
  <div class="main-page pt-14">
    <div class="page-shadow"></div>
    <div class="container mt-14">
      <div class="flex">
        <div>
          <img :src="concData.user.avatar" alt="" class="w-[200px] rounded" />
        </div>
        <div class="flex flex-col justify-between pr-4">
          <div>
            <p class="text-[24px] font-[dana-demi] mb-4">
              {{ concData.user.first_name }} {{ concData.user.last_name }}
            </p>
            <p class="text-[#686868] font-[dana-demi] text-md">
              <span v-for="item in concData.tag">{{ item.title }}</span
              >,
            </p>
          </div>
          <div>
            <p class="flex text-primary items-center">
              <span class="text-xs ml-1"
                >امتیاز {{ concData.aggregate_rate }}/5</span
              >
              <img :src="starIcon" alt="" class="w-[16px]" />
            </p>
          </div>
        </div>
      </div>
      <div
        class="w-full bg-white rounded p-4 mt-14 my-shadow flex justify-between items-center"
      >
        <div class="w-full text-center lg:text-right">
          <a href="#about" class="decoration-none font-[dana-demi] text-md ml-4"
            >درباره</a
          >
          <a href="#album" class="decoration-none font-[dana-demi] text-md ml-4"
            >آلبوم تصاویر</a
          >
          <a
            href="#comment"
            class="decoration-none font-[dana-demi] text-md ml-4"
            >بازخورد همکاری‌ها</a
          >
        </div>
        <div class="hidden lg:block">
          <button class="bg-primary px-5 py-2 font-[dana-bold] rounded">
            درخواست همکاری
          </button>
        </div>
      </div>
      <About
        class="mt-14"
        id="about"
        :fistname="concData.user.first_name"
        :lastname="concData.user.last_name"
        :about="concData.bio"
        :tag="concData.tag"
      />
      <Album
        class="mt-14"
        id="album"
        :fistname="concData.user.first_name"
        :lastname="concData.user.last_name"
        :gallery="concData.gallery"
      />
      <Comments class="mt-14" id="comment" />
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
