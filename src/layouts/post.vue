<template>
  <div id="root">
    <Header />
    <main id="root-main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/main/Header'),
    Footer: () => import('@/components/post/PostFooter')
  }
}
</script>
