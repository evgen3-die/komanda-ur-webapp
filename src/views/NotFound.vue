<template>
  <b-container class="my-5 py-5">
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
