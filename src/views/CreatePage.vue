<template>
  <div class="bg-white pt-3 pb-5 py-lg-5 flex-grow-1">
    <b-container>
      <div
        v-if="isLoading"
        class="text-center"
      >
        <b-spinner variant="primary" />
      </div>
      <template v-else>
        <page-title>{{ pageTitle }}</page-title>
        <b-form
          class="mt-3 mt-md-5"
          @submit.prevent="onSubmitForm"
        >
          <b-form-group
            label="Название"
            class="mb-4"
          >
            <b-form-input
              v-model="name"
              type="text"
              size="lg"
              required
            />
          </b-form-group>
          <b-row>
            <b-col md="6">
              <b-form-group
                label="Полное название"
                class="mb-4"
              >
                <b-form-textarea
                  v-model="fullName"
                  required
                />
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Стороны"
                class="mb-4"
              >
                <b-form-textarea
                  v-model="sides"
                  required
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group
            label="Представители"
            class="mb-4"
          >
            <b-form-textarea
              v-model="representatives"
              required
            />
          </b-form-group>
          <b-form-group
            label="Ссылка на соглашение"
            class="mb-4"
          >
            <b-form-input
              v-model="url"
              type="url"
              size="lg"
              required
            />
          </b-form-group>
          <b-row>
            <b-col>
              <b-form-group
                label="Дата заключения"
                class="mb-4"
              >
                <b-form-input
                  v-model="contractDate"
                  type="date"
                  size="lg"
                  required
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                label="Период действия"
                class="mb-4"
              >
                <b-form-input
                  v-model="periodTo"
                  type="date"
                  size="lg"
                  required
                />
              </b-form-group>
            </b-col>
          </b-row>

          <b-button
            type="submit"
            variant="primary"
            size="lg"
            class="mt-5"
            block
          >
            Создать
          </b-button>
        </b-form>
      </template>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { PageTitle } from '@/components'
import { meta } from '@/mixins'
import { fetchAgreementCreate } from '@/services'

const EMPTY_TASK = {
  name: '',
  date: '',
  isComplete: false
}

export default {
  components: { PageTitle },
  mixins: [
    meta('Добавить соглашение')
  ],
  data () {
    return {
      name: '',
      fullName: '',
      sides: '',
      url: '',
      tags: [],
      status: '',
      category: '',
      curator: '1',
      contractDate: '',
      periodFrom: '',
      periodTo: '',
      tasks: [
        {
          ...EMPTY_TASK
        }
      ],
      isLoading: true,
      representatives: ''
    }
  },
  computed: {
    ...mapState([
      'handbooks',
      'agreements'
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
    },
    tagsOptions () {
      return this.handbooks.tags.map(tag => ({
        value: tag.id,
        text: tag.name
      }))
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
          this.$notify('Ошибка запроса списков')
          throw e
        }
      }
    }),
    onClickDeleteTask (index) {
      this.tasks.splice(index, 1)
    },
    onClickAddTask () {
      this.tasks.push({
        ...EMPTY_TASK
      })
    },
    onSubmitForm () {
      this.create()
    },
    async create () {
      try {
        const id = await fetchAgreementCreate({
          name: this.name,
          full_name: this.fullName,
          sides: this.sides.split('\n'),
          document_text: this.url,
          sign_date: this.contractDate,
          validity_period: this.periodTo,
          representatives: this.representatives.split('\n'),
          status: '1'
        })

        this.$router.push(`/agreements/${id}`)
      } catch (e) {
        this.$notify('Ошибка добавления соглашения')
        throw e
      }
    }
  }
}
</script>
