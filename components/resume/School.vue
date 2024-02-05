<template>
  <v-container>
    <v-row no-gutters>
      <v-col><p class="text-h5 font-weight-bold">{{ degree }}</p></v-col>
      <v-col><p class="text-h5 text-right">{{ graduationYear }}</p></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col><p class="text-h5">{{ school }}</p></v-col>
      <v-col><p class="text-h5 text-right">{{ location }}</p></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  school: String,
  graduationYear: String,
  degree: String,
  location: String
})
</script>
