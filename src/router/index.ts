import VueRouter, {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import routes from './routes'
import localStorage from '@/utils/localStorage'
const router: VueRouter.Router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to: VueRouter.RouteLocationNormalized) => {
  const username: string | null = localStorage.get('username')
  if(!username&&(to.path !== '/login')){
    return {path:'/login'}
  }
  // if(username)
  if (username === 'admin' && (to.path == '/login' || to.path == '/')) {
    return {path:'/home'}
  }
})
export default router
