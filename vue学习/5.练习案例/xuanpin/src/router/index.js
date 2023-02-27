import Vue from 'vue'
import VueRouter from 'vue-router'
const storeRegistration = () => import('@/views/storeRegistration/storeRegistration.vue')
const storehouseManage = () => import('@/views/storehouseManage/storehouseManage.vue')
const transportManage = () => import('@/views/transportManage/transportManage.vue')
const purchaseManage = () => import('@/views/purchaseManage/purchaseManage.vue')
const shopManage = () => import('@/views/shopManage/shopManage.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/storeRegistration'
  },
  // 店铺注册
  {
    path: '/storeRegistration',
    component: storeRegistration
  },
  // 仓储管理
  {
    path: '/storehouseManage',
    component: storehouseManage
  },
  // 头程管理
  {
    path: '/transportManage',
    component: transportManage
  },
  // 采购管理
  {
    path: '/purchaseManage',
    component: purchaseManage
  },
  // 商品管理
  {
    path: '/shopManage',
    component: shopManage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
