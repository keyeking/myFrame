//service统一出口
import MYRequest from './request/request'
import { BASE_URL, TIME_OUT } from './request/config'
const request = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 创建实例请求时，传入拦截器，每个实例可有不同的拦截器
  interceptors: {
    requestInterceptor: (config) => {
      /**携带tokne的拦截
      const token = ''
      if (token) {
        config.headers.Authorization = token
      }*/
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求成功的失败', err)
      return err
    },
    responseInterceptor: (res) => {
      // console.log('响应成功的拦截', res)
      return res
    },
    responseInterceptorCatch: (err) => {
      // console.log('响应成功的拦截', err)
      return err
    },
  },
})

export default request
