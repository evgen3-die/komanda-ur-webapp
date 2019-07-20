<template>
  <footer class="py-4 py-md-5">
    <b-row>
      <b-col md="5">
        <img
          src="@/assets/images/logo-light.svg"
          alt=""
        >
        <div class="mt-4">
          <div class="text-muted">
            Адрес:
          </div>
          <div>
            426007, Удмуртская Республика,
            г. Ижевск, ул. Пушкинская , 214
          </div>
        </div>
        <div class="mt-4">
          <div class="text-muted">
            Тел./факс:
          </div>
          <div>
            (3412) 497-200
          </div>
        </div>
      </b-col>
      <b-col
        md="3"
      >
        <h5 class="mb-3 text-muted">
          Основные разделы
        </h5>
        <ul class="list-unstyled text-small">
          <li
            v-for="(item, i) in menu"
            :key="i"
          >
            <a
              v-if="item.isExternal"
              class="text-reset"
              :href="item.to"
              target="_blank"
            >
              {{ item.name }}
            </a>
            <router-link
              v-else
              class="text-reset"
              :to="item.to"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </b-col>
    </b-row>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'menu'
    ])
  }
}
</script>
