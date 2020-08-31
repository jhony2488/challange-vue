import Vue from "vue";
import Router from "vue-router";
import Home from "./views/pages/index.vue";
import Register from "./views/pages/registerUser.vue";
import userArea from "./views/pages/userArea.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Home,
      children: [],
    },
    {
      path: "/register/",
      name: "register",
      component: Register,
    },
    {
      path: "/:id",
      name: "userArea",
      component: userArea,
    },
  ],
});
