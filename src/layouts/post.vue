<template>
  <!-- Root -->
  <div id="root">
    <!-- Header Component -->
    <PostHeader />
    <!-- Main Wrapper -->
    <main id="root-main">
      <!-- Side Component -->
      <PostLeftSide />
      <!-- Nuxt View posts/_blog, includes section, article, markdown element -->
      <nuxt />
      <!-- Side Component -->
      <PostRightSide />
    </main>
  </div>
</template>

<script>
export default {
  components: {
    PostHeader: () => import('@/components/post/PostHeader'),
    PostLeftSide: () => import('@/components/post/PostLeftSide'),
    PostRightSide: () => import('@/components/post/PostRightSide')
  }
}
</script>