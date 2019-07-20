<template>
  <div class="position-relative">
    <pdf
      :src="src"
      :page="page"
      resize
      @loading="onLoadingPdf"
      @numpages="onNumpagesPdf"
    >
      <template slot="loading">
        <div class="text-center">
          <b-spinner variant="primary" />
        </div>
      </template>
    </pdf>
    <nav
      v-if="!isLoading"
      aria-label="Page navigation"
      class="mt-2"
    >
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            @click.prevent="onClickButton('previous')"
          >Следующая</a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            @click.prevent="onClickButton('next')"
          >Предыдущая</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Pdf from 'pdfvuer'

export default {
  components: { Pdf },
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      page: 1,
      maximum: Infinity,
      isLoading: true
    }
  },
  methods: {
    onLoadingPdf (isLoading) {
      this.isLoading = isLoading
    },
    onClickButton (direction) {
      this.page += (direction === 'next' ? 1 : -1)
      this.page = Math.max(1, Math.min(this.page, this.maximum))
    },
    onNumpagesPdf (maximum) {
      this.maximum = maximum
    }
  }
}
</script>
