<template>
  <v-container>
    <Intro />
    <ProfessionalSummary />
    <WhatIDo />
  </v-container>
</template>

<script>
import Intro from "@/components/Home/HomeComponents/Intro.vue";
import ProfessionalSummary from "@/components/Home/HomeComponents/ProfessionalSummary.vue";
import WhatIDo from "@/components/Home/HomeComponents/WhatIDo.vue";

export default {
  name: "HomePage",

  data: () => ({}),
  components: {
    Intro,
    ProfessionalSummary,
    WhatIDo,
  },
};
</script>

<style lang="scss" scoped>
//
</style>
