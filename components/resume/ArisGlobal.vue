<template>
  <ResumeRole :role="role" :items="items" />
</template>

<script>
  export default {
    data: () => ({
      role: {
        title: "Vice President Cloud Operations",
        dates: "February 2022 - September 2023",
        company: "ArisGlobal, LLC",
        location: "Waltham, MA"
      },
      items: [
        "Managed 80+ personnel across various global teams and led operations of cloud infrastructure and co-located data centers, which included overseeing DevOps, SRE, database administration, 24x7 on-call support with an annual cloud infrastructure budget of $15M.",
        "Created and hired a new SRE team, established monitoring standards, and drove implementation of APM and real-user monitoring.",
        "Pioneered GitHub Actions for CI/CD, successfully implemented over 30 new projects, and migrated 20 existing Jenkins jobs, which improved software development times and build reliability.",
        "Introduced automated patch management and vulnerability remediation.",
        "Successfully migrated two customers from a co-located data center to VMware Cloud on AWS, which included managing disaster recovery, business continuity plans, and testing.", 
        "Executed 30+ cost management and optimization projects valued at up to $1M total.", 
      ]
    })
  }
</script>