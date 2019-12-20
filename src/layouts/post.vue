<template>
  <div id="root">
    <Header />
    <main id="root-main">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/main/Header')
  }
}
</script>
