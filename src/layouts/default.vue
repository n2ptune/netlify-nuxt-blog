<template>
  <div>
    <Header />
    <div class="container">
      <nuxt />
    </div>
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
.container {
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
}
</style>