<template>
  <v-app>
    <v-main>
      <!-- <nav> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <!-- </nav> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",

  data: () => ({
    //
  }),

  computed: {
    ...mapState({ app: "app" }),
  },
};
</script>
