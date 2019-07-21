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
export default {
  props: {
    agreements: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    statistics () {
      return Object.entries(this.agreements
        .reduce((persons, { representatives }) => {
          if (representatives) {
            representatives.forEach(name => {
              persons[name] = persons[name] === undefined ? 1 : persons[name] + 1
            })
          }

          return persons
        }, {}))
        .map(([name, count]) => ({
          count,
          description: name
        }))
    }
  }
}
</script>
