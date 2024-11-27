import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/destinationDetail/:slug',
      name: 'destinationDetail',
      component: () => import('@/views/DestinationsView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
    },
    {
      path: '/itb',
      name: 'itb',
      component: () => import('@/views/ItbView.vue'),
    },
  ],
})

export default router