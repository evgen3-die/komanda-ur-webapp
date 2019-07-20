import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = store.state
  const isNeedLogin = to.matched.some(record => record.meta.isNeedLogin)
  const isNotNeedLogin = to.matched.some(record => record.meta.isNotNeedLogin)

  if (isNeedLogin && !isLogin) {
    next('/login')
    return
  }

  if (isNotNeedLogin && isLogin) {
    next('/panel')
    return
  }

  next()
})

export default router
