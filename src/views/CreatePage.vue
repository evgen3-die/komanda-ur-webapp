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
          <b-form-group
            label="Теги"
            class="mb-4"
          >
            <b-form-select
              v-model="tags"
              multiple
              :select-size="4"
              :options="options"
              required
            />
          </b-form-group>
          <b-row>
            <b-col md="6">
              <b-form-group
                label="Статус"
                class="mb-4"
              >
                <b-form-select
                  v-model="status"
                  :options="statuses"
                  required
                  size="lg"
                />
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="Категория"
                class="mb-4"
              >
                <b-form-select
                  v-model="category"
                  :options="categories"
                  size="lg"
                  required
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
                label="Куратор"
                class="mb-4"
              >
                <b-form-select
                  v-model="curator"
                  :options="curators"
                  size="lg"
                  required
                />
              </b-form-group>
            </b-col>
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
          </b-row>
          <b-form-group
            label="Период действия"
            class="mb-4"
          >
            <b-row>
              <b-col md="6">
                <b-form-input
                  v-model="periodFrom"
                  type="date"
                  size="lg"
                  required
                />
              </b-col>
              <b-col
                md="6"
                class="mt-2 mt-md-0"
              >
                <b-form-input
                  v-model="periodTo"
                  type="date"
                  size="lg"
                  required
                />
              </b-col>
            </b-row>
          </b-form-group>
          <b-form-group
            label="Этапы выполнения"
            class="mb-4"
          >
            <div
              v-for="(task, i) in tasks"
              :key="i"
              class="border rounded p-3 mb-3"
            >
              <b-row>
                <b-col md="6">
                  <b-form-group
                    label="Название"
                  >
                    <b-form-input
                      v-model="task.name"
                      type="text"
                      size="lg"
                      required
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="Дата"
                  >
                    <b-form-input
                      v-model="task.date"
                      type="date"
                      size="lg"
                      required
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <div>
                <b-form-checkbox
                  v-model="task.isComplete"
                >
                  Готово
                </b-form-checkbox>
              </div>
              <div
                v-if="tasks.length > 1"
                class="mt-3"
              >
                <b-button
                  variant="warning"
                  @click.prevent="onClickDeleteTask(i)"
                >
                  Удалить
                </b-button>
              </div>
            </div>
            <div>
              <b-button
                variant="success"
                @click.prevent="onClickAddTask"
              >
                Добавить этап
              </b-button>
            </div>
          </b-form-group>

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

const EMPTY_TASK = {
  name: '',
  date: '',
  isComplete: false
}

const OPTIONS = [
  'Один',
  'Два'
]

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
      curator: '',
      contractDate: '',
      periodFrom: '',
      periodTo: '',
      tasks: [
        {
          ...EMPTY_TASK
        }
      ],
      options: OPTIONS,
      isLoading: true
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
    curators () {
      return [] /* this.agreements
        .reduce((curators, agreement) => [
          ...curators,
          ...agreement.responsible_users
        ], [])
        .map(curator => ({
          value: curator.id,
          text: curator.name
        })) */
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
    }
  }
}
</script>
