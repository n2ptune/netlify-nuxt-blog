<template>
  <article>
    <h1>{{ blogPost.title }}</h1>
    <div v-html="$md.render(blogPost.body)" />
  </article>
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
  mounted() {
    this.setCurrentPost(this.blogPost)
  }
}
</script>
