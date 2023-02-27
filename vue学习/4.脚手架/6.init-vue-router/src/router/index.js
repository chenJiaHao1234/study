// 配置相关文件
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// ↓懒加载的方式  const name = () => import(../)
const home = () => import('../components/home');
const door = () => import('../components/door');
const casement = () => import('../components/casement');
const user = () => import('../components/user');
const aburt = () => import('../components/aburt');
const porfile = () => import('../components/porfile')

// 1. 安装插件 Vue.use(插件)
Vue.use(Router)

// 2.创建router对象
const router = new Router({
// 3.配置路由和组件之间的关系 这里 routes这个数组名称是固定的不能改
  routes: [
    {
      path: '',
      redirect: 'home',
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      component: home,
      meta: {
        title: '首页'
      },
      // ↓嵌套子路由
      children: [
        {
          path: '',
          redirect: 'door',
        },
        {
          path: 'door',
          component: door,
        },
        {
          path: 'casement',
          component: casement,
        },
      ]
    },
    {
      path: '/user/:userId',
      component: user,
      meta: {
        title: '用户',
      }
    },
    {
      path: '/aburt',
      component: aburt,
      meta: {
        title: '关于',
      }
    },
    {
      path: '/porfile',
      component: porfile,
      meta: {
        title: '档案'
      }
    }
  ],

  // 修改路径的方式改为 history
  mode: 'history',

  // 当前处于活跃状态的 router-link 添加 类名
  linkActiveClass: 'abc',
})
// 4.导出(export)
export default router
// 5.然后在 main.js 文件导入(main文件导入时没写到index.js 因为会自动找导入文件夹的index)



// 导航守卫
router.beforeEach((to, from, next) => {
  // 从哪到哪？ from 出发点  to目的地
  document.title = to.matched[0].meta.title
  // console.log(to);
  // next() 表示执行下一步
  next()
})