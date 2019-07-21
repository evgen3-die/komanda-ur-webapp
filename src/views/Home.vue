<template>
  <div>
    <b-container>
      <home-search class="mt-3 mt-lg-5 pt-lg-5" />
      <categories class="mt-5 pt-lg-5" />
    </b-container>
    <div class="bg-white py-5 mt-lg-5">
      <b-container>
        <home-agreements />
        <statistics class="mt-lg-5 py-lg-5 py-3" />
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
