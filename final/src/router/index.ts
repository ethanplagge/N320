import { createRouter, createWebHistory } from 'vue-router'
import SessionView from '../views/SessionView.vue'
import UserSessionView from '../views/UserSessionView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'session',
      component: SessionView
    },
    {
      path: '/user-sessions',
      name: 'user-sessions',
      component: UserSessionView
    }
  ]
})

export default router
