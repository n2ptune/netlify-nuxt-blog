<template>
  <!-- Root -->
  <div id="root">
    <!-- Header Component -->
    <PostHeader />
    <!-- Main Wrapper -->
    <main id="root-main">
      <!-- Nuxt View posts/_blog, includes section, article, markdown element and Side Components -->
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  components: {
    PostHeader: () => import('@/components/post/PostHeader'),
  }
}
</script>
