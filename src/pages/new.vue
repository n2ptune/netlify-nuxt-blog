<template>
  <div class="container">
    <PostCard :posts="sortNewPosts" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: 'New Posts'
    }
  },
  components: {
    PostCard: () => import('@/components/PostCard')
  },
  layout: 'posts',
  computed: {
    ...mapGetters(['sortNewPosts'])
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .container {
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
  }
}
@media screen and (min-width: 769px) {
  .container {
    width: 70%;
  }
}
@media screen and (min-width: 1025px) {
  .container {
    width: 60%;
  }
}
@media screen and (min-width: 1425px) {
  .container {
    width: 40%;
  }
}
@media screen and (min-width: 1700px) {
  .container {
    width: 25%;
  }
}
</style>
