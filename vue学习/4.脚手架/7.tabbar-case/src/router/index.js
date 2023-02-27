import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/views/home/home');
const classify = () => import('@/views/classify/classify');
const shopping = () => import('@/views/shopping/shopping');
const login = () => import('@/views/login/login');

Vue.use(Router)

const routers = [
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
    path: '/shopping',
    component: shopping
  },
  {
    path: '/login',
    component: login
  },
]

const router = new Router({
  routes: routers,
  mode: 'history'
})

export default router
