import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MYRequestInterceptors, MYRequestConfig } from './requestType'
import { ElLoading } from 'element-plus'
import type { LoadingOptionsResolved } from 'element-plus/lib/components/loading/src/types'
const DEFAULTLoading = true //用户控制是否显示loading
class MYRequest {
  instance: AxiosInstance
  interceptors?: MYRequestInterceptors
  showLoading: boolean
  loading?: LoadingOptionsResolved | any //没找到类型，暂时使用any
  constructor(config: MYRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULTLoading //默认加载loading
    this.interceptors = config.interceptors
    // 从config中取出每个对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )
    //从config中取出每个对应实例的拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )

    // 添加所有实例默认的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载中...',
            background: 'rgba(0,0,0,0.5)',
          })
        }
        return config
      },
      (err) => {
        return err
      },
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        //只需要返回的data数据
        // return res.data
        return res
      },
      (err) => {
        if (err.response.status == 404) {
          console.log('====================================')
          console.log('404错误')
          console.log('====================================')
        }
        return err
      },
    )
  }

  request<T>(config: MYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 请求时是否传入showLoading
      if (config.showLoading == false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
          this.showLoading = DEFAULTLoading //设置为true，不影响下次使用
        })
        .catch((err) => {
          this.showLoading = DEFAULTLoading
          reject(err)
          return err
        })
    })
  }
  get<T>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  update<T>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'UPDATE' })
  }
  delete<T>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}
export default MYRequest
