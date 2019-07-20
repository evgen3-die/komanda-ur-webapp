<template>
  <div>
    <app-header />
    <router-view />
    <div class="bg-dark text-light">
      <b-container>
        <app-footer />
      </b-container>
    </div>
    <notifications
      position="bottom right"
    >
      <template
        slot="body"
        slot-scope="props"
      >
        <b-alert
          class="mr-3"
          show
          variant="danger"
        >
          <div>
            {{ props.item.title }}
          </div>
          <div>
            {{ props.item.text }}
          </div>
        </b-alert>
      </template>
    </notifications>
  </div>
</template>

<script>
import { AppHeader, AppFooter } from '@/modules'

const SITE_NAME = 'Единый портал соглашений УР'

export default {
  components: { AppHeader, AppFooter },
  metaInfo () {
    return {
      titleTemplate: chunk => [chunk, SITE_NAME]
        .filter(partial => partial)
        .join(' - ')
    }
  }
}
</script>

<style lang="scss">
html {}
</style>
