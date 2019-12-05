<template>
  <Waiting :req-param="tagName" />
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      tagName: params.tag
    }
  },
  head() {
    return {
      title: 'Waiting!',
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://n2ptune.xyz/tags/${this.tagName}`
        }
      ]
    }
  },
  layout: 'empty',
  components: {
    Waiting: () => import('@/components/Waiting')
  }
}
</script>
