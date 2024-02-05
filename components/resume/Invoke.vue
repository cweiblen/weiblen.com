<template>
  <ResumeRole :role="role" :items="items" />
</template>

<script>
  export default {
    data: () => ({
      role: {
        title: "Vice President Engineering",
        dates: "April 2016 - February 2022",
        company: "Invoke, Inc.",
        location: "Waltham, MA"
      },
      items: [
        "Led all aspects of Product Development, Engineering, IT, and Information Security for a real-time market research platform and drove improvements to quality, performance, scalability, and UI design.",
        "Implemented world-class security and ensured compliance with strict customer security requirements and audits for large media corporations, including ABC, Disney, Netflix.",
        "Managed product backlog, oversaw all aspects of the Agile SDLC, drove product innovations, identified use cases for new features, and integrated new AI, machine learning, and NLP technologies.",
        "Successfully completed an asset acquisition valued at $10M by MarketCast in 2022, which included performing sell-side due diligence.",
        "Designed a new UI for a real-time market research application to enhance usability for survey participants and modernize look-and-feel.",
        "Integrated AWS chime technology into product to provide real-time video capability.",
      ]
    })
  }
</script>
