import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { // 首页
    path: '/',
    name: 'Home',
    component: Home
  },
  { // 登录页
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  { // 会员分析页
    path: '/member',
    name: 'Member',
    component: () => import('../views/Member.vue')
  },
  { // 销量分析页
    path: '/sales',
    name: 'Sales',
    component: () => import('../views/Sales.vue')
  },
  { // 交易分析页
    path: '/transaction',
    name: 'Transaction',
    component: () => import('../views/Transaction.vue')
  },
  { // 商品分析页
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  { // 搜索分析页
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  { // 售后分析页
    path: '/after-sale',
    name: 'AfterSale',
    component: () => import('../views/AfterSale.vue')
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
