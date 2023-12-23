<template>
  <div class="mt-16">
    <p class="grey--text">PROJECTS</p>
    <h2>MY PROJECTS</h2>

    <v-row class="mt-16">
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
</style>
