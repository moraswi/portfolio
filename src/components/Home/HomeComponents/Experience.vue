<template>
  <div class="mt-5">
    <!-- margin card -->
    <v-card
      class="transparent hidden-sm-and-down"
      height="120"
      flat
      tile
    ></v-card>

    <p class="grey--text text2">EXPERIENCE</p>
    <h2>WORK EXPERIENCE</h2>

    <v-layout class="mt-16">
      <!-- icon -->
      <v-avatar color="#F2F2F2" size="53">
        <v-avatar color="orange" size="45">
          <v-icon color="white">mdi-lead-pencil</v-icon>
        </v-avatar>
      </v-avatar>

      <v-card class="ml-md-5 ml-1 pa-5" color="#F2F2F2" width="100%" flat>
        <!-- Front-End Developer (Full Time) -->
        <h3>Front-End Developer (Full Time)</h3>

        <!-- Softidoc -->
        <p>Softidoc <span class="grey--text">2022 Feb</span></p>

        <!-- explanation -->
        <p class="mt-10">
          I contribute to the development of both web and mobile applications.
          My responsibilities include crafting visually appealing user
          interfaces, implementing responsive designs, and ensuring seamless
          user experiences across various platforms.
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
        <h3>Test Analyst (Part Time)</h3>

        <!-- Softidoc -->
        <p>Softidoc <span class="grey--text">2022 Feb</span></p>

        <!-- explanation -->
        <p class="mt-10">
          As a Test Analyst, my role involves implementing comprehensive testing
          strategies to ensure the quality and reliability of our software
          products. I meticulously plan and execute test cases, collaborate with
          cross-functional teams to identify and resolve issues, and contribute
          to the seamless deployment of robust applications through rigorous
          testing processes.
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
