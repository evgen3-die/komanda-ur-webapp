<template>
  <div class="border rounded p-4 position-relative">
    <agreement-header
      :number="number"
      :status="status"
    />
    <div class="mt-3">
      <small class="font-weight-bold">
        {{ name }}
      </small>
    </div>
    <div class="mt-3">
      <small>
        {{ tags.map(tag => tag.name).join(', ') }}
      </small>
    </div>
    <div class="mt-3 d-md-flex text-muted">
      <small class="d-block">
        <div>Размещено: {{ created }}</div>
        <div>Дата заключения: {{ sign }}</div>
      </small>
      <small class="ml-auto text-nowrap d-block mt-2 mt-sm-0">
        <font-awesome-icon
          icon="file-pdf"
          class="mr-1"
          size="lg"
        />
        PDF
      </small>
    </div>
    <router-link
      :to="to"
      class="stretched-link"
    />
  </div>
</template>

<script>
import AgreementHeader from './AgreementHeader'

export default {
  components: { AgreementHeader },
  props: {
    to: {
      type: String,
      default: ''
    },
    number: {
      type: [String, Number],
      default: ''
    },
    status: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    created: {
      type: String,
      default: ''
    },
    sign: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>
