import { createRouter, createWebHashHistory } from "vue-router";
import AllCats from "@/layouts/AllCats";

const routes = [
  {
    path: "/",
    name: "AllCats",
    component: AllCats,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
