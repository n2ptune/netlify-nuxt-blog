<template>
  <Waiting />
</template>

<script>
export default {
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
