import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'
import store from '@/store'

import 'normalize.css'
import '@/assets/css-structure/index.scss'
import Mui from '@/components'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Mui)
app.mount('#app')
