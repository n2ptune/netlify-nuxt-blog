<template>
  <header class="header">
    <div class="container">
      <div class="header-logo">
        <nuxt-link class="is-size-5 my-auto" to="/">n2ptune-dev</nuxt-link>
        <span class="is-size-3 cur-route">{{ routeTitle }}</span>
      </div>
      <div class="header-menu">
        <b-dropdown aria-role="list" position="is-bottom-left">
          <b-icon icon="menu" class="menu-icon" slot="trigger" role="button" />

          <b-dropdown-item aria-role="listitem" has-link>
            <nuxt-link to="tags" exact>
              태그별로 모아보기
            </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item aria-role="listitem" has-link>
            <nuxt-link to="series" exact>
              시리즈별로 모아보기
            </nuxt-link>
          </b-dropdown-item>

          <hr class="dropdown-divider" />

          <b-dropdown-item aria-role="listitem" has-link>
            <a
              href="https://github.com/n2ptune/netlify-nuxt-blog"
              target="_blank"
            >
              Github(새 창 바로가기)
            </a>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    routeTitle() {
      const { name } = this.$nuxt.$router.currentRoute
      return name === 'new' ? 'ALL POSTS' : 'PINNED POSTS'
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
  .cur-route {
    display: flex;
  }
}
.header-logo {
  display: flex;
  float: left;
}
.header-menu {
  display: flex;
  float: right;
  cursor: pointer;
  margin-top: 0.75rem;
}
.menu-icon {
  color: rgba(255, 255, 255, 0.45);
  transition: color 0.45s;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
}
.has-link {
  & a {
    transition: background 0.45s;
    color: rgba(0, 0, 0, 0.87);

    &:hover {
      background-color: rgba(0, 0, 0, 0.1) !important;
    }
  }
}
</style>
