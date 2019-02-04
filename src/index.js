import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App'

import 'styles/base.scss'

import 'core-js/modules/es6.promise'
import 'core-js/modules/es6.array.iterator'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.config.debug = false

let router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
