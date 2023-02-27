import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import flexible from './flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  flexible,
  render: h => h(App)
}).$mount('#app')
