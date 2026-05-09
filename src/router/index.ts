import { createRouter, createWebHashHistory } from "vue-router";

import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/projects",
      component: Projects,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});
