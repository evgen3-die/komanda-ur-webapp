import { Home, Login } from '@/views'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/agreements',
    children: [
      {
        path: ':id'
      }
    ]
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
  }
]
