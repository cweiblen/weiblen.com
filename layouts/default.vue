<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>weiblen.com</v-app-bar-title>
      <v-btn to="/" nuxt icon="mdi-home"></v-btn>
      <v-btn to="/links" nuxt icon="mdi-link"></v-btn>
      <v-btn to="/resume" nuxt icon="mdi-file-account"></v-btn>
    </v-app-bar>
    <!-- <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-main class="d-flex align-top justify-center" style="min-height: 300px;">
      <slot />
    </v-main>
    <v-footer app>©2024 Charles Weiblen</v-footer>
  </v-app>
</template>
