<template>
  <div>
    <div class="d-flex mb-3 align-items-baseline">
      <div class="h5">
        Недавно размещены
      </div>
      <router-link
        to="/agreements"
        class="ml-auto d-none d-sm-block"
      >
        Все соглашения
      </router-link>
    </div>
    <div
      v-if="isLoading"
      class="text-center"
    >
      <b-spinner variant="primary" />
    </div>
    <b-row v-else>
      <b-col
        v-for="(agreement, i) in agreements"
        :key="i"
        lg="4"
        class="mb-3 mb-lg-0"
      >
        <agreement-card
          :to="`/agreements/${agreement.id}`"
          :number="agreement.id"
          :status="agreement.status.name"
          :name="agreement.name"
          :created="agreement.created_at"
          :sign="agreement.sign_date"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { AgreementCard } from '@/components'

export default {
  components: { AgreementCard },
  props: {
    agreements: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
