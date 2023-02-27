import Vue from 'vue'
import Router from 'vue-router'

// 1. 导入需要配置路由的组件
const home = () => import('@/pages/home')
const school = () => import('@/pages/school')
const student = () => import('@/pages/student')
const msg = () => import('@/pages/msg')

Vue.use(Router)

export default new Router({
// 2. 配置路由， 第三步在 app组件查看
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/school',
      component: school,
      children: [
        {
          path: 'student',
          component: student,
          children: [
            {
              path: 'msg',
              component: msg
            }
          ]
        }
      ]
    },
  ]
})
