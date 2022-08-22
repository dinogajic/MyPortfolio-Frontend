import dotenv from "dotenv";
dotenv.config();
import Vue from "vue";
import VueRouter from "vue-router";
import { Auth } from "@/services";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../views/Portfolio.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/edit-profile/:id",
    name: "EditProfile",
    component: () => import("../views/EditProfile.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/create-portfolio",
    name: "CreatePortfolio",
    component: () => import("../views/CreatePortfolio.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/password-reset",
    name: "PasswordReset",
    component: () => import("../views/PasswordReset.vue"),
  },
  {
    path: "/public/:id",
    name: "PublicPage",
    component: () => import("../views/PublicPage.vue"),
  },
  {
    path: "/change-password/:id/:token",
    name: "ChangePassword",
    component: () => import("../views/ChangePassword.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const id = to.params.id;
  const token = to.params.token;
  const publicPages = [
    "/login",
    "/register",
    `/public/${id}`,
    "/password-reset",
    `/change-password/${id}/${token}`,
  ];
  const loginNeeded = !publicPages.includes(to.path);
  const user = Auth.getUser();

  if (loginNeeded && !user) {
    next("/login");
    return;
  }

  next();
});

export default router;
