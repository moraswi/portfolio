<template>
  <div class="ml-md-5 pb-7 pr-4">
    <v-container>
      <section id="section1">
        <!-- Intro -->
        <Intro />
      </section>

      <!-- ProfessionalSummary -->
      <ProfessionalSummary />

      <!-- WhatIDo -->
      <WhatIDo />

      <v-container id="section2">
        <!-- Education -->
        <Education /> </v-container
      >section>

      <!-- Experience -->
      <Experience />

      <!-- Projects -->
      <Projects />
    </v-container>

    <!-- BottomBar -->
    <!-- <BottomBar /> -->
  </div>
</template>

<script>
import Intro from "@/components/Home/HomeComponents/Intro.vue";
import ProfessionalSummary from "@/components/Home/HomeComponents/ProfessionalSummary.vue";
import WhatIDo from "@/components/Home/HomeComponents/WhatIDo.vue";
import Education from "@/components/Home/HomeComponents/Education.vue";
import Experience from "@/components/Home/HomeComponents/Experience.vue";
import Projects from "@/components/Home/HomeComponents/Projects.vue";
// import BottomBar from "@/shared/BottomBar.vue";

export default {
  name: "HomePage",

  data: () => ({}),
  components: {
    Intro,
    ProfessionalSummary,
    WhatIDo,
    Education,
    Experience,
    Projects,
    // BottomBar,
  },
};
</script>

<style lang="scss" scoped>
//
</style>
