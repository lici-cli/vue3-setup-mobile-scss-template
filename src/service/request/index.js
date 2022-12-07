// 注意： axios 版本是  "axios": "^0.21.4",
import axios from 'axios'

// 对请求拦截器做到粒度的操作：实例，全局，每个请求都有相应的拦截处理
class LeeRequest {
  constructor(config) {
    // 可以创建多个不同的实例，解决开发的时候，需要多个不同的 request 实例
    this.instance = axios.create(config)
    this.hooks = config.hooks

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        // TODO: 请求成功，业务成功功
        // TODO：请求成功，业务失败
        // TODO：请求失败
        return data
      },
      (err) => {
        return err
      }
    )

    //  执行实例的拦截器
    this.instance.interceptors.request.use(
      this.hooks?.requestHook,
      this.hooks?.requestHookCatch
    )

    this.instance.interceptors.response.use(
      this.hooks?.responseHook,
      this.hooks?.responseHookCatch
    )
  }
  request(config) {
    return new Promise((resolve, reject) => {
      if (config.hooks?.requestHook) {
        config = config.hooks.requestHook(config)
      }

      this.instance
        .request(config)
        .then((res) => {
          if (config.hooks?.responseHook) {
            res = config.hooks.responseHook(res)
          }

          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }

  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch(config) {
    return this.request({ ...config, method: 'patch' })
  }
}

export default LeeRequest
