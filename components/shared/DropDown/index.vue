<script setup lang="ts">
import { ref, defineProps } from 'vue'

interface Option {
  id: number
  label: string
}

const props = defineProps<{
  options: Option[]
  title: string
}>()

const selectedOption = ref<Option>({ id: 0, label: '' }) // Initialize with an empty label
const isOpen = ref(false)
const options = ref(props.options)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: Option) => {
  selectedOption.value = option
  isOpen.value = false
}
</script>

<template>
  <div class="relative">
    <div
      class="inline-flex justify-center w-full text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 cursor-pointer justify-between p-3 border-sec-gray"
      aria-haspopup="listbox"
      @click="toggleDropdown"
    >
      <div>
        <span v-if="!selectedOption.label" class="text-sec-gray">{{
          props.title
        }}</span>
        <span v-else >{{ selectedOption.label }}</span>
      </div>
      <svg
        class="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        :class="{ 'rotate-180': isOpen }"
      >
        <path
          fill-rule="evenodd"
          d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <transition
      name="transition ease-out duration-100"
      enter-active-class="transform opacity-0 scale-95"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <ul
        v-if="isOpen"
        class="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg"
        role="listbox"
        aria-labelledby="listbox-label"
        tabindex="-1"
      >
        <li
          v-for="(option, index) in options"
          :key="option.id"
          @click="selectOption(option)"
          class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
          :class="{
            'bg-indigo-600 text-white': option.id === selectedOption.id,
            'text-gray-900': option.id !== selectedOption.id,
          }"
          role="option"
        >
          <div class="flex items-center">
            <span class="block truncate text-primary">{{ option.label }}</span>
            <span
              v-if="option.id === selectedOption.id"
              class="absolute inset-y-0 right-0 flex items-center pr-4"
            >
              <svg
                class="h-5 w-5 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
/* Styles for dropdown */
.rotate-180 {
  transform: rotate(180deg);
}
</style>
