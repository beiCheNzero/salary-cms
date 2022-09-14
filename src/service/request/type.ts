import type { AxiosRequestConfig, AxiosResponse } from 'axios'
/*
 * AxiosResponse
 * 响应包括data/status/statusText/headers/config/request这些参数
 */

// 接口中定义需要接收那些值，且返回值是什么
export interface LJLRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  // responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

/*
 * 对原有的类型进行的扩展
 * 我们如果需要的属性/参数的时候可以在这里定义
 */
export interface LJLRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LJLRequestInterceptors<T>
  showLoading?: boolean
}
