<template>
  <div>
    <page-title>
      Поиск соглашений
    </page-title>
    <b-form class="position-relative mt-2 mt-lg-4">
      <b-form-input
        class="shadow input"
        size="lg"
        placeholder="Введите ключевые слова поиска"
      />
      <b-button
        class="button d-none d-sm-block"
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
  text-overflow: ellipsis;
  white-space: nowrap;
}

.button {
  height: 56px;
}
</style>
