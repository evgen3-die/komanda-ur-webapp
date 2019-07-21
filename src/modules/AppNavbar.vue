<template>
  <nav class="navbar navbar-dark bg-dark py-2 px-0">
    <b-container class="flex-md-nowrap">
      <a
        class="p-2 text-light mr-md-auto ml-n2 d-none d-md-block"
        href="https://uslugi.udmurt.ru/"
        target="_blank"
      >
        Сайт Главы и Правительства Удмуртской Республики
        <font-awesome-icon
          icon="link"
          class="ml-1"
        />
      </a>
      <router-link
        class="p-2 text-light"
        :to="panelLink"
        :class="panelClasses"
      >
        <font-awesome-icon
          icon="user-circle"
          size="lg"
          class="mr-1"
        />
        Личный кабинет
      </router-link>
      <a
        v-if="isLogin"
        class="p-2 text-light mr-md-n2"
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
