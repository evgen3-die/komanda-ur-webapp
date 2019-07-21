<template>
  <div class="bg-white pt-3 pb-5 py-lg-5">
    <b-container>
      <page-title>
        {{ pageTitle }}
      </page-title>
      <b-row class="mt-3 mt-lg-5 flex-md-row-reverse">
        <b-col md="4">
          <b-form
            class="border rounded p-4"
            @submit.prevent
          >
            <b-form-group
              label="Ключевые слова"
            >
              <b-form-input
                v-model="query"
                type="text"
                size="lg"
              />
            </b-form-group>

            <b-form-group
              label="Статус"
            >
              <b-form-select
                v-model="status"
                :options="options"
                size="lg"
              />
            </b-form-group>

            <b-form-group
              label="Категория"
            >
              <b-form-select
                v-model="category"
                :options="options"
                size="lg"
              />
            </b-form-group>

            <b-form-group
              label="Куратор"
            >
              <b-form-select
                v-model="curator"
                :options="options"
                size="lg"
              />
            </b-form-group>

            <b-form-group
              label="Дата размещения"
            >
              <b-form-input
                v-model="created"
                type="date"
                size="lg"
              />
            </b-form-group>

            <b-form-group
              label="Период публикации"
            >
              <b-form-input
                v-model="publishFrom"
                type="date"
                size="lg"
              />
              <b-form-input
                v-model="publishTo"
                type="date"
                size="lg"
                class="mt-2"
              />
            </b-form-group>

            <b-button
              variant="outline-primary"
              size="lg"
              block
              class="mt-4"
              @click.prevent="onClickClear"
            >
              Сбросить фильтры
            </b-button>
          </b-form>
        </b-col>
        <b-col
          md="8"
          class="mt-4 mt-md-0"
        >
          <agreement-card class="mb-3" />
          <agreement-card class="mb-3" />
          <agreement-card class="mb-3" />
          <b-pagination
            :total-rows="100"
            :per-page="10"
            class="mt-4"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { meta } from '@/mixins'
import { PageTitle, AgreementCard } from '@/components'

const OPTIONS = [
  'Один',
  'Два'
]

export default {
  components: { PageTitle, AgreementCard },
  mixins: [
    meta('Реестр соглашений')
  ],
  data () {
    return {
      query: '',
      status: '',
      category: '',
      curator: '',
      created: '',
      publishFrom: '',
      publishTo: '',
      options: OPTIONS
    }
  },
  methods: {
    onClickClear () {
      this.query = ''
      this.status = ''
      this.category = ''
      this.curator = ''
      this.created = ''
      this.publishFrom = ''
      this.publishTo = ''
    }
  }
}
</script>
