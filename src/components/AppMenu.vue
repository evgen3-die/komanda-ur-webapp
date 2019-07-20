<template>
  <nav class="my-2 my-md-0">
    <template
      v-for="(item, i) in list"
    >
      <a
        v-if="item.isExternal"
        :key="i"
        class="p-2 text-dark"
        :href="item.to"
        target="_blank"
      >{{ item.name }}</a>
      <router-link
        v-else
        :key="i"
        class="p-2 text-dark"
        :to="item.to"
      >
        {{ item.name }}
      </router-link>
    </template>
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
