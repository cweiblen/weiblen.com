<template>
    <ResumeRole :role="role" :items="items"/>
</template>

<script>
  export default {
    data: () => ({
      role: {
        title: "Head of Cloud Operations",
        dates: "January 2014 - February 2015",
        company: "CheerNetworks, Inc.",
        location: "Boston, MA"
      },
      items: [
        "Implemented all DevOps and SaaS operations, including infrastructure, CI/CD, security, QA, backup, OS and software patches, application performance monitoring (APM) and internal IT.", 
        "Maintained business critical SaaS infrastructure, for 24-hour operations.", 
        "Established automated backup and disaster recovery procedures for MongoDB and AWS infrastructure.", 
        "Created and implemented security policies for all networks, systems, applications, and customer data.", 
        "Established environment and application monitoring for availability, performance, and security anomalies.", 
      ]
    })
  }
</script>
