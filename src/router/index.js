import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/delay",
  },
  {
    path: "/delay",
    name: "Delay",
    component: () => import("../views/Delay.vue"),
  },
  {
    path: "/eventdelegate",
    name: "EventDelegate",
    component: () => import("../views/EventDelegate.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
