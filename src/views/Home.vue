<template>
  <div>
    <home-search class="mt-5 pt-5" />
    <categories class="mt-5 pt-5" />
  </div>
</template>

<script>
import { HomeSearch, Categories } from '@/modules'

export default {
  components: { HomeSearch, Categories }
}
</script>
