<template>
  <v-card width="900" class="transparent" flat>
    <!-- margin card -->
    <v-card
      class="transparent hidden-sm-and-down"
      height="80"
      flat
      tile
    ></v-card>
    <v-layout align-center justify-center>
    
      <div class="mt-md-5">
        
        <!-- title desktop view -->
        <div class="hidden-sm-and-down">
        <p class="grey--text text2">ABOUT ME</p>
        <h2 class="mt-n3">WHO AM I?</h2>
      </div>

       <!-- title mobile view -->
      <v-row class="hidden-md-and-up">
      <v-col class="text-center" xs12>
        <p class="grey--text text2 mt-12">ABOUT ME</p>
        <h2 class="mt-n3">WHO AM I?</h2>
      </v-col>
    </v-row>

        <p class="mt-5">
          <span class="blue--text"
            ><strong> Hi i'm Lekgothoane Moraswi,</strong></span
          >
          a Front-End Developer & Test Analyst.
        </p>
        <p>
          Thrives on creating solutions from the ground up and possesses a keen
          interest in web development, excelling in the construction of
          maintainable applications for diverse needs.
        </p>
        <p>
          Finally, I am open to learning new things. I am a cooperative,
          creative individual committed to developing cutting-edge, safe, and
          user-friendly software.
        </p>
      </div>
      <!-- </v-flex> -->
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "ProfessionalSummary",

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
