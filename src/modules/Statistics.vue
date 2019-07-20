<template>
  <b-row>
    <b-col
      v-for="(statistic, i) in statistics"
      :key="i"
      class="text-center"
    >
      <div class="display-1 font-weight-bold">
        {{ statistic.count }}
      </div>
      <div class="text-muted">
        соглашений
      </div>
      <hr>
      <div class="font-weight-bold">
        {{ statistic.description }}
      </div>
    </b-col>
  </b-row>
</template>

<script>
const STATISTICS = [
  {
    count: 345,
    description: 'Правительство Удмуртской Республики'
  },
  {
    count: 280,
    description: 'Министерство строительства, жилищно-коммунального хозяйства и энергетики Удмуртской Республики'
  },
  {
    count: 158,
    description: 'Министерство образования и науки УР'
  }
]

export default {
  data () {
    return {
      statistics: STATISTICS
    }
  }
}
</script>
