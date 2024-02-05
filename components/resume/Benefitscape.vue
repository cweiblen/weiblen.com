<template>
  <ResumeRole :role="role" :items="items" />
</template>

<script>
  export default {
    data: () => ({
      role: {
        title: "Consultant",
        dates: "November 2015 - Present",
        company: "Benefitscape, Inc.",
        location: "Natick, MA"
      },
      items: [
        "Designed and implemented all DevOps processes at Benefitscape, CI/CD, observability, monitoring and alerting, automated build and deployment using GitHub Actions on every pull request and code merge, which improved quality, speed, and bug resolution times.",
        "Integrated Prometheus monitoring with alerting to Slack channel, Grafana dashboards for observability and centralized logging in Amazon Cloudwatch, enabling quick diagnosis of any potential errors.",
        "Spearheaded the development and deployment of new microservices architecture on Kubernetes, which enabled rapid software development and reduced operational overhead of SaaS applications.",
        "Implemented Istio service mesh for improved security posture and observability.",
        "Secured infrastructure, remediated application vulnerabilities, and fully automated environment provisioning and application deployment to satisfy security policies and customer security audits.", 
      ]
    })
  }
</script>
