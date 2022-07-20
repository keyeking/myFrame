import type { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
  },
]
export default routes
