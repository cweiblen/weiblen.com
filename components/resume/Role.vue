<template>
  <v-container>
    <v-row no-gutters>
      <v-col><p class="text-h5 font-weight-bold">{{ role.title }}</p></v-col>
      <v-col><p class="text-h5 text-right">{{ role.dates }}</p></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col><p class="text-h5">{{  role.company }}</p></v-col>
      <v-col><p class="text-h5 text-right">{{ role.location }}</p></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-list density="compact">
          <v-list-item v-for="(item, i) in items" :key="i" class="text-wrap text-body-1" slim>
            <v-icon>mdi-circle-small</v-icon>
            {{ item }}
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  role: {
    title: String,
    dates: String,
    company: String,
    location: String,
  },
  items: Array,
})
</script>