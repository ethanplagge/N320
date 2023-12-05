import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeamView from "../views/TeamView.vue";

const routes = [
  {
    //default route
    path: '/',
    name: 'default',
    component: HomeView
  },
  {
    //home route
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    //teams route
    path: '/teams',
    name: 'teams',
    component: TeamView
  }
]

//Create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;