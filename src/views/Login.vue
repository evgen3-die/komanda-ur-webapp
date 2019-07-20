<template>
  <b-form
    class="form"
    @submit.prevent="onSubmitForm"
  >
    <page-title class="text-center">
      {{ pageTitle }}
    </page-title>
    <b-form-input
      type="email"
      class="email"
      placeholder="Email"
      required
      autofocus
    />
    <b-form-input
      type="password"
      class="password mb-3"
      placeholder="Пароль"
      required
    />
    <b-button
      variant="primary"
      size="lg"
      type="submit"
      block
    >
      Войти
    </b-button>
  </b-form>
</template>

<script>
import { meta } from '@/mixins'
import { PageTitle } from '@/components'

export default {
  components: { PageTitle },
  mixins: [
    meta('Авторизация')
  ],
  methods: {
    onSubmitForm () {
      console.log('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  max-width: 330px;
  margin: auto;
}

.email {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.password {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.form-control {
  position: relative;

  &:focus {
    z-index: 2;
  }
}
</style>
