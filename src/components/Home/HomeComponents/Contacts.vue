<template>
  <div class="mt-16">
    <p class="grey--text">CONTACTS</p>
    <h2>CONTACTS</h2>

    <!-- email -->
    <v-layout class="mt-16" align-center>
      <v-card
        color="#f2f3f7"
        class="d-flex align-center justify-center"
        width="100"
        height="100"
        flat
      >
        <v-icon color="blue" size="30">mdi-email</v-icon>
      </v-card>

      <h3 class="ml-7">
        <a href="mailto:moraswip97@gmail.com.com">moraswip97@gmail.com</a>
      </h3>
    </v-layout>

    <!-- email -->
    <v-layout class="mt-16" align-center>
      <v-card
        color="#f2f3f7"
        class="d-flex align-center justify-center"
        width="100"
        height="100"
        flat
      >
        <v-icon color="blue" size="30">mdi-phone</v-icon>
      </v-card>

      <h3 class="ml-7">
        <a href="tel:+27 78 929 8447">+27 78 929 8447</a>
      </h3>
    </v-layout>

    <!-- email -->
    <v-layout class="mt-16" align-center>
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
        <h3 class="ml-7">Pretoria</h3>
        <p class="ml-7">Gauteng, South Africa</p>
      </div>
    </v-layout>

    <v-layout class="mt-10 hidden-md-and-up" justify-space-between>
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
</style>
