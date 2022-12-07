// service 统一出口
// 注意： axios 版本是  "axios": "^0.21.4",
import LeeRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

// 添加一个前缀 lee ，防止命名冲突
// 每个实例都有自己的拦截器
const leeRequest = new LeeRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

  hooks: {
    requestHook: (config) => {
      // 可以进行 token 拦截
      return config
    },
    requestHookCatch: (err) => {
      return err
    },
    responseHook: (response) => {
      return response
    },
    responseHookCatch: (err) => {
      return err
    }
  }
})

// 导出 axois 实例
// 可以导出很多歌不同的实例对象
export default leeRequest
