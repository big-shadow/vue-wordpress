import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '@/packages/axios'

Vue.config.productionTip = false
Vue.config.debug = false

Vue.use(Axios)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
