<template>
  <div id="wrapper">
    <Header class="is-hidden-desktop" />
    <Sidebar class="is-hidden-touch" />
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/main/Header'),
    Sidebar: () => import('@/components/main/Sidebar')
  }
}
</script>

<style lang="scss">
@import '@/assets/main/_layout';
</style>
