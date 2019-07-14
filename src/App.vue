<template>
  <div id="app">
    <app-header />
    <b-container>
      <router-view />
      <app-footer />
    </b-container>
  </div>
</template>

<script>
import { AppHeader, AppFooter } from '@/modules'

export default {
  components: { AppHeader, AppFooter }
}
</script>

<style lang="scss">
html {}
</style>
