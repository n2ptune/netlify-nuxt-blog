<template>
  <section v-if="loading">
    <b-loading :is-full-page="true" :active.sync="loading" :can-cancel="false" />
  </section>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>