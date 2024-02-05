import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

// import { md3 } from 'vuetify/blueprints'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults: {
      VRow: {
        noGutters: true,
        slim: true
      }
    }
  })
  app.vueApp.use(vuetify)
})
