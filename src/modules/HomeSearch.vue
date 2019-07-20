<template>
  <div>
    <page-title>
      Поиск соглашений
    </page-title>
    <b-form class="form">
      <b-form-input
        size="lg"
        placeholder="Введите ключевые слова поиска"
      />
      <b-button variant="primary">
        Найти
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { PageTitle } from '@/components'

export default {
  components: { PageTitle }
}
</script>

<style lang="scss" scoped>
.form {
  position: relative;
}

.btn {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
