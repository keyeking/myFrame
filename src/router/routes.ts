import type { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/login/login.vue'),
  },
  {
    path: '/home',
    component: () => import('@/views/home/home.vue'),
  },
]
export default routes
