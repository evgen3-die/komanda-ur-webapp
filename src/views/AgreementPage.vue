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
          <pdf
            src="http://app.fedgull.ru/content/AB-434_150.pdf"
          />
        </b-col>
        <b-col md="4">
          asdasd
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { PageTitle, Pdf } from '@/components'

export default {
  components: { PageTitle, Pdf },
  methods: {
    onClickPrint () {
      window.print()
    }
  }
}
</script>
