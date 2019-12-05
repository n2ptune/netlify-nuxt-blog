<template>
  <main class="main-wrapper">
    <div class="post-list-wrapper">
      <div class="post-header">
        모든 포스트
      </div>
      <div class="post-list">
        <PostCard v-for="post in posts" :post="post" :key="post.slug" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Home | n2ptune Web Tech-Dev'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      posts: 'sortNewPosts'
    })
  },
  components: {
    PostCard: () => import('@/components/PostCard')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main/_index';
</style>
