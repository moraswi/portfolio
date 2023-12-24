<template>
  <div class="mt-2">
    <img
      class="hidden-sm-and-down"
      src="@/assets/img/TopImage.jpg"
      alt="Background-Image"
    />

    <v-layout>
      <v-avatar class="hidden-md-and-up ma-4" size="100">
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="Profile-Pic"
        ></v-img>
      </v-avatar>
      <div class="text1">
        <h1>Hi!</h1>
        <h1>I'm Moraswi,</h1>
        <h1>a Front-End Developer &</h1>
        <h1>Test Analyst</h1>
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
.text1 {
  font-family: "Krub", sans-serif;
  font-size: 30px;
}
@media screen and (max-width: 1024px) {
  .text1 {
    font-size: 13px;
  }
}
</style>
