import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('../views/Home/home')
const classify = () => import('../views/Classify/classify')
const shoppingtrolley = () => import('../views/Shoppingtrolley/shoppingtrolley')
const login = () => import('../views/Login/login')
const detail = () => import('../views/Detail/detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/classify',
    component: classify
  },
  {
    path: '/shoppingtrolley',
    component: shoppingtrolley
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/detail/:id',
    component: detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
