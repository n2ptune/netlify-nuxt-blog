<template>
  <div id="layout-wrapper">
    <Header />
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
#layout-wrapper {
  background: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);
  background-attachment: fixed !important;
}
@media screen and (max-width: 768px) {
  #layout-wrapper {
    /* min-height: 100%; */
  }
}
</style>
