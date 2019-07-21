import Vue from 'vue'
import Vuex from 'vuex'

import { token } from './utils'
import { fetchLogin, fetchHandbooks } from './services'

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
    isLogin: false,
    handbooks: {}
  },
  getters: {
    menu: () => MENU
  },
  mutations: {
    updateLoginStatus (state) {
      state.isLogin = !!token.get()
    },
    setHandbooks (state, handbooks) {
      state.handbooks = handbooks
    }
  },
  actions: {
    async login ({ commit }, { email, password }) {
      const value = await fetchLogin(email, password)

      token.set(value)
      commit('updateLoginStatus')
    },
    async init ({ commit, dispatch }) {
      try {
        await dispatch('loadHandbooks')
      } catch (e) {
        console.error(e)
      } finally {
        commit('updateLoginStatus')
      }
    },
    async logout ({ commit }) {
      token.remove()
      commit('updateLoginStatus')
    },
    async loadHandbooks ({ commit }) {
      commit('setHandbooks', await fetchHandbooks())
    }
  }
})
