<template>
  <b-form
    class="form"
    @submit.prevent="onSubmitForm"
  >
    <page-title class="text-center">
      {{ pageTitle }}
    </page-title>
    <b-form-input
      v-model="email"
      type="email"
      class="mb-3"
      placeholder="Email"
      required
      autofocus
    />
    <b-form-input
      v-model="password"
      type="password"
      class="mb-3"
      placeholder="Пароль"
      required
    />
    <b-button
      variant="primary"
      size="lg"
      type="submit"
      block
      :disabled="isLoading"
    >
      Войти
    </b-button>
  </b-form>
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
          this.$notify(e.message)
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
  max-width: 340px;
  margin: auto;
}

.form-control {
  position: relative;

  &:focus {
    z-index: 2;
  }
}
</style>
