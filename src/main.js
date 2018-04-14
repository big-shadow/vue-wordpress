import Vue from 'vue'
import App from './App'
import router from '@/packages/router'
import axios from '@/packages/axios'
import quotes from '@/packages/quotes'

Vue.config.productionTip = false
Vue.config.debug = true

Vue.use(axios)
Vue.use(quotes)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
