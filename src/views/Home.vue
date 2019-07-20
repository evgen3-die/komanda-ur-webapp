<template>
  <div>
    <b-container>
      <home-search class="mt-5 pt-5" />
      <categories class="mt-5 pt-5" />
    </b-container>
    <div class="bg-white py-5 mt-5">
      <b-container>
        <statistics />
      </b-container>
    </div>
  </div>
</template>

<script>
import { HomeSearch, Categories, Statistics } from '@/modules'

export default {
  components: { HomeSearch, Categories, Statistics }
}
</script>
