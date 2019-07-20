import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Meta from 'vue-meta'
import Notifications from 'vue-notification'
import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { faLink, faSearch, faUserCircle, faPrint, faShareAlt, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Meta)
Vue.use(Notifications)

fontAwesomeLibrary.add(faLink, faSearch, faUserCircle, faPrint, faShareAlt, faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)

async function init () {
  await store.dispatch('init')

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

init()
