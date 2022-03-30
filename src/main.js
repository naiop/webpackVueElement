// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 添加element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios' // 引入 axios

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$http = axios.create({ // 将 axios方法定义到vue的原型上
  baseURL: 'http://127.0.0.1:3000/api' // 基础url，前端发起请求要先拼接上这个地址
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
