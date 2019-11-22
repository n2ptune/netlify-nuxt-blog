<template>
  <div id="layout-wrapper">
    <posts-header />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  components: {
    PostsHeader: () => import('@/components/PostsHeader')
  }
}
</script>

<style lang="scss" scoped>
main {
  margin-top: 7rem;

  &::before {
    position: absolute;
    display: block;
    background: #121230;
    left: 0;
    top: 0;
    width: 100%;
    height: 264px;
    content: ' ';
  }
}
</style>
