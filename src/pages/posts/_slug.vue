<template>
  <section class="page-container mx-auto">
    <!-- <adsbygoogle /> -->
    <PostTitle v-if="currentPost" />
    <SeriesList v-if="currentPost.series" />
    <PostContent :markdown="blogPost.body" />
    <vue-disqus
      shortname="n2ptune-xyz"
      :identifier="this.slug"
      :url="`https://n2ptune.xyz/posts/${this.slug}/`"
    />
  </section>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  async asyncData({ params, payload }) {
    if (payload) return { slug: params.slug, blogPost: payload }
    else
      return {
        slug: params.slug,
        blogPost: await require(`@@/posts/${params.slug}.json`)
      }
  },
  layout: 'post',
  components: {
    PostContent: () => import('@/components/post/PostContent'),
    PostTitle: () => import('@/components/post/PostTitle'),
    SeriesList: () => import('@/components/post/SeriesList')
  },
  head() {
    return {
      title: this.blogPost.title,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://n2ptune.xyz/posts/${this.slug}/`
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogPost.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            this.blogPost.title.split(' ').join(',') || this.blogPost.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.blogPost.title} | n2ptune Web Tech-Dev`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.blogPost.thumbnail
            ? `https://n2ptune.xyz${this.blogPost.thumbnail}`
            : 'https://firebasestorage.googleapis.com/v0/b/n2ptune-github-io.appspot.com/o/images%2F44240708.png?alt=media&token=849d8e9b-ed2e-4da6-8e9e-9379f8d2707f'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.blogPost.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://n2ptune.xyz/posts/${this.slug}/`
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      currentPost: 'getCurrentPost'
    })
  },
  methods: {
    ...mapMutations(['setCurrentPost'])
  },
  created() {
    this.setCurrentPost(this.blogPost)
  },
  beforeDestroy() {
    this.setCurrentPost(null)
  }
}
</script>

<style lang="scss" scoped>
@import url('https://cdn.jsdelivr.net/npm/hack-font@3/build/web/hack-subset.css');
@import '@/assets/post/_main';
</style>
