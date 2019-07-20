<template>
  <b-container class="mt-5 pb-5 mb-5">
    <b-form
      class="form bg-white rounded p-4"
      @submit.prevent="onSubmitForm"
    >
      <page-title class="text-center mb-4">
        {{ pageTitle }}
      </page-title>
      <b-form-input
        v-model="email"
        type="email"
        class="mb-2"
        placeholder="Email"
        size="lg"
        required
        autofocus
      />
      <b-form-input
        v-model="password"
        type="password"
        class="mb-3"
        placeholder="Пароль"
        size="lg"
        required
      />
      <b-button
        variant="primary"
        size="lg"
        type="submit"
        block
        :disabled="isLoading"
        class="mt-4"
      >
        Войти
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'

import { meta } from '@/mixins'
import { PageTitle } from '@/components'

export default {
  components: { PageTitle },
  mixins: [
    meta('Авторизация')
  ],
  data () {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    ...mapActions({
      async login (dispatch) {
        this.isLoading = true

        try {
          await dispatch('login', {
            email: this.email,
            password: this.password
          })
          this.$router.push('/panel')
        } catch (e) {
          this.$notify('Неправильный логин или пароль')
          throw e
        } finally {
          this.isLoading = false
        }
      }
    }),
    onSubmitForm () {
      this.login()
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  max-width: 360px;
  margin: auto;
}

.form-control {
  position: relative;

  &:focus {
    z-index: 2;
  }
}
</style>
