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
      title: 'Waiting!'
    }
  },
  layout: 'empty',
  components: {
    Waiting: () => import('@/components/Waiting')
  }
}
</script>
