import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/Register.vue')
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: () => import('../views/auth/ForgotPassword.vue')
    },
    {
      path: "/password-reset/:token",
      name: "ResetPassword",
      component: () => import('../views/auth/ResetPassword.vue')
    },
    {
      path: "/checker",
      name: "checker",
      component: () => import('../views/Checker.vue')
    },
  ]
})

export default router
