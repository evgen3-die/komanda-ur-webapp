<template>
  <div class="bg-white py-5">
    <b-container>
      <b-row>
        <b-col md="8">
          <page-title>Соглашение между Правительством Удмуртской Республики (Российская Федерация) и Народным Правительством провинции Сычуань (Китайская Народная Республика)</page-title>
        </b-col>
        <b-col md="4">
          <div>
            <b-button
              class="mr-2"
              variant="outline-secondary"
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
          <div class="d-flex mt-5">
            <div>№ 738</div>
            <div class="ml-auto">
              <span class="text-muted mr-1">Статус:</span>
              <span class="text-uppercase font-weight-bold">Заключено</span>
            </div>
          </div>
          <hr>
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
          <!-- <pdf
            :src="pdf"
          /> -->
        </b-col>
        <b-col md="4">
          <div class="border rounded px-3 pt-5 pb-3">
            <b-button
              :href="pdf"
              target="_blank"
              size="lg"
              variant="dark"
              block
            >
              Скачать соглашение
            </b-button>
            <div class="text-muted text-center mt-2">
              pdf, 241.55 Кб
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { PageTitle, Pdf } from '@/components'

export default {
  components: { PageTitle, Pdf },
  data () {
    return {
      pdf: 'http://app.fedgull.ru/content/AB-434_150.pdf'
    }
  },
  methods: {
    onClickPrint () {
      window.print()
    }
  }
}
</script>
