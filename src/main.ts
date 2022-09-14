import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 它的作用就是让HTML元素更好的实现跨浏览器一致性
import 'normalize.css'
import './assets/css/index.less'

import ljlRequest from './service'

// 引入Elmessage和Elloading的css样式文件
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
// 导入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 通过遍历的方式注册所有 svg组件，会牺牲一点点性能
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // 新增名为Menu的判断
  if ('Menu' != key) {
    app.component(key, component)
  } else {
    app.component(key + 'Icon', component)
  }
}

app.use(store).use(router).mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)

// 这里的请求又所有请求的拦截，和实例请求的拦截
ljlRequest.request({
  url: '/user/user/1001',
  method: 'GET'
})

// 这里的请求还包含自己的请求的拦截
// ljlRequest.request({
//   url: '/user/user/1001',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor(config) {
//       console.log('单个请求的请求拦截')
//       return config
//     },
//     responseInterceptor(config) {
//       console.log('当前请求的响应拦截')
//       return config
//     }
//   }
// })
