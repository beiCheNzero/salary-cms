// service统一出口
import LJLRequest from './request'
import { API_BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const ljlRequest = new LJLRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    /*
     * 1.添加ljlRequest所对应的拦截器
     * 这里的拦截器只属于ljlRequest所对应的实例
     */
    // 请求成功的拦截器
    requestInterceptor: (config) => {
      // console.log('请求成功的拦截器')
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        /*
         * 解决无效token的问题
         * 给token授权访问api接口的权限
         * Authorization(授权)
         */
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    // 响应成功的拦截器
    responseInterceptor: (res) => {
      // console.log('响应成功的拦截器')
      return res
    },
    responseInterceptorCatch: (error) => {
      return error
    }
  }
})
export default ljlRequest

// axios.get('http://159.75.136.33:3223/user/user/1001').then((res) => {
//   console.log(res)
// })

// axios.interceptors.request.use((config) => {
//   console.log('请求成功的拦截')
//   return config
// })

// axios.interceptors.response.use((res) => {
//   console.log('响应成功的拦截')
//   return res.data
// })
