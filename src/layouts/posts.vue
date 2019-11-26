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
    PostsHeader: () => import('@/components/PostsHeader'),
  }
}
</script>

<style lang="scss">
html, body, #__nuxt, #__layout, #layout-wrapper {
  height: 100%;
}
main {
  height: auto;
  margin-top: 7rem;
  background-color: rgb(241, 243, 245);

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

  &::after {
    display: block;
    height: 2rem;
    content: ' ';
  }
}
</style>
