import Vue from 'vue'
import Vuex from 'vuex'

import { token } from './utils'
import { fetchLogin } from './services'

Vue.use(Vuex)

const MENU = [
  {
    name: 'Реестр соглашений',
    to: '/agreements'
  },
  {
    name: 'Опросы',
    to: 'https://docs.google.com/forms/d/1g6YfrK_nkkP1mzvlflSXA2o3MZQdxA0LP5HEYhQk3NA/viewform?edit_requested=true',
    isExternal: true
  }
]

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  getters: {
    menu: () => MENU
  },
  mutations: {
    updateLoginStatus (state) {
      state.isLogin = !!token.get()
    }
  },
  actions: {
    async login ({ commit }, { email, password }) {
      const value = await fetchLogin(email, password)

      token.set(value)
      commit('updateLoginStatus')
    },
    async init ({ commit }) {
      commit('updateLoginStatus')
    },
    async logout ({ commit }) {
      token.remove()
      commit('updateLoginStatus')
    }
  }
})
