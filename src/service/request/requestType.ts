import {AxiosRequestConfig,AxiosResponse} from "axios"
//拦截器接口
export interface HYRequestInterceptors<T = AxiosResponse> {
  // 拦截器,设置为可选的，每次请求时可以传入也可以不传入拦截器
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
// 继承原有类型，扩展一些接口类型
export interface HYRequestConfig<T=AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}
