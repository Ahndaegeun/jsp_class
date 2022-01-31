import { createWebHashHistory, createRouter } from "vue-router";

import Find from './page/Find'
import Login from './page/Login'
import Main from './page/Main'
import SignUp from './page/SignUp'

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/find",
    component: Find,
  },
  {
    path: "/sign",
    component: SignUp,
  },
  {
    path: "/main",
    component: Main,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;