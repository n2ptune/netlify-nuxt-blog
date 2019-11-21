<template>
  <div id="layout-wrapper">
    <posts-header />
  </div>
</template>

<script>
export default {
  components: {
    PostsHeader: () => import('@/components/PostsHeader')
  }
}
</script>
