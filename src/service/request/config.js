// 根据 process.env.NODE_ENV
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'https://www.fastmock.site/mock/58322c7e71c4ed4503b95197370f9595' // 可以直接设置为 /api 可以在 webpack 设置代理进行接口访问
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://xxx/prod'
} else {
  BASE_URL = 'http://xxx/test'
}

// 注意：这里并不是导出一个对象，这个只是一个语法
export { BASE_URL, TIME_OUT }
