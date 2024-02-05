<template>
  <v-container>
    <v-row>
      <v-col>
        <p class="text-h4 text-left font-weight-bold">Additional Skills</p>
      </v-col>
    </v-row>
    <v-row>
      <v-list density="compact">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-icon>mdi-circle-small</v-icon>
          <span class="text-body-1 font-weight-bold">{{ item.category }}:&nbsp;</span>
          <span class="text-body-1">{{ item.skills }}</span>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>  
</template>

<script setup>
const items =[
      {
        category: "Cloud Providers",
        skills:  "AWS, VPC, EC2, Azure, Rackspace"
      },
      {
        category: "Languages",
        skills:  "Java, JavaScript, Bash, Python, Scala"
      },
      {
        category: "Frameworks",
        skills:  "Vue, ReactJS, Angular, Spring, Dropwizard, Quarkus, Ruby"
      },
      {
        category: "IaC",
        skills:  "Terraform, CloudFormation"
      },
      {
        category: "CI/CD",
        skills:  "ArgoCD, Jenkins, GitHub Actions, Bitbucket Pipelines, Ansible, Chef, AWS Systems Manager"
      },
      {
        category: "Containers",
        skills:  "Kubernetes, ECS Fargate, Docker, Podman, Helm"
      },
      {
        category: "Databases",
        skills:  "Snowflake, PostgreSQL, MySQL, Oracle, MongoDB, RDS, Aurora"
      },
      {
        category: "Monitoring",
        skills:  "Prometheus, Grafana, Datadog, NewRelic, Dynatrace, Sentry, Zipkin, Jaeger"
      },
      {
        category: "Security",
        skills:  "Crowdstrike, SentinelOne, Snyk, AWS Security Hub, AWS Inspector, Amazon GuardDuty"
      },
    ]
</script>
