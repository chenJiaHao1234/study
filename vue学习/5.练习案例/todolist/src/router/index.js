import Vue from 'vue'
import Router from 'vue-router'

// 1. 导入需要配置路由的组件
const home = () => import('@/pages/home')
const school = () => import('@/pages/school')
const student = () => import('@/pages/student')
const msg = () => import('@/pages/msg')

Vue.use(Router)

const router =  new Router({
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
              name: 'xiaoxi',
              // 添加占位符
              path: 'msg/:id/:title',
              component: msg,
              
              // props配置
              props($route) {
                return {
                  id: $route.params.id,
                  title: $route.params.title,
                  a: 'holle',
                  b: 1
                }
              }
            }
          ]
        }
      ]
    },
  ]
})

// 全局前置路由守卫：初始化时执行和每次路由切换前执行
router.beforeEach(() => {

})

// 全局后置路由守卫：初始化时执行和每次路由切换后执行
router.afterEach(() => {

})

export default router