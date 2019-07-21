<template>
  <header>
    <app-navbar />
    <b-container>
      <div class="d-flex flex-column flex-md-row align-items-center py-3">
        <router-link
          to="/"
          class="my-0 mr-md-auto font-weight-normal"
        >
          <img
            src="@/assets/images/logo.svg"
            alt=""
          >
        </router-link>
        <app-menu
          class="mr-md-n2"
          :list="menu"
        />
      </div>
    </b-container>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { AppMenu } from '@/components'
import AppNavbar from '@/modules/AppNavbar'

export default {
  components: { AppMenu, AppNavbar },
  computed: {
    ...mapGetters([
      'menu'
    ])
  }
}
</script>
