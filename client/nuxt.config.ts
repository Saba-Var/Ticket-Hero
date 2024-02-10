export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    public: {
      BACKEND_API_URL: process.env.BACKEND_API_URL,
    },
  },
})
