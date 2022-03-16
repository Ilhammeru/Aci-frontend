import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import 3rd party
import './lib/bootstrap'
import './lib/fontawesome'
import './lib/axios'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
