<template>
  <section>
    <b-loading :is-full-page="true" :active.sync="isLoading" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    start() {
      this.isLoading = true
    },
    finish() {
      this.isLoading = false
    }
  }
}
</script>
