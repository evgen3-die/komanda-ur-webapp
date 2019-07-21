<template>
  <div>
    <div class="d-flex mb-1 mt-lg-3 align-items-baseline">
      <div class="h5">
        Категории
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
        v-for="(category, i) in categories"
        :key="i"
        lg="3"
        md="6"
        class="mb-4"
      >
        <div
          class="bg-white d-block rounded p-4 position-relative shadow-sm"
        >
          <div class="icon d-flex align-items-center">
            <img
              :src="category.icon"
              alt=""
            >
          </div>
          <div class="mt-2 mb-4">
            {{ category.title }}
          </div>
          <div class="text-muted">
            {{ category.count }}
          </div>
          <a
            href="#"
            class="stretched-link"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import gosudarstvo from '@/assets/images/categories/1.png'
import ekonomika from '@/assets/images/categories/2.png'
import obrazovanie from '@/assets/images/categories/3.png'
import zdorovie from '@/assets/images/categories/4.png'
import ekologiya from '@/assets/images/categories/5.png'
import kulutra from '@/assets/images/categories/6.png'
import transport from '@/assets/images/categories/7.png'
import torgovlya from '@/assets/images/categories/8.png'

const ICONS = {
  1: gosudarstvo,
  2: ekonomika,
  3: obrazovanie,
  4: zdorovie,
  5: ekologiya,
  6: kulutra,
  7: transport,
  8: torgovlya
}

export default {
  props: {
    agreements: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState([
      'handbooks'
    ]),
    categories () {
      return this.handbooks.categories
        .map(category => ({
          icon: ICONS[category.id],
          title: category.name,
          count: this.agreements
            .reduce((count, { id }) => {
              return count + (id === category.id ? 1 : 0)
            }, 0)
        }))
        .filter(({ count }) => !!count)
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  height: 50px;
}
</style>
