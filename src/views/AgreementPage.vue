<template>
  <div class="bg-white py-5">
    <b-container>
      <b-row class="mb-5">
        <b-col md="8">
          <page-title>Соглашение между Правительством Удмуртской Республики (Российская Федерация) и Народным Правительством провинции Сычуань (Китайская Народная Республика)</page-title>
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
            number="738"
            status="Заключено"
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
                  Соглашение между Правительством Удмуртской Республики (Российская Федерация) и Народным Правительством провинции Сычуань (Китайская Народная Республика) о сотрудничестве в торгово-экономической, научно-технической, социально-гуманитарной и культурных областях
                </small>
              </div>
            </div>
            <div class="mt-4">
              <div class="text-muted">
                Стороны
              </div>
              <div>
                <small class="font-weight-bold">
                  Правительство Удмуртской Республики (Российская Федерация) и Народное Правительство провинция Сычуань (Китайская Народная Республика)
                </small>
              </div>
            </div>
            <pdf
              class="mt-5"
              :src="pdf"
            />
          </template>
        </b-col>
        <b-col md="4">
          <div class="border rounded px-4 pt-5 pb-3">
            <b-button
              :href="pdf"
              target="_blank"
              size="lg"
              variant="primary"
              block
            >
              Скачать соглашение
            </b-button>
            <div class="text-muted text-center mt-2">
              pdf, 241.55 Кб
            </div>
          </div>

          <div class="mt-5">
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

          <div class="border rounded p-4 mt-5">
            <div>
              <div class="text-muted">
                Размещено:
              </div>
              <div>
                11.06.2019
              </div>
            </div>
            <div class="mt-3">
              <div class="text-muted">
                Дата заключения:
              </div>
              <div>
                23.05.2019
              </div>
            </div>
            <div class="mt-3">
              <div class="text-muted">
                Период действия:
              </div>
              <div>
                Бессрочный
              </div>
            </div>
            <div class="mt-3">
              <div class="text-muted">
                Категория:
              </div>
              <div>
                Государство
              </div>
            </div>
          </div>

          <div class="border rounded p-4 mt-5 position-relative">
            <div class="text-muted">
              Куратор соглашения
            </div>
            <div class="mt-3 font-weight-bold">
              Свинин
              Александр
              Александрович
            </div>
            <div class="text-muted mb-3">
              <small>
                Первый заместитель Председателя Правительства Удмуртской Республики
              </small>
            </div>
            <b-button
              size="lg"
              variant="primary"
              block
            >
              36 соглашений на портале
            </b-button>
            <a
              href="#"
              class="stretched-link"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { PageTitle, Pdf, AgreementHeader } from '@/components'

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
      pdf: 'http://app.fedgull.ru/content/AB-434_150.pdf',
      tags: TAGS,
      isProgress: false
    }
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    onClickPrint () {
      window.print()
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
