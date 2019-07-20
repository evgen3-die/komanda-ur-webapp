<template>
  <b-form
    class="form"
    @submit.prevent="onSubmitForm"
  >
    <h1 class="h3 mb-3 font-weight-normal text-center">
      {{ title }}
    </h1>
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
export default {
  data () {
    return {
      title: 'Авторизация'
    }
  },
  methods: {
    onSubmitForm () {
      console.log('submit')
    }
  },
  metaInfo () {
    return {
      title: this.title
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
