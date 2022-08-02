import VueRouter, { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import localStorage from '@/utils/localStorage'
const router: VueRouter.Router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to: VueRouter.RouteLocationNormalized) => {
  const username: string | null = localStorage.get('username')
  if (username === 'admin' && (to.path == '/login' || to.path == '/')) {
    return '/home'
  }
})
export default router
