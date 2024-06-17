<template>
  <div class="pb-7">
    <!-- Intro -->
    <section class="hidden-md-and-up" id="home">
      <Intro />
    </section>

    <v-container>
      <section class="hidden-sm-and-down" id="home">
        <Intro />
      </section>
      <!-- ProfessionalSummary -->
      <section id="about">
        <ProfessionalSummary />
      </section>

      <!-- WhatIDo -->
      <section id="services">
        <WhatIDo />
      </section>

      <!-- Education  -->
      <section id="education">
        <Education />
      </section>

      <!-- Experience -->
      <section id="experiance">
        <Experience />
      </section>

      <!-- Experience -->
      <section id="skills">
        <Skills />
      </section>

      <!-- Projects -->
      <section id="projects">
        <Projects />
      </section>

      <!-- Contacts -->
      <section id="contacts">
        <Contacts />
      </section>
    </v-container>
  </div>
</template>

<script>
import Intro from "@/components/Home/HomeComponents/Intro.vue";
import ProfessionalSummary from "@/components/Home/HomeComponents/ProfessionalSummary.vue";
import WhatIDo from "@/components/Home/HomeComponents/WhatIDo.vue";
import Education from "@/components/Home/HomeComponents/Education.vue";
import Experience from "@/components/Home/HomeComponents/Experience.vue";
import Skills from "@/components/Home/HomeComponents/Skills.vue";
import Projects from "@/components/Home/HomeComponents/Projects.vue";
import Contacts from "@/components/Home/HomeComponents/Contacts.vue";

export default {
  name: "HomePage",

  data: () => ({}),
  components: {
    Intro,
    ProfessionalSummary,
    WhatIDo,
    Education,
    Experience,
    Skills,
    Projects,
    Contacts,
  },
};
</script>

<style lang="scss" scoped>
//
</style>
