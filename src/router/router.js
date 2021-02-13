import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import PropertyDetail from "@/views/PropertyDetail";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/PropertyDetail/:PropertyId",
    name: "PropertyDetail",
    component: PropertyDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;