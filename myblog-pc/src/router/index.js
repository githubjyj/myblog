import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index.vue'

// 创建 blogDetail.vue 的路由
import BlogDetail from '../views/blogDetail.vue'

// 发表文章
import PushArticle from '../views/PushArticle.vue'
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
    path: '/PushArticle',
    name: 'PushArticle',
    component: PushArticle
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
