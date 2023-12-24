<template>
  <div class="mt-5">
    <!-- margin card -->
    <v-card
      class="transparent hidden-sm-and-down"
      height="120"
      flat
      tile
    ></v-card>
    <p class="grey--text text2">SKILLS</p>
    <h2>SOME OF MY SKILLS</h2>

    <v-row class="mt-3">
      <v-col cols="12" md="3">
        <ul>
          <li>Flutter</li>
          <li>Vue.js</li>
          <li>React.Js</li>
          <li>React Native</li>
          <li>Vuetify</li>
          <li>SQL</li>
        </ul>
      </v-col>

      <v-col cols="12" md="3">
        <ul>
          <li>MySQL Workbench</li>
          <li>Postman</li>
          <li>HTML/CSS</li>
          <li>jAVASCRIPT</li>
          <li>Bootstrap</li>
          <li>Version Control/Git</li>
        </ul>
      </v-col>

      <v-col cols="12" md="3">
        <ul>
          <li>Angular</li>
          <li>C#(begginner)</li>
          <li>Selenium</li>
          <li>UI/UX Design</li>
          <li>Figma</li>
          <li>REST APIs</li>
          <li>Docker</li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SkillsSection",

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
