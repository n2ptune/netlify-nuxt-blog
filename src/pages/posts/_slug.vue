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
.page-container {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  width: 95%;
}
// Desktop
@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .page-container {
    width: 60%;
  }
}
// Widescreen
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .page-container {
    width: 50%;
  }
}
// FullHD
@media screen and (min-width: 1408px) {
  .page-container {
    width: 40%;
  }
}
</style>
