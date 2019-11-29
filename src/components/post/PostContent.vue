<template>
  <article class="markdown-wrapper">
    <PageLeftSide class="is-hidden-touch" />
    <PageRightSide class="is-hidden-touch" />
    <div class="markdown-content" v-html="$md.render(markdown)">
    </div>
  </article>
</template>

<script>
export default {
  components: {
    PageLeftSide: () => import('@/components/post/PostLeftSide'),
    PageRightSide: () => import('@/components/post/PostRightSide')
  },
  props: {
    markdown: {
      required: true
    }
  }
}
</script>