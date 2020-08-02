import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ViewRecipes from "../views/ViewRecipes.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "ViewRecipes",
    component: ViewRecipes
  },
  {
    path: "/add-recipes",
    name: "AddRecipes",
    component: () => import(/* webpackChunkName: "add-recipes" */ "../views/AddRecipes.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
