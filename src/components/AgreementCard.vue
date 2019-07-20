<template>
  <div class="border rounded p-4 position-relative">
    <agreement-header
      number="12"
      status="Заключено"
    />
    <div class="mt-3">
      <small class="font-weight-bold">
        Соглашение между Правительством Удмуртской Республики (Российская Федерация) и Народным Правительством провинции Сычуань (Китайская Народная Республика) о сотрудничестве в торгово-экономической, научно-технической, социально-гуманитарной и культурных областях
      </small>
    </div>
    <div class="mt-3">
      <small>
        Торговля, Культура, Наука</small>
    </div>
    <div class="mt-3 d-flex text-muted">
      <small>
        Размещено: 04.07.2019 <span class="mx-2">|</span> Дата заключения: 20.05.2019
      </small>
      <small class="ml-auto">
        <font-awesome-icon
          icon="file-pdf"
          class="mr-1"
          size="lg"
        />
        PDF
      </small>
    </div>
    <router-link
      to="/agreements/asdasd"
      class="stretched-link"
    />
  </div>
</template>

<script>
import AgreementHeader from './AgreementHeader'

export default {
  components: { AgreementHeader }
}
</script>
