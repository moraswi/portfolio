<template>
  <v-app>
    <!-- App bar -->
    <!-- <v-app-bar app>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My Vue App</v-toolbar-title>
    </v-app-bar> -->

    <v-container fluid>
      <v-row>
        <!-- Sidebar -->
        <v-navigation-drawer
          app
          :persistent="true"
          :mini-variant.sync="mini"
          v-model="drawer"
        >
          <!-- Sidebar content goes here -->
          <v-list>
            <v-avatar class="ma-4" size="100">
              <v-img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
                style="cursor: pointer"
                @click="showDialog = true"
              ></v-img>
            </v-avatar>

            <v-dialog v-model="showDialog" max-width="600">
              <v-img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              ></v-img>
            </v-dialog>

            <v-list-item href="#home">
              <!-- Home -->
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- About -->
            <v-list-item href="#about">
              <v-list-item-icon>
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- Services -->
            <v-list-item href="#services">
              <v-list-item-icon>
                <v-icon>mdi-desktop-classic</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Services</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- Education -->
            <v-list-item href="#education">
              <v-list-item-icon>
                <v-icon>mdi-school</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Education</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- Experiance -->
            <v-list-item href="#experiance">
              <v-list-item-icon>
                <v-icon>mdi-briefcase-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Experiance</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- Experiance -->
            <v-list-item href="#projects">
              <v-list-item-icon>
                <v-icon>mdi-projector-screen-variant-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Projects</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- Contacts -->
            <v-list-item href="#contacts">
              <v-list-item-icon>
                <v-icon>mdi-contacts-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Contacts</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- icons -->
            <v-list-item>
              <v-layout>
                <v-icon @click="redirectToLinkedIn">mdi-linkedin</v-icon>

                <v-icon class="ml-3" @click="redirectToGitHub"
                  >mdi-github</v-icon
                >

                <v-icon class="ml-3" @click="redirectToEmail">mdi-email</v-icon>
              </v-layout>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <!-- Main content -->
        <v-main>
          <!-- Page content goes here -->
          <router-view></router-view>
        </v-main>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",

  data: () => ({
    showDialog: false,

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

  computed: {
    ...mapState({ app: "app" }),
  },

  mounted() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  },
};
</script>
