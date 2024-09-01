// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
  '~/assets/scss/style.scss' 
],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_variables.scss";
          `
        }
      }
    }
  },
  modules: ["@nuxt/icon", "nuxt-swiper", "@pinia/nuxt", '@pinia-plugin-persistedstate/nuxt'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'thumbs'], 
  },
  build:{
      transpile: ['vue-toastification'],
  },
  icon: {
    provider: 'iconify',
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons'
      },
    ],
  },
})