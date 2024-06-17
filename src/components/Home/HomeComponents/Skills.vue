<template>
  <div class="mt-5">
    <!-- margin card -->
    <v-card
      class="transparent hidden-sm-and-down"
      height="60"
      flat
      tile
    ></v-card>

    <!-- title desktop view -->
    <div class="hidden-sm-and-down">
      <p class="grey--text text2">SKILLS</p>
      <h2 class="mt-n3">TECHNICAL MASTERY</h2>
    </div>

    <!-- title mobile view -->
    <v-row class="hidden-md-and-up">
      <v-col class="text-center" xs12>
        <p class="grey--text text2 mt-5">SKILLS</p>
        <h2 class="mt-n3">TECHNICAL MASTERY</h2>
      </v-col>
    </v-row>

    <v-row class="mt-3">
      <v-col cols="12" md="3">
        <ul>
          <li>Flutter</li>
          <li>Vue.js</li>
          <li>React.Js</li>
          <li>React Native</li>
          <li>Vuetify</li>
          <li>SQL</li>
          <li>Python</li>
          <li>Node.js</li>
        </ul>
      </v-col>

      <v-col cols="12" md="3">
        <ul>
          <li>MySQL Workbench</li>
          <li>Postman</li>
          <li>HTML</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>Git</li>
          <li>HTML 5</li>
          <li>ExpressJs</li>
        </ul>
      </v-col>

      <v-col cols="12" md="3">
        <ul>
          <li>Angular</li>
          <li>C#</li>
          <li>Selenium</li>
          <li>UI/UX Design</li>
          <li>Figma</li>
          <li>REST APIs</li>
          <li>CSS</li>
        </ul>
      </v-col>
      <v-col cols="12" md="3">
        <ul>
          <li>Docker</li>
          <li>SASS</li>
          <li>CSS3</li>
          <li>Tailwind CSS</li>
          <li>Typescript</li>
          <li>Nuxt.js</li>
          <li>Vuetify</li>
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
