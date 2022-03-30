import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie' // 引用
// import HelloWorld from '@/components/HelloWorld'
// import test from '../views/MainActivity/test.vue'
// 分别引入三个 view
import ListArticle from '../views/MainActivity/ListArticle.vue'
import CreateArticle from '../views/MainActivity/CreateArticle.vue'
import EditArticle from '../views/MainActivity/EditArticle.vue'
import layout from '../views/layout.vue'
import login from '../views/login.vue'

Vue.use(Router)

const routes = [
  {path: '/login', name: 'login', component: login, meta: {ispublic: true}},
  {path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '/article/index',
        name: 'List-article',
        component: ListArticle
      },
      {
        path: '/article/create',
        name: 'create-article',
        component: CreateArticle
      },
      {
        path: '/article/:id/edit',
        name: 'edit-article',
        component: EditArticle
      }
    ]
  }
]

const router = new Router({
  routes
})
// 全局路由守卫   登录勾子
router.beforeEach((to, Form, next) => {
  console.log(to)
  console.log(Cookies.get('token'))

  if (!to.meta.ispublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
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
