<template>
  <div class="d-flex">
    <div class="text-muted">
      № {{ number }}
    </div>
    <div class="ml-auto">
      <span class="text-muted mr-1">Статус:</span>
      <span class="text-uppercase font-weight-bold">{{ status }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: [Number, String],
      default: ''
    },
    status: {
      type: String,
      default: ''
    }
  }
}
</script>
