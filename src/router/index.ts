import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LocalCache from '@/utils/cache'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  // 不是去登录界面
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token')
    // 且没有token 就跳转到登录页
    if (!token) {
      return '/login'
    }
  }
})

export default router
