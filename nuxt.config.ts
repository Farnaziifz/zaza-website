// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-swiper', 'nuxt-icon'],
  swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    // ...others
    // { src: '~/plugins/datePicker', mode: 'client' },
  ],
})
