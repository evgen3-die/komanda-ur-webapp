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
                :options="statuses"
                size="lg"
              />
            </b-form-group>

            <b-form-group
              label="Категория"
            >
              <b-form-select
                v-model="category"
                :options="categories"
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
          <div
            v-if="isLoading"
            class="text-center"
          >
            <b-spinner variant="primary" />
          </div>
          <template v-else>
            <agreement-card
              v-for="(agreement, i) in response"
              :key="i"
              class="mb-3"
              :to="`/agreements/${agreement.id}`"
              :number="agreement.id"
              :status="agreement.status.name"
              :name="agreement.name"
              :created="agreement.created_at"
              :sign="agreement.sign_date"
            />
          </template>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { meta } from '@/mixins'
import { PageTitle, AgreementCard } from '@/components'
import { fetchAgreementsList } from '@/services'

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
      options: OPTIONS,
      isLoading: true,
      response: []
    }
  },
  computed: {
    ...mapState([
      'handbooks'
    ]),
    statuses () {
      return this.handbooks.statuses.map(status => ({
        value: status.id,
        text: status.name
      }))
    },
    categories () {
      return this.handbooks.categories.map(category => ({
        value: category.id,
        text: category.name
      }))
    }
  },
  created () {
    this.loadAgreementsList()
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
    },
    async loadAgreementsList () {
      try {
        this.response = await fetchAgreementsList()
        this.isLoading = false
      } catch (e) {
        this.$notify('Ошибка запроса соглашений')
        throw e
      }
    }
  }
}
</script>
