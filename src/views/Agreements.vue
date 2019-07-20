<template>
  <div class="bg-white py-5">
    <b-container>
      <page-title>
        {{ pageTitle }}
      </page-title>
      <b-row class="mt-5">
        <b-col md="8">
          <agreement-card class="mb-3" />
          <agreement-card class="mb-3" />
          <agreement-card class="mb-3" />
          <b-pagination
            :total-rows="100"
            :per-page="10"
          />
        </b-col>
        <b-col md="4">
          asdasd
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { meta } from '@/mixins'
import { PageTitle, AgreementCard } from '@/components'

export default {
  components: { PageTitle, AgreementCard },
  mixins: [
    meta('Реестр соглашений')
  ]
}
</script>
