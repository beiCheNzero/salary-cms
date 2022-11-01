import { createRouter, createWebHashHistory } from 'vue-router'
import LocalCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
import type { RouteRecordRaw } from 'vue-router'
const LOGIN = () => import('../../src/views/login/login.vue')
const MAIN = () => import('../../src/views/main/main.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    // 这里是懒加载的方式， () => import('url')
    component: LOGIN
  },
  {
    path: '/main',
    name: 'main',
    component: MAIN
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  routes,
  history: createWebHashHistory()
})

// 路由守卫
router.beforeEach((to) => {
  // 不是去登录界面
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token')
    // 且没有token 就跳转到登录页
    if (!token) {
      return '/login'
    }
  }
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
