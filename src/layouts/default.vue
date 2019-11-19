<template>
  <div class="layout-wrapper">
    <Header :fixed="true" />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
.layout-wrapper {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);
  background-attachment: fixed !important;
  overflow-y: auto;
}
</style>
