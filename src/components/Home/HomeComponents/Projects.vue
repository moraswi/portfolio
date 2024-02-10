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
              <p class="grey--text text2">PROJECTS</p>
              <h2 class="mt-n3">SUCCESSFUL INITIATIVES</h2>
          </div>

       <!-- title mobile view -->
        <v-row class="hidden-md-and-up">
          <v-col class="text-center" xs12>
            <p class="grey--text text2 mt-5">PROJECTS</p>
            <h2 class="mt-n3">SUCCESSFUL INITIATIVES</h2>
          </v-col>
        </v-row>

    <v-row class="mt-5">
      <v-col cols="12" md="4">
        <v-card class="pa-4 web-card text-center">
          <img
            class=""
            src="@/assets/img/Grade11Logo.png"
            alt="Pencil-Image"
            width="70"
            height="70"
          />
          <h3>Grade 11 Q&A</h3>
          <p class="grey--text">Mobile Application</p>

          <p class="mt-7">
            The application designed for eleventh-grade learners. It assists
            them in easily accessing question papers and their corresponding
            memoranda. The application was published in 2022 Oct.
          </p>
          <v-btn
            class="text-none px-16"
            color="blue-darken-4"
            variant="outlined"
            v-bind="props"
            outlined
            v-on:click="redirectToGoogle"
          >
            Download
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ExperienceSection",

  data: () => ({
    redirectToGoogle() {
      window.open(
        "https://play.google.com/store/apps/details?id=com.cvb.splashscreen&pcampaignid=web_share",
        "_blank"
      );
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
