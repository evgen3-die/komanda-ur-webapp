<template>
  <div>
    <b-container>
      <home-search class="mt-5 pt-5" />
      <categories class="mt-5 pt-5" />
    </b-container>
    <div class="bg-white py-5 mt-5">
      <b-container>
        <home-agreements />
        <statistics class="mt-5 py-5" />
      </b-container>
    </div>
  </div>
</template>

<script>
import { HomeSearch, Categories, Statistics, HomeAgreements } from '@/modules'

export default {
  components: { HomeSearch, Categories, Statistics, HomeAgreements }
}
</script>
