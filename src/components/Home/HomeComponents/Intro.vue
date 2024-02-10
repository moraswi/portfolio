<template>
  <div class="mt-md-2 div-deco">
    <img
      class="hidden-sm-and-down"
      src="@/assets/img/TopImage.jpg"
      alt="Background-Image"
    />

    <v-layout>
      <v-avatar class="hidden-md-and-up ma-4" size="100">
        <v-img
          src="@/assets/img/profile-picture.jpeg"
          alt="Profile-Picture"
          @click="showDialog = true"
        ></v-img>
      </v-avatar>
      <!-- dialog -->
      <v-dialog v-model="showDialog" max-width="300">
        <v-img
          src="@/assets/img/profile-picture.jpeg"
          alt="profile-picture"
        ></v-img>
      </v-dialog>

      <div class="text1">
        <h1>Hi!</h1>
        <h1>I'm Moraswi,</h1>
        <h1>a Front-End Developer & Test Analyst</h1>
       
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "IntroSection",

  data: () => ({
    showDialog: false,
  }),
};
</script>

<style lang="scss" scoped>


.div-deco{
  height: 600px;
  // background: linear-gradient(to right, #ff8a00, #da1b60); 
  /* Additional styling options */
  // color: white;
}
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

@media screen and (max-width: 768px) {
  .div-deco{
    padding-top: 5px;
  height: 160px;
  background: linear-gradient(to right, #ff8a00, #da1b60); /* Replace these colors with your desired gradient */
  /* Additional styling options */
  color: white;
}
}
</style>
