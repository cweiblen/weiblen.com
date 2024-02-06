<template>
  <v-container >
    <v-container>
      <p class="text-h3 text-center font-weight-bold" center>Charles Weiblen</p>
      <p class="text-subtitle text-center">Wrentham, MA 02093 • charlie@weiblen.com • (508)726-9807</p>
    </v-container>
    <v-divider></v-divider>
    <v-container>
      <p class="text-h4 text-left font-weight-bold">Summary of Qualifications</p>
      <p class="text-body-1">A Technical Manager and Consultant with 20+ years of experience in DevOps, SRE, cloud operations, project management, and cyber security. A proven track record of delivering improvements to business performance and customer experience for enterprise organizations. Adept at leading and building high-performance technical teams to create innovative technology solutions.</p>
    </v-container>
    <v-divider></v-divider>
    <ResumeWorkExperience />
    <v-divider></v-divider>
    <ResumeAdditionalSkills />
    <v-divider></v-divider>
    <ResumeEducation />
    <v-layout-item model-value position="top" class="text-end" size="88">
      <div class="ma-4">
        <v-btn 
        icon="mdi-download" 
        size="large" 
        color="secondary" 
        elevation="4" 
        href="/content/CharlesWeiblenResume.pdf" 
        target="_blank"
        download />
      </div>
    </v-layout-item>
  </v-container>
</template>

<script setup>
function download() {
  const link = document.createElement('a')
  link.href = '/content/CharlesWeiblenResume.pdf'
  link.download = 'CharlesWeiblenResume.pdf'
  link.target = '_blank'
  link.click()
}
</script>