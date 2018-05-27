// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import Axios from 'axios'
import NProgress from 'nprogress'


import App from './App'
import store from './store'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/font-awesome-4.7.0/css/font-awesome.min.css'
import '@/assets/css/main.css'
import '@/assets/css/scrollbar.css'
import '@/assets/css/reset.css'
import 'nprogress/nprogress.css'
import 'animate.css'
import GLOBAL from '../config/global'

import DropdownPlugin from '@/components/model/dropdown'
import NavbarPlugin from '@/components/model/navbar'
import ContextMenuPlugin from '@/components/model/context-menu'
import MButton from '@/components/model/button'
import MSwitch from '@/components/model/switch'
import MAlert from '@/components/model/alert'
import MCheckbox from '@/components/model/checkbox'
import MInput from '@/components/model/input'
import MLoading from '@/components/model/loading/loading'
import Mkeyboard from '@/components/model/keyboard'
import MNumberkeyboard from '@/components/model/number-keyboard'
import MBox from '@/components/model/box'
import MBackTop from '@/components/model/back-top'
import MLoader from '@/components/model/loader'
import MContainer from '@/components/model/container'
import Rloading from '@/components/model/r-loading'



Vue.use(ElementUI)

Vue.use(DropdownPlugin)
Vue.use(NavbarPlugin)
Vue.use(ContextMenuPlugin)
Vue.use(MButton)
Vue.use(MSwitch)
Vue.use(MAlert)
Vue.use(MCheckbox)
Vue.use(MInput)
Vue.use(MLoading)
Vue.use(Mkeyboard)
Vue.use(MNumberkeyboard)
Vue.use(MBox)
Vue.use(MBackTop)
Vue.use(MLoader)
Vue.use(MContainer)
Vue.use(Rloading)


window.APP_INFO = process.env.APP_INFO
let bus = new Vue()
Vue.prototype.bus = bus
Vue.prototype.GLOBAL = GLOBAL

var app
var whiteList = ['login']
router.beforeEach((to, _from, next) => {
  NProgress.start()

  var token = sessionStorage.getItem('token')
  if (!token && whiteList.indexOf(to.name) === -1) {
    app && app.$message.warning('未授权，请登陆授权后继续')
    NProgress.done()
    return next({
      name: 'login'
    })
  }
  return next()
})
/* eslint-disable no-new */
window.app = app = new Vue({

  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App,
    Rloading
  }
})

router.afterEach(transition => {
  setTimeout(() => {
    NProgress.done()
  })
})


// status < 500 不会抛错误
Axios.defaults.validateStatus = status => {
  return status < 500
}
// 设置请求token
Axios.interceptors.request.use(config => {
  var token = sessionStorage.getItem('token')
  config.headers.Authorization = 'Bearer ' + token
  // console.log(config)
  return config
})

// 接口错误拦截
Axios.interceptors.response.use(res => {
  // console.log(res)
  if (res.status === 401) {
    app && app.$message({
      type: 'warning',
      message: '登录身份过期，请重新登录。'
    })
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    router.push({
      name: 'login'
    })
    return Promise.reject(new Error('身份过期'))
  }
  return res.data
}, err => {
  app.$notify.error({
    title: '服务错误',
    message: '服务器响应错误 ' + err.message
  })
  return Promise.reject(err)
})


Vue.prototype.$http = Axios
Vue.http = Axios


Vue.config.productionTip = true
