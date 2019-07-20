<template>
  <div class="bg-white py-5">
    <b-container>
      <page-title>{{ pageTitle }}</page-title>
      <b-form
        class="mt-5"
        @submit.prevent
      >
        <b-form-group
          label="Название"
          class="mb-4"
        >
          <b-form-input
            type="text"
            size="lg"
          />
        </b-form-group>
        <b-row>
          <b-col>
            <b-form-group
              label="Полное название"
              class="mb-4"
            >
              <b-form-textarea />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="Стороны"
              class="mb-4"
            >
              <b-form-textarea />
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group
          label="Ссылка на соглашение"
          class="mb-4"
        >
          <b-form-input
            type="url"
            size="lg"
          />
        </b-form-group>
        <b-form-group
          label="Теги"
          class="mb-4"
        >
          <b-form-select
            multiple
            :select-size="4"
          />
        </b-form-group>
        <b-row>
          <b-col>
            <b-form-group
              label="Статус"
              class="mb-4"
            >
              <b-form-select size="lg" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="Категория"
              class="mb-4"
            >
              <b-form-select size="lg" />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              label="Куратор"
              class="mb-4"
            >
              <b-form-select size="lg" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="Дата заключения"
              class="mb-4"
            >
              <b-form-input
                type="date"
                size="lg"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group
          label="Период действия"
          class="mb-4"
        >
          <b-row>
            <b-col>
              <b-form-input
                type="date"
                size="lg"
              />
            </b-col>
            <b-col>
              <b-form-input
                type="date"
                size="lg"
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
              <b-col>
                <b-form-group
                  label="Название"
                >
                  <b-form-input
                    v-model="task.name"
                    type="text"
                    size="lg"
                  />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  label="Дата"
                >
                  <b-form-input
                    v-model="task.date"
                    type="date"
                    size="lg"
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
          variant="primary"
          size="lg"
          class="mt-5"
          block
        >
          Создать
        </b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { PageTitle } from '@/components'
import { meta } from '@/mixins'

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
      tasks: [
        {
          ...EMPTY_TASK
        }
      ]
    }
  },
  methods: {
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
