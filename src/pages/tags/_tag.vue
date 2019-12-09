<template>
  <main class="tag-wrapper">
    <TagHeader :title="tagName" />
    <div class="container">
      <div class="tag-title mb-2">
        총 {{ taggedPosts.length }}개의 포스트를 찾았습니다.
      </div>
      <div class="columns is-desktop is-mobile is-multiline">
        <PostCard
          v-for="post in taggedPosts"
          :key="post.title"
          :post="post"
          class="column is-full-mobile is-half-tablet is-two-fifths-desktop is-one-third-widescreen"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  asyncData({ params, store }) {
    return {
      tagName: params.tag,
      taggedPosts: store.getters.getTaggedPosts(params.tag)
    }
  },
  head() {
    return {
      title: this.tagName,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://n2ptune.xyz/tags/${this.tagName}/`
        }
      ],
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://n2ptune.xyz/tags/${this.tagName}/`
        }
      ]
    }
  },
  layout: 'tag',
  components: {
    TagHeader: () => import('@/components/tag/TagHeader'),
    PostCard: () => import('@/components/PostCard')
  },
  methods: {
    firstUpperCase(str) {
      return `${str.charAt(0).toUpperCase()}${str.substring(1, str.length)}`
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 2.5rem;
  justify-content: center;
}
.columns {
  width: 100%;
  justify-content: center;
  margin-left: 0;
  margin-right: 0;
}
.tag-title {
  text-align: center;
  font-size: 1.45rem;
}
.card.column {
  box-shadow: 1px 3px 20px 2px rgba(0, 0, 0, 0.09) !important;
  padding: 0;
}
</style>
