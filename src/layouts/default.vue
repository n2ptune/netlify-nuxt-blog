<template>
  <div class="layout-wrapper">
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
.layout-wrapper {
  width: 100%;
  height: 100vh;
  background-color: #4c4177;
  background-image: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);
  position: fixed;
  overflow-y: auto;
  -ms-overflow-style: none;
}
.layout-wrapper::-webkit-scrollbar {
  display: none;
}
</style>