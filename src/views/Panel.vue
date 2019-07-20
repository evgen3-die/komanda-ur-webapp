<template>
  <div class="bg-white py-5">
    <b-container>
      <page-title>{{ pageTitle }}</page-title>
      <b-row class="mt-5">
        <b-col md="4">
          <b-nav
            vertical
            pills
          >
            <b-nav-item active>
              Active
            </b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
          </b-nav>
        </b-col>
        <b-col md="8">
          asd
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { PageTitle } from '@/components'
import { meta } from '@/mixins'

export default {
  components: { PageTitle },
  mixins: [
    meta('Личный кабинет')
  ]
}
</script>
