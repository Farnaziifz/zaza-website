module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: '#F1AF09',
      'sec-gray': '#CCCCCC',
      white: '#fff',
      transparent: 'transparent',
      'light-success': '#C9F9D1',
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
