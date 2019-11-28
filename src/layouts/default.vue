<template>
  <div id="layout-wrapper-default">
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

<style lang="scss" scoped>
#layout-wrapper-default {
  background: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);
  background-attachment: fixed !important;
  height: 100%;
}
</style>
