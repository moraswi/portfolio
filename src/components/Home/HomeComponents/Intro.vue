<template>
  <div class="mt-2">
    <img
      class="hidden-sm-and-down"
      src="@/assets/img/TopImage.jpg"
      alt="Background-Image"
    />

    <v-layout>
      <v-avatar class="ma-4" size="100">
        <v-img
          class="hidden-md-and-up"
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="Profile-Pic"
        ></v-img>
      </v-avatar>
      <div>
        <h1>Hi!</h1>
        <h1>I'm Moraswi</h1>
        <h1>a Front-End Developer & Test Analyst</h1>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "IntroSection",

  data: () => ({}),
};
</script>

<style lang="scss" scoped>
//
</style>
