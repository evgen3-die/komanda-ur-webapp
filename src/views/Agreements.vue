<template>
  <div class="bg-white py-5">
    <b-container>
      <page-title>
        {{ pageTitle }}
      </page-title>
      <b-row class="mt-5">
        <b-col md="8">
          <agreement-card class="mb-3" />
          <agreement-card class="mb-3" />
          <agreement-card class="mb-3" />
          <b-pagination
            :total-rows="100"
            :per-page="10"
          />
        </b-col>
        <b-col md="4">
          <b-form
            class="border rounded p-4"
            @submit.prevent
          >
            <b-form-group
              label="Ключевые слова"
            >
              <b-form-input
                type="text"
                size="lg"
              />
            </b-form-group>

            <b-form-group
              label="Статус"
            >
              <b-form-select size="lg" />
            </b-form-group>

            <b-form-group
              label="Категория"
            >
              <b-form-select size="lg" />
            </b-form-group>

            <b-form-group
              label="Куратор"
            >
              <b-form-select size="lg" />
            </b-form-group>

            <b-form-group
              label="Дата размещения"
            >
              <b-form-input
                type="date"
                size="lg"
              />
            </b-form-group>

            <b-form-group
              label="Период публикации"
            >
              <b-form-input
                type="date"
                size="lg"
              />
              <b-form-input
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
            >
              Сбросить фильтры
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { meta } from '@/mixins'
import { PageTitle, AgreementCard } from '@/components'

export default {
  components: { PageTitle, AgreementCard },
  mixins: [
    meta('Реестр соглашений')
  ]
}
</script>
