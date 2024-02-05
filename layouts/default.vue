<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>weiblen.com</v-app-bar-title>
      <v-btn to="/" nuxt> Home </v-btn>
      <v-btn to="/links" nuxt> Links </v-btn>
      <v-btn to="/resume" nuxt> Resume </v-btn>
    </v-app-bar>
    <!-- <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <slot />
    </v-main>
    <v-footer app>©2024 Charles Weiblen</v-footer>
  </v-app>
</template>
