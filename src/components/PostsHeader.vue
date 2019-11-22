<template>
  <header class="header">
    <div class="container">
      <div class="header-logo">
        <nuxt-link class="is-size-5" to="/">n2ptune-dev</nuxt-link>
        <span class="is-size-3 cur-route">{{ routeTitle }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    routeTitle() {
      const { name } = this.$nuxt.$router.currentRoute
      return name === 'new' ? '/ ALL POSTS' : '/ PINNED POSTS'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  justify-content: center;
  align-items: center;
}
.header {
  z-index: 900;
  width: 100%;
  position: relative;
  display: flex;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  height: 64px;
  transition: all 0.35s;

  &-logo {
    & .cur-route {
      margin-left: 5px;
      color: rgba(255, 255, 255, 1);
    }
    & a {
      color: rgba(255, 255, 255, 0.55);
      transition: color 0.25s;

      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .header {
    height: 50px;
  }
  .header-logo {
    margin-left: auto;
    margin-right: auto;
  }
  .cur-route {
    display: block;
  }
}
</style>
