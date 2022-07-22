import VueRouter, { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import localStorage from '@/utils/localStorage'
const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to) => {
  const username = localStorage.get('username')

  if (username == 'admin' && to.path == '/login') {
    return '/home'
  }
})
export default router
