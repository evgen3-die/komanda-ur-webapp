<template>
  <b-container class="my-lg-5 py-lg-5 mt-3 mb-5">
    <page-title>
      {{ pageTitle }}
    </page-title>
  </b-container>
</template>

<script>
import { PageTitle } from '@/components'
import { meta } from '@/mixins'

export default {
  components: { PageTitle },
  mixins: [
    meta('Ничего не найдено')
  ]
}
</script>
