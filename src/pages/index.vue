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
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://n2ptune.xyz/'
        }
      ],
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Home | n2ptune Web Tech-Dev'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '웹 프론트엔드 영역 기술/개발 블로그'
        },
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
  },
  mounted() {
    console.log(this.$buefy.loading);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main/_index';
</style>
