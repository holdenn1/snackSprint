import MainPage from "@/pages/MainPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import SignInPage from "@/pages/SignInPage.vue";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUpPage,
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignInPage,
  },
];
