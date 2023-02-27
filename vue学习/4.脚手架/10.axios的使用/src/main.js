import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 👇全局url地址。但是一般不用(了解)
// axios.defaults.baseURL = 'http://123.207.32.32:8000'

// axios的基本使用
// url 拿到数据地址
axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}).then((res) => {
  console.log(res);
})



// axios 进行并发请求
axios.all([
  // 网络请求1
  axios({
    url: '网络请求地址',
  }),

  // 网络请求2
  axios({
    url: '网络请求地址',
  })
]).then(results => {
  console.log(results);
})


// 创建对应的axios实例  axios.create
// 相当于 http://123.207.32.32:8000 存入 instance1
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
})

instance1({
  url: '/home/multidata'
}).then(function (res) {
  console.log(res)
})



// axios模块封装
// 为什么要封装？
// axios 是第三方工具，封装 axios 可以在之后 axios 停止维护后更方便更好
import { request } from './network/request'

request({
  url: '/home/multidata',
}).then(res => {
  console.log(res);
})


// axios 拦截器
// 具体写在 request.js 文件中