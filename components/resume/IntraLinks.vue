<template>
  <ResumeRole :role="role" :items="items" />
</template>

<script>
  export default {
    data: () => ({
      role: {
        title: "Vice President Cloud Operations",
        dates: "April 2006 - January 2014",
        company: "IntraLinks, Inc.",
        location: "Waltham, MA"
      },
      items: [
        "Directed the management team and technical staff in Systems Engineering and Performance Engineering, which included supporting two data centers comprising approximately 60 physical servers and 150 virtualized containers (Solaris and Linux).", 
        "Provided tier 3 support, troubleshot complex technical issues, and conducted root cause analysis for application and infrastructure problems.", 
        "Initiated process improvements for Problem and Incident Management, based on ITIL frameworks.", 
        "Implemented Web Application Firewall for protection against DDoS attacks and malicious traffic.", 
        "Defined KPIs and SLAs for system and application monitoring and alerting.", 
      ]
    })
  }
</script>