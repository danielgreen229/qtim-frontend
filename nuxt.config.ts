// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  devtools: { enabled: true },
  css: [
    "@/layouts/global.css",
    "@/assets/styles/main.css",
  ],
  runtimeConfig: {
    public: {
      apiBase: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/'
    }
  }
})
