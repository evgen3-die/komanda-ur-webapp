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
        <b-row class="mb-3 mb-md-5">
          <b-col md="8">
            <page-title>
              {{ response.name }}
            </page-title>
          </b-col>
          <b-col md="4">
            <div>
              <b-button
                class="mr-2"
                variant="outline-primary"
                @click="onClickPrint"
              >
                <font-awesome-icon
                  icon="print"
                  class="mr-1"
                />
                Распечатать
              </b-button>
            </div>
            <div
              v-if="isLogin"
              class="mt-3"
            >
              <b-button
                class="mr-3"
                variant="warning"
              >
                Удалить
              </b-button>
              <b-button
                variant="outline-warning"
              >
                Редактировать
              </b-button>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="8">
            <b-nav
              v-if="isLogin"
              pills
            >
              <b-nav-item
                :active="!isProgress"
                @click.prevent="isProgress = false"
              >
                Документ
              </b-nav-item>
              <b-nav-item
                :active="isProgress"
                @click.prevent="isProgress = true"
              >
                Этапы реализации
              </b-nav-item>
            </b-nav>

            <agreement-header
              class="mt-3"
              :number="response.id"
              :status="response.status.name"
            />
            <hr>

            <template v-if="isProgress">
              <div class="mb-3 d-flex align-items-center tasks">
                <div
                  class="flex-shrink-0 circle d-flex align-items-center
                justify-content-center h4 font-weight-bold rounded-circle mb-0 bg-success text-white"
                >
                  1
                </div>
                <div class="ml-3">
                  <div class="text-muted">
                    28.05.2018
                  </div>
                  <div>Подписание соглашения</div>
                </div>
              </div>
              <div class="mb-3 d-flex align-items-center tasks">
                <div
                  class="flex-shrink-0 circle d-flex align-items-center
                justify-content-center h4 font-weight-bold rounded-circle mb-0 text-white bg-dark"
                >
                  2
                </div>
                <div class="ml-3">
                  <div class="text-muted">
                    28.05.2018
                  </div>
                  <div>Публикация соглашения</div>
                </div>
              </div>
            </template>

            <template v-else>
              <div>
                <div class="text-muted">
                  Полное название
                </div>
                <div>
                  <small class="font-weight-bold">
                    {{ response.full_name }}
                  </small>
                </div>
              </div>
              <div class="mt-4">
                <div class="text-muted">
                  Стороны
                </div>
                <div>
                  <small class="font-weight-bold">
                    {{ response.sides.join(' и ') }}
                  </small>
                </div>
              </div>
              <pdf
                class="mt-5"
                :src="response.document_text"
              />
            </template>
          </b-col>
          <b-col md="4">
            <div class="border rounded px-4 pt-5 pb-3">
              <b-button
                :href="response.document_text"
                target="_blank"
                size="lg"
                variant="primary"
                block
              >
                Скачать соглашение
              </b-button>
              <div class="text-muted text-center mt-2">
                pdf
              </div>
            </div>

            <div class="mt-4 mt-md-5">
              <div class="text-muted">
                Теги
              </div>
              <div class="mt-1 h5">
                <b-badge
                  v-for="(tag, i) in tags"
                  :key="i"
                  variant="light"
                  class="mr-2 py-2 mb-2"
                >
                  {{ tag }}
                </b-badge>
              </div>
            </div>

            <div class="border rounded p-4 mt-4 mt-md-5">
              <div>
                <div class="text-muted">
                  Размещено:
                </div>
                <div>
                  {{ response.created_at }}
                </div>
              </div>
              <div class="mt-3">
                <div class="text-muted">
                  Дата заключения:
                </div>
                <div>
                  {{ response.sign_date }}
                </div>
              </div>
              <div class="mt-3">
                <div class="text-muted">
                  Период действия:
                </div>
                <div>
                  {{ response.validity_period }}
                </div>
              </div>
              <div class="mt-3">
                <div class="text-muted">
                  Категория:
                </div>
                <div>
                  {{ response.category.name }}
                </div>
              </div>
            </div>

            <div class="border rounded p-4 mt-4 mt-md-5 position-relative">
              <div class="text-muted">
                Кураторы соглашения
              </div>
              <div class="mt-3 font-weight-bold">
                {{ response.representatives.join(', ') }}
              </div>
            </div>
          </b-col>
        </b-row>
      </template>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { PageTitle, Pdf, AgreementHeader } from '@/components'
import { fetchAgreement } from '@/services'

const TAGS = [
  'Агропромышленный комплекс',
  'Туризм',
  'Пищевая промышленность',
  'Образование'
]

export default {
  components: { PageTitle, Pdf, AgreementHeader },
  data () {
    return {
      tags: TAGS,
      isProgress: false,
      isLoading: true,
      response: {}
    }
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  created () {
    this.loadAgreement()
  },
  methods: {
    onClickPrint () {
      window.print()
    },
    async loadAgreement () {
      try {
        this.response = await fetchAgreement(this.$route.params.id)
        this.isLoading = false
      } catch (e) {
        this.$router.push('/404')
        throw e
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.circle {
  width: 58px;
  height: 58px;
}
</style>
