import { Home, Login, AgreementPage, NotFound, Agreements, CreatePage } from '@/views'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/agreements',
    component: Agreements
  },
  {
    path: '/agreements/:id',
    component: AgreementPage
  },
  {
    path: '/login',
    meta: {
      isNotNeedLogin: true
    },
    component: Login
  },
  {
    path: '/panel',
    meta: {
      isNeedLogin: true
    },
    redirect: '/panel/create'
  },
  {
    path: '/panel/create',
    component: CreatePage,
    meta: {
      isNeedLogin: true
    }
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '*',
    component: NotFound
  }
]
