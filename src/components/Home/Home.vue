<template>
  <div>
    <v-container>
      <!-- Intro -->
      <Intro />

      <!-- ProfessionalSummary -->
      <ProfessionalSummary />

      <!-- WhatIDo -->
      <WhatIDo />

      <!-- Education -->
      <Education />

      <!-- Experience -->
      <Experience />

      <!-- Projects -->
      <Projects />
    </v-container>

    <!-- BottomBar -->
    <BottomBar />
  </div>
</template>

<script>
import Intro from "@/components/Home/HomeComponents/Intro.vue";
import ProfessionalSummary from "@/components/Home/HomeComponents/ProfessionalSummary.vue";
import WhatIDo from "@/components/Home/HomeComponents/WhatIDo.vue";
import Education from "@/components/Home/HomeComponents/Education.vue";
import Experience from "@/components/Home/HomeComponents/Experience.vue";
import Projects from "@/components/Home/HomeComponents/Projects.vue";
import BottomBar from "@/shared/BottomBar.vue";

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
    BottomBar,
  },
};
</script>

<style lang="scss" scoped>
//
</style>
