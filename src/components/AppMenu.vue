<template>
  <nav class="my-2 my-md-0">
    <router-link
      v-for="(item, i) in list"
      :key="i"
      class="p-2 text-dark"
      :to="item.to"
    >
      {{ item.name }}
    </router-link>
  </nav>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
