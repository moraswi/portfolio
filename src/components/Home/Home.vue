<template>
  <v-container>
    <Intro />
    <ProfessionalSummary />
  </v-container>
</template>

<script>
import Intro from "@/components/Home/HomeComponents/Intro.vue";
import ProfessionalSummary from "@/components/Home/HomeComponents/ProfessionalSummary.vue";

export default {
  name: "HomePage",

  data: () => ({}),
  components: {
    Intro,
    ProfessionalSummary,
  },
};
</script>

<style lang="scss" scoped>
//
</style>
