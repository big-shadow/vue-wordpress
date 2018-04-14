import Vue from 'vue'
import App from './App'
import router from '@/packages/router'
import axios from '@/packages/axios'

Vue.config.productionTip = false
Vue.config.debug = true

Vue.use(axios)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
