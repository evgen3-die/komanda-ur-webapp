<template>
  <div>
    <b-container>
      <home-search class="mt-3 mt-lg-5 pt-lg-5" />
      <categories
        :agreements="agreements"
        :is-loading="isLoading"
        class="mt-5 pt-lg-5"
      />
    </b-container>
    <div class="bg-white py-5 mt-lg-5">
      <b-container>
        <home-agreements
          :agreements="lastAgreements"
          :is-loading="isLoading"
        />
        <statistics class="mt-lg-5 py-lg-5 py-3" />
      </b-container>
    </div>
  </div>
</template>

<script>
import { HomeSearch, Categories, Statistics, HomeAgreements } from '@/modules'
import { fetchAgreementsList } from '@/services'

export default {
  components: { HomeSearch, Categories, Statistics, HomeAgreements },
  data () {
    return {
      agreements: [],
      isLoading: true
    }
  },
  computed: {
    lastAgreements () {
      return this.agreements.slice().reverse().slice(0, 3)
    }
  },
  created () {
    this.loadAgreementsList()
  },
  methods: {
    async loadAgreementsList () {
      try {
        this.agreements = await fetchAgreementsList()
        this.isLoading = false
      } catch (e) {
        this.$notify('Ошибка запроса соглашений')
        throw e
      }
    }
  }
}
</script>
