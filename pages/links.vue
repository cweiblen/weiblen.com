<template>
  <v-container start="top" align="center" fluid class="w-auto">
    <v-list>
      <v-list-item v-for="(item, i) in links" :key="i" :href="item.link" slim :prepend-icon="item.icon" :title="item.text" />
    </v-list>
  </v-container>
</template>

<script setup>
const links = [
  {
    icon: "mdi-linkedin",
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/charlesweiblen/"
  },
  {
    icon: "mdi-github",
    text: "GitHub",
    link: "https://github.com/cweiblen/weiblen.com"
  },
  {
    icon: "mdi-email",
    text: "email",
    link: "mailto:charlie@weiblen.com"
  }
]
</script>
