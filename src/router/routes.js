import { Home, Login, AgreementPage, NotFound } from '@/views'

export default [
  {
    path: '/',
    component: Home
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
    children: [
      {
        path: 'add'
      }
    ]
  },
  {
    path: '/responsible',
    children: [
      {
        path: ':id'
      }
    ]
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
