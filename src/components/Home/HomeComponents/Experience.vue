<template>
  <div class="mt-5">
    <!-- margin card -->
    <v-card
      class="transparent hidden-sm-and-down"
      height="20"
      flat
      tile
    ></v-card>
    <!-- title desktop view -->
    <div class="hidden-sm-and-down">
      <p class="grey--text text2 mt-12">EXPERIENCE</p>
      <h2 class="mt-n3">CAREER HIGHLIGHTS</h2>
    </div>

    <!-- title mobile view -->
    <v-row class="hidden-md-and-up">
      <v-col class="text-center" xs12>
        <p class="grey--text text2 mt-5">EXPERIENCE</p>
        <h2 class="mt-n3">CAREER HIGHLIGHTS</h2>
      </v-col>
    </v-row>

    <v-layout class="mt-10">
      <!-- icon -->
      <v-avatar color="#F2F2F2" size="53">
        <v-avatar color="orange" size="45">
          <v-icon color="white">mdi-lead-pencil</v-icon>
        </v-avatar>
      </v-avatar>

      <v-card class="ml-md-5 ml-1 pa-5" color="#F2F2F2" width="100%" flat>
        <!-- Group Leader (Full Time) -->
        <h3>Group Leader (Full Time)</h3>

        <!-- Softidoc -->
        <p>Softidoc <span class="grey--text">2024 April - current</span></p>

        <!-- explanation -->
        <p class="mt-5">
          Group Leader managing web and mobile app projects. I lead the team in
          creating easy-to-use interfaces and responsive designs. I also ensure
          strong backend endpoints and smooth user experiences on all platforms,
          while actively maintaining client relationships to foster ongoing
          collaboration
        </p>
      </v-card>
    </v-layout>

    <v-layout class="mt-6">
      <!-- icon -->
      <v-avatar color="#F2F2F2" size="53">
        <v-avatar color="blue" size="45">
          <v-icon color="white">mdi-lead-pencil</v-icon>
        </v-avatar>
      </v-avatar>

      <v-card class="ml-md-5 ml-1 pa-5" color="#F2F2F2" width="100%" flat>
        <!-- Front-End Developer (Full Time) -->
        <h3>Full Stack Developer (Full Time)</h3>

        <!-- Softidoc -->
        <p>Softidoc <span class="grey--text">2022 Feb - current</span></p>

        <!-- explanation -->
        <p class="mt-5">
          Full Stack Developer contributing to web and mobile applications.
          Responsibilities include crafting visually appealing user interfaces,
          implementing responsive designs, developing robust endpoints, and
          ensuring seamless user experiences across various platforms.
        </p>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "ExperienceSection",

  data: () => ({}),
};
</script>

<style lang="scss" scoped>
//
.text2 {
  font-family: "Krub", sans-serif;
  font-size: 15px;
}
</style>
