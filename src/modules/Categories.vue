<template>
  <div>
    <div class="d-flex mb-3 align-items-baseline">
      <div class="h5">
        12 087 соглашений на портале
      </div>
      <router-link
        to="/agreements"
        class="ml-md-auto"
      >
        Все соглашения
      </router-link>
    </div>
    <b-row>
      <b-col
        v-for="(category, i) in categories"
        :key="i"
        md="3"
        class="mb-4"
      >
        <div
          class="bg-white d-block rounded p-4 position-relative"
        >
          <div class="icon d-flex align-items-center">
            <img
              :src="category.icon"
              alt=""
            >
          </div>
          <div class="mt-2 mb-4">
            {{ category.title }}
          </div>
          <div class="text-muted">
            {{ category.count }}
          </div>
          <a
            href="#"
            class="stretched-link"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import gosudarstvo from '@/assets/images/categories/1.png'
import ekonomika from '@/assets/images/categories/2.png'
import obrazovanie from '@/assets/images/categories/3.png'
import zdorovie from '@/assets/images/categories/4.png'
import ekologiya from '@/assets/images/categories/5.png'
import kulutra from '@/assets/images/categories/6.png'
import transport from '@/assets/images/categories/7.png'
import torgovlya from '@/assets/images/categories/8.png'
import stroitelstvo from '@/assets/images/categories/9.png'
import sport from '@/assets/images/categories/10.png'
import turizm from '@/assets/images/categories/11.png'
import bezopasnost from '@/assets/images/categories/12.png'

const CATEGORIES = [
  {
    icon: gosudarstvo,
    title: 'Государство',
    count: 1
  },
  {
    icon: ekonomika,
    title: 'Экономика',
    count: 3
  },
  {
    icon: obrazovanie,
    title: 'Образование',
    count: 4
  },
  {
    icon: zdorovie,
    title: 'Здоровье',
    count: 100
  },
  {
    icon: ekologiya,
    title: 'Экология',
    count: 100
  },
  {
    icon: kulutra,
    title: 'Культруа',
    count: 100
  },
  {
    icon: transport,
    title: 'Транспорт',
    count: 100
  },
  {
    icon: torgovlya,
    title: 'Торговля',
    count: 100
  },
  {
    icon: stroitelstvo,
    title: 'Строительство',
    count: 100
  },
  {
    icon: sport,
    title: 'Спорт',
    count: 100
  },
  {
    icon: turizm,
    title: 'Туризм',
    count: 100
  },
  {
    icon: bezopasnost,
    title: 'Безопасность',
    count: 100
  }
]

export default {
  data () {
    return {
      categories: CATEGORIES
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  height: 50px;
}
</style>
