/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import HomeView from "@/views/Home.vue";
import UserNew from "@/views/UserNew.vue";
import UserEdit from "@/views/UserEdit.vue";
import UserView from "@/views/UserView.vue";

//Routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/create",
      name: "UserNew",
      component: UserNew,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: UserEdit,
    },
    {
      path: "/view/:id",
      name: "view",
      component: UserView,
    },
  ],
});
export default router;
