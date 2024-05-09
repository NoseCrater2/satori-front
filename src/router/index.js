
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../pages/Products.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../pages/Categories.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
