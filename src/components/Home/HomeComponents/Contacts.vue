<template>
  <div class="mt-8">

        <!-- title desktop view -->
          <div class="hidden-sm-and-down">
              <p class="grey--text text2">CONTACTS</p>
              <h2 class="mt-n3">GET IN TOUCH</h2>
          </div>

       <!-- title mobile view -->
        <v-row class="hidden-md-and-up">
          <v-col class="text-center" xs12>
            <p class="grey--text text2 mt-5">CONTACTS</p>
            <h2 class="mt-n3">GET IN TOUCH</h2>
          </v-col>
        </v-row>

    <!-- email -->
    <v-layout class="mt-7" align-center>
      <v-card
        color="#f2f3f7"
        class="d-flex align-center justify-center"
        width="100"
        height="100"
        flat
      >
        <v-icon color="blue" size="30">mdi-email</v-icon>
      </v-card>

      <h3 class="ml-md-7 ml-3">
        <a href="mailto:moraswip97@gmail.com.com">moraswip97@gmail.com</a>
      </h3>
    </v-layout>

    <!-- email -->
    <v-layout class="mt-md-10 mt-7" align-center>
      <v-card
        color="#f2f3f7"
        class="d-flex align-center justify-center"
        width="100"
        height="100"
        flat
      >
        <v-icon color="blue" size="30">mdi-phone</v-icon>
      </v-card>

      <h3 class="ml-md-7 ml-2">
        <a href="tel:+27 78 929 8447">+27 78 929 8447</a>
      </h3>
    </v-layout>

    <!-- email -->
    <v-layout class="mt-md-10 mt-7" align-center>
      <v-card
        color="#f2f3f7"
        class="d-flex align-center justify-center"
        width="100"
        height="100"
        flat
      >
        <v-icon color="blue" size="30">mdi-map-marker</v-icon>
      </v-card>
      <div>
        <h3 class="ml-md-7 ml-2">Pretoria</h3>
        <p class="ml-md-7 ml-2">Gauteng, South Africa</p>
      </div>
    </v-layout>

    <v-layout class="mt-md-10 mt-7 hidden-md-and-up" justify-space-between>
      <v-icon @click="redirectToLinkedIn" size="35">mdi-linkedin</v-icon>

      <v-icon @click="redirectToGitHub" size="35">mdi-github</v-icon>

      <v-icon @click="redirectToEmail" size="35">mdi-email</v-icon>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "ContactsSection",

  data: () => ({
    // redirectToLinkedIn
    redirectToLinkedIn() {
      window.open(
        "https://www.linkedin.com/in/moraswi-lekgothoane-8b44961b7/",
        "_blank"
      );
    },

    // redirectToGitHub
    redirectToGitHub() {
      window.open("https://github.com/moraswi", "_blank");
    },

    // redirectToEmail
    redirectToEmail() {
      window.open("mailto:moraswip97@gmail.com.com", "_blank");
    },
  }),
};
</script>

<style lang="scss" scoped>
//
.text2 {
  font-family: "Krub", sans-serif;
  font-size: 15px;
}
</style>
