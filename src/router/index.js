import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },

  {
    path: "/about-me-read-more",
    name: "AboutMe",
    component: () => import("@/views/AboutMe.vue"),
  },

  {
    path: "/full-stack-developer-read-more",
    name: "FullStackDeveloperInfo",
    component: () => import("@/views/FullStackDeveloperInfo.vue"),
  },

  {
    path: "/group-lead-read-more",
    name: "GroupLeadInfo",
    component: () => import("@/views/GroupLeadInfo.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
