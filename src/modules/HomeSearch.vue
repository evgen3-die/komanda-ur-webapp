<template>
  <div>
    <page-title>
      Поиск соглашений
    </page-title>
    <b-form class="position-relative mt-4">
      <b-form-input
        class="shadow input"
        size="lg"
        placeholder="Введите ключевые слова поиска"
      />
      <b-button
        class="button"
        size="lg"
        variant="primary"
      >
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
.btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.input {
  height: 76px;
}

.button {
  height: 56px;
}
</style>
