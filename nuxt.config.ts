import { defineNuxtConfig } from 'nuxt/config'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    'vuetify-nuxt-module'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
