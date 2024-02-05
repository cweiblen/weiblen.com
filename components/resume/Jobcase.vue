<template>
  <ResumeRole :role="role" :items="items" />
</template>

<script>
  export default {
    data: () => ({
      role: {
        title: "Head of Technical Operations",
        dates: "March 2015 - April 2016",
        company: "Jobcase, Inc.",
        location: "Cambridge, MA"
      },
      items: [
        "Managed all aspects of corporate IT and web site operations for an ad-tech business valued at $300M, introduced and implemented ansible for automated configuration and deployment, and created incident and problem management processes, SLA and KPI monitoring and reporting.", 
        "Performed MySQL database migrations on multi-terabyte databases with zero/minimal downtime.",
      ]
    })
  }
</script>
