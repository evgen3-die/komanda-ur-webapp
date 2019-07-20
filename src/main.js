import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Meta from 'vue-meta'
import Notifications from 'vue-notification'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Meta)
Vue.use(Notifications)

async function init () {
  await store.dispatch('init')

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

init()
