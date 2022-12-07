// 普通加载路由
// import login from './login.vue'
// 懒加载路由
const login = () => import('./login')
export default {
  path: '/login',
  name: 'login',
  component: login,
  children: []
}
