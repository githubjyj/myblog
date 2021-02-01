import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
// 创建 blogDetail.vue 的路由
import BlogDetail from '../views/blogDetail.vue'
// 发表文章
import PushArticle from '../views/PushArticle.vue'
// 关于作者
import About from '../views/About.vue'
// 留言
import Message from '../views/Message.vue'
// 引入404页面
import error from '../views/error.vue'
// 引入登录页面
import login from '../views/login.vue'

Vue.use(VueRouter)
const routes = [
  // 主页面
  {
    path: '/',
    name: 'Index',
    component: Index
  },

  // 创建 blogDetail.vue 的路由
  {
    path: '/blog/detail/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/PushArticle',
    name: 'PushArticle',
    component: PushArticle
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Message',
    name: 'Message',
    component: Message
  },
  
  {
    path: '/error',
    name: 'error',
    component: error
  },
  {
    path:"*",
    name: 'error',
    component: error
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router






