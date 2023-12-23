<template>
  <div class="mt-16">
    <p class="grey--text">WHAT I DO?</p>
    <h2>ABOVE ARE SOME OF</h2>
    <h2>MY EXPERTISE</h2>

    <v-row class="mt-16">
      <v-col cols="12" md="4">
        <v-card class="pa-4 web-card text-center">
          <h3>WEB</h3>

          <p class="mt-7">
            Proficient in web development, with a focus on creating responsive
            and visually appealing user interfaces using HTML, ReactJS, VueJS,
            CSS, JavaScript act.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4 test-analyst-card text-center">
          <h3>TEST ANALYST</h3>

          <p class="mt-7">
            Accomplished Test Analyst with a proven track record of ensuring
            software quality through comprehensive testing strategies,
            meticulous test planning, and precise execution, contributing to the
            delivery of reliable and high-quality software solutions.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4 app-card text-center">
          <h3>MOBILE APPLICATION</h3>

          <p class="mt-7">
            Proficient in mobile app development, adept at designing and
            implementing robust and user-friendly applications for both Android
            and iOS platforms using technologies such as React Native and
            Flutter.
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "IntroSection",

  data: () => ({}),
};
</script>

<style lang="scss" scoped>
//web-card
.web-card {
  border-bottom: 3px solid red;
}

//test-analyst-card
.test-analyst-card {
  border-bottom: 3px solid orange;
}

.app-card {
  border-bottom: 3px solid green;
}
</style>
