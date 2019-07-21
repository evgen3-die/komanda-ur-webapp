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
    <b-row>
      <b-col
        v-for="(i) in 3"
        :key="i"
        lg="4"
        class="mb-3 mb-lg-0"
      >
        <agreement-card />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { AgreementCard } from '@/components'

export default {
  components: { AgreementCard }
}
</script>
