<template>
  <v-card width="900" class="transparent" flat>
    <!-- margin card -->
    <v-card
      class="transparent hidden-sm-and-down"
      height="200"
      flat
      tile
    ></v-card>
    <v-layout align-center justify-center>
      <!-- <v-flex> -->
      <div class="mt-5">
        <p class="grey--text text2">ABOUT ME</p>
        <h2>WHO AM I?</h2>
        <p class="mt-16">
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
