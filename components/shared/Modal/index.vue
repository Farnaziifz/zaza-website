<script setup lang="ts">
type modalProps = {
  isOpen: boolean
}

const props = defineProps<modalProps>()

const emits = defineEmits(['update:isOpen'])

const closeModal = () => {
  emits('update:isOpen', false)
}
</script>

<template>
  <transition name="modal">
    <div
      class="fixed inset-0 flex items-center justify-center z-50"
      v-if="props.isOpen"
    >
      <div class="absolute inset-0 bg-[#818281] opacity-50"></div>
      <div
        class="bg-white rounded-lg lg:p-8 lg:w-[80%] w-[95%] absolute z-51 p-3"
      >
        <div class="flex justify-end items-center mb-4">
          <button @click="closeModal" class="focus:outline-none">
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
