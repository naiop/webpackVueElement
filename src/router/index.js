import Vue from 'vue'
import Router from 'vue-router'

import main from '../views/main.vue'
import login from '../views/login.vue'
import test from '../views/mainActicty/test.vue'
// import HelloWorld from '@/components/HelloWorld'
// import test from '@/components/test'

Vue.use(Router)
const routes = [
  {path: '/login', name: 'login', component: login, meta: {ispublic: true}},
  {path: '/',
    name: 'main',
    component: main,
    children: [
      { path: '', name: 'numbering', component: test }

    ]
  }
]

const router = new Router({
  routes
})
// 登录狗子
// router.beforeEach((to, Form, next) => {
//   // console.log(to)
//   if (!to.meta.ispublic && !localStorage.admin_jwt_token) {
//     return next('/login')
//   }
//   next()
// })
export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'login',
//       redirect: '/login/index' // 访问根路径，重定向到 /login/index
//     },
//     {
//       path: '/HelloWorld',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/test',
//       name: 'test',
//       component: test
//     }
//   ]
// })
