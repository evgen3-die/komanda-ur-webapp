import axios from 'axios'
import token from './token'

function authorizationInterceptor (config) {
  if (token.get()) {
    config.headers.authorization = token.get()
  }

  return config
}

const instance = axios.create()
instance.interceptors.request.use(authorizationInterceptor, Promise.reject)

export default instance
