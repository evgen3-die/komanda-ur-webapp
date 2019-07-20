import Vue from 'vue'
import Vuex from 'vuex'
import { token } from './utils'

Vue.use(Vuex)

const MENU = [
  {
    name: 'О портале',
    to: ''
  },
  {
    name: 'Регистр соглашений',
    to: ''
  },
  {
    name: 'Ведомства',
    to: ''
  },
  {
    name: 'Ответственные',
    to: ''
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
    async login ({ commit }) {
      token.set('1')
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
