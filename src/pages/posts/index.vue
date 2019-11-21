<template>
  <div>
    asdafaf
  </div>
</template>

<script>
export default {
  layout: 'posts',
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>
