import { Layout, Header, Aside, Main, Footer } from './layout'
import BoxCenter from './box-center/box-center.vue'
import BoxSkin from './box-skin/box-skin'

import SingleCenter from './single-center/single-center'
import FootNav from './foot-nav'

import Col from 'vant/lib/col'
import 'vant/lib/col/index.css'
import Row from 'vant/lib/row'
import 'vant/lib/row/index.css'

const components = {
  Layout,
  Header,
  Aside,
  Main,
  Footer,
  BoxCenter,
  BoxSkin,
  SingleCenter,
  FootNav,
  CRow: Row,
  CCol: Col
}

const install = (app) => {
  Object.keys(components).forEach((key) => {
    // app.component(key, components[key])

    if (key === 'CRow' || key === 'CCol') {
      app.component(key, components[key])
    } else {
      // component[key]['name'] 读取组件里面的name值来命名
      app.component(components[key]['name'], components[key])
    }
  })
}

const Mui = {
  install
}

export default Mui
