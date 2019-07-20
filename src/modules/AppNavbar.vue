<template>
  <nav class="navbar navbar-dark bg-dark p-0">
    <b-container class="flex-md-nowrap">
      <a
        class="p-2 text-light mr-md-auto ml-n2"
        href="https://uslugi.udmurt.ru/"
        target="_blank"
      >
        Полезные ссылки
      </a>
      <router-link
        class="p-2 text-light"
        to="/"
      >
        Поиск
      </router-link>
      <router-link
        class="p-2 text-light"
        to="/"
      >
        Версия для слабовидящих
      </router-link>
      <router-link
        class="p-2 text-light"
        :to="panelLink"
        :class="panelClasses"
      >
        Личный кабинет
      </router-link>
      <a
        v-if="isLogin"
        class="p-2 text-light mr-n2"
        href="/"
        @click.prevent="onClickLogout"
      >
        Выход
      </a>
    </b-container>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'isLogin'
    ]),
    panelLink () {
      return this.isLogin ? '/panel' : '/login'
    },
    panelClasses () {
      return {
        'mr-n2': !this.isLogin
      }
    }
  },
  methods: {
    ...mapActions({
      async logout (dispatch) {
        await dispatch('logout')
        this.$router.push('/')
      }
    }),
    onClickLogout () {
      this.logout()
    }
  }
}
</script>

<style lang="scss">
.navbar {
  font-size: .75em;
}
</style>
