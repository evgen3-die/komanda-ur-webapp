<template>
  <div>
    <page-title>
      Поиск соглашений
    </page-title>
    <b-form
      class="position-relative mt-2 mt-lg-4"
      @submit.prevent="onSubmitForm"
    >
      <b-form-input
        v-model="query"
        class="shadow input"
        size="lg"
        placeholder="Введите ключевые слова поиска"
        required
      />
      <b-button
        class="button d-none d-sm-block"
        size="lg"
        variant="primary"
        type="submit"
      >
        Найти
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { PageTitle } from '@/components'

export default {
  components: { PageTitle },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    onSubmitForm () {
      this.$router.push({ path: '/agreements', query: { query: this.query } })
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.input {
  height: 76px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.button {
  height: 56px;
}
</style>
