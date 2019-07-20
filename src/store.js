import Vue from 'vue'
import Vuex from 'vuex'

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
  },
  {
    name: 'Новости',
    to: ''
  }
]

export default new Vuex.Store({
  getters: {
    menu: () => MENU
  }
})
