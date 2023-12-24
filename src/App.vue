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
              ></v-img>
            </v-avatar>

            <v-list-item link to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/about">
              <v-list-item-icon>
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item-content>
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
    //
  }),

  computed: {
    ...mapState({ app: "app" }),
  },
};
</script>
