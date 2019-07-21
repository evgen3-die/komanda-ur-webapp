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
        <statistics
          :agreements="agreements"
          :is-loading="isLoading"
          class="mt-lg-5 py-lg-5 py-3"
        />
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { HomeSearch, Categories, Statistics, HomeAgreements } from '@/modules'

export default {
  components: { HomeSearch, Categories, Statistics, HomeAgreements },
  data () {
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapState([
      'agreements'
    ]),
    lastAgreements () {
      return this.agreements.slice().reverse().slice(0, 3)
    }
  },
  created () {
    this.loadAgreementsList()
  },
  methods: {
    ...mapActions({
      async loadAgreementsList (dispatch) {
        try {
          await dispatch('loadAgreementsList')
          this.isLoading = false
        } catch (e) {
          this.$notify('Ошибка запроса соглашений')
          throw e
        }
      }
    })
  }
}
</script>
