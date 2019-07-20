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
    component: Login
  },
  {
    path: '/panel',
    meta: {
      requiresLogin: true
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
