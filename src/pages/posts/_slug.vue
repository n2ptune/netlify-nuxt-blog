<template>
  <section class="page-container mx-auto">
    <PostTitle />
    <PostContent :markdown="blogPost.body" />
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`@@/posts/${params.slug}.json`)
      }
  },
  layout: 'post',
  components: {
    PostContent: () => import('@/components/post/PostContent'),
    PostTitle: () => import('@/components/post/PostTitle')
  },
  head() {
    return {
      title: this.blogPost.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogPost.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.blogPost.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.blogPost.thumbnail
            ? `https://n2ptune.xyz${this.blogPost.thumbnail}`
            : ''
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.blogPost.description
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['setCurrentPost'])
  },
  created() {
    this.setCurrentPost(this.blogPost)
  }
}
</script>

<style lang="scss" scoped>
@import url('https://cdn.jsdelivr.net/npm/hack-font@3/build/web/hack-subset.css');
@import '@/assets/post/_main';
</style>
