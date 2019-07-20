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
  const isNeedToLogin = to.matched.some(record => record.meta.requiresLogin)

  if (isNeedToLogin && !isLogin) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })

    return
  }

  next()
})

export default router
