import qs from 'qs'
import axios from 'axios'
import getType from '../type/get'

import { HTTP_STATUS, SERVER_STATUS, handleHttpStatus } from './constants/request'

class Http {
  static instance
  constructor (options) {
    this.options = options
  }

  /**
   * 初始化配置
   * @memberof Http
   * @param {Object} options 配置
   * @param {Object} options.headers 请求头
   * @param {Number} options.timeout 超时时间
   * @param {String} options.baseURL 通用请求链接前缀
   * @param {Function} options.beforeRequest 发送请求前的钩子
   * @param {Function} options.afterRequest 结束请求后的钩子
   * @param {Function} options.successRequest 请求成功后的钩子
   * @param {Function} options.errorRequest 请求失败后的钩子
   * @param {Function} options.transformUrl 修改请求链接
   * @param {Function} options.transformData 修改请求参数
   * @param {Function} options.transformHeader 修改请求头数据
   *
   * @example
   *
   * import Http from 'macro_utils/lib/http'
   * Http.init({ beforeRequest: () => {} })
   *
  */
  static init (options = { headers: {} }) {
    if (!this.instance) {
      this.instance = new Http(options)
    }
    return this.instance
  }

  async hook (fn, params) {
    if (typeof fn === 'function') {
      const res = await fn.apply(fn, params)
      return res
    }
    return Promise.resolve({})
  }

  requestConfig (options, config) {
    const result = {
      ...options,
      ...config
    }
    return result
  }

  async request (method, url, params = {}, config = { headers: {} }) {
    const {
      beforeRequest = () => null,
      afterRequest = () => null,
      successRequest = () => null,
      errorRequest = () => null,
      timeout,
      baseURL = '',
      dataType = 'json',
      withCredentials = false,
      httpRequest = null,
      transformUrl = null,
      transformData = null,
      transformHeader = null,
    } = { ...this.options, ...config }

    const setHeaders = { ...this.options.headers, ...config.headers }

    try {
      if (typeof transformUrl === 'function') {
        url = transformUrl(url)
      }

      if (typeof transformData === 'function') {
        const obj = transformData()
        if (getType(obj) === 'object') {
          Object.assign(params, obj)
        } else {
          console.log('请在 transformData 函数中返回一个对象类型的数据!!!')
        }
      }

      if (typeof transformHeader === 'function') {
        const obj = transformHeader()
        if (getType(obj) === 'object') {
          Object.assign(setHeaders, obj)
        } else {
          console.log('请在 transformHeader 函数中返回一个对象类型的数据!!!')
        }
      }
      const axiosConfig = {
        url,
        method,
        timeout,
        baseURL,
        data: {},
        params: {},
        withCredentials,
        headers: setHeaders
      }

      if (method === 'get') {
        axiosConfig.params = params
      } else {
        axiosConfig.data = params
      }

      if (dataType === 'formdata' && method === 'post') {
        const axiosData = axiosConfig.data
        axiosConfig.data = qs.stringify({ ...axiosData })
        axiosConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded;text/plain;charset=UTF-8'
      }

      axiosConfig.headers['X-Requested-With'] = 'XMLHttpRequest'

      const requestConfig = this.requestConfig(this.options, config)

      await this.hook(beforeRequest, [requestConfig])

      const windowAxios = window.axios
      const newAxios = typeof windowAxios === 'function' ? windowAxios : axios

      const res =
      typeof httpRequest === 'function'
        ? await httpRequest(axiosConfig) : await newAxios(axiosConfig)

      const { data = { code: -1 } } = res
      const { code } = data

      await this.hook(afterRequest, [res, requestConfig])

      // 处理200
      if (res.status === HTTP_STATUS.CACHE || res.status === HTTP_STATUS.SUCCESS) {
        if (code === SERVER_STATUS.SUCCESS) {
          data.headers = res.headers
          await this.hook(successRequest, [data, requestConfig])
          return Promise.resolve(data)
        }

        await this.hook(errorRequest, [data, requestConfig])
        return Promise.reject(data)
      }

      // 处理非200
      await this.hook(errorRequest, [handleHttpStatus(res.status), requestConfig])
      return Promise.reject(handleHttpStatus(res.status))
    } catch (e) {
      const requestConfig = this.requestConfig(this.options, config)
      await this.hook(errorRequest, [handleHttpStatus(-1, e.message), requestConfig])
      return Promise.reject(handleHttpStatus(-1, e.message))
    }
  }

  /**
   * get请求
   * @memberof Http
   * @param {String} url 请求的接口
   * @param {Object} params 接口请求的参数
   * @param {Object} config 配置（配置选项参考init的配置）
   *
   * @example
   *
   * import Http from 'futong-utils/lib/http'
   * const http = Http.init({ beforeRequest: () => {} })
   * http.get('/api/user/info', { id: 1789 })
   *
   */
  async get (url, params = {}, config = {}) {
    const res = await this.request('get', url, params, config)
    return res
  }

  /**
   * post请求
   * @memberof Http
   * @param {String} url 请求的接口
   * @param {Object} params 接口请求的参数
   * @param {Object} config 配置（配置选项参考init的配置）
   *
   * @example
   *
   * import Http from 'futong-utils/lib/http'
   * const http = Http.init({ beforeRequest: () => {} })
   * http.post('/api/user/save', { id: 1789 })
   *
   */
  async post (url, params = {}, config = {}) {
    const res = await this.request('post', url, params, config)
    return res
  }
}

export default Http
