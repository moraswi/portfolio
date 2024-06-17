<template>
  <div class="mt-5">
    <!-- margin card -->
    <v-card
      class="transparent hidden-sm-and-down"
      height="30"
      flat
      tile
    ></v-card>
    <!-- title desktop view -->
    <div class="hidden-sm-and-down">
      <p class="grey--text text2 mt-14">EDUCATION</p>
      <h2 class="mt-n3">QUALIFICATIONS AND DEGREES</h2>
    </div>

    <!-- title mobile view -->
    <v-row class="hidden-md-and-up">
      <v-col class="text-center" xs12>
        <p class="grey--text text2 mt-3">EDUCATION</p>
        <h2 class="mt-n3">QUALIFICATIONS AND DEGREES</h2>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col cols="12" md="6">
        <v-card>
          <div class="px-5 py-3 orange">
            <h3 class="white--text">BSc Methematical Science</h3>
          </div>
          <div class="pa-5">
            <p>
              I attended the University of Limpopo in 2018 and successfully
              graduated in 2021. My major fields of study were Computer Science
              and Statistics
            </p>
            <ul>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Data Analysis</li>
              <li>Algorithm Design and Analysis</li>
              <li>Database Management and SQL</li>
              <li>Machine Learning and Predictive Modeling</li>
              <li>Statistical Programming</li>
            </ul>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <div class="px-5 py-3 orange">
            <h3 class="white--text">Secondary School! Science Stream</h3>
          </div>
          <div class="pa-5">
            <p>
              I attended Phunyako High School and completed my matriculation in
              2016.
            </p>
            <ul>
              <li>Physical Sciences</li>
              <li>Mathematics</li>
              <li>Life Sciences</li>
              <li>Tourism</li>
              <li>Sepedi</li>
              <li>English</li>
              <li>Life Oriantation</li>
            </ul>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "EducationSection",

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
