import VueRouter, { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import localStorage from '@/utils/localStorage'
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// router.beforeEach((to: VueRouter.RouteLocationNormalized) => {
//   const token = localStorage.get('username')
//   console.log(token)
// })
export default router
