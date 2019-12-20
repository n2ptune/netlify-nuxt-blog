<template>
  <header class="main-header">
    <div class="header-content-container">
      <div class="header-drawer mr-auto" v-if="$breakpoints.sMd">
        <button class="drawer-button" @click="drawer">
          <b-icon :icon="handleDrawer ? 'arrow-left' : 'arrow-right'" />
        </button>
      </div>
      <div class="header-title">
        n2ptune-dev-blog
      </div>
      <div class="header-nav ml-auto" v-if="$breakpoints.lLg">
        <ul class="nav-wrapper">
          <li class="nav" v-for="route in routes" :key="route.name">
            <nuxt-link :to="route.to">
              {{ route.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="header-nav-mobile ml-auto" v-else>
        asd
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      handleDrawer: false,
      routes: [
        {
          name: 'Home',
          to: '/'
        },
        {
          name: 'Tags',
          to: '/tags'
        }
      ]
    }
  },
  methods: {
    drawer() {
      const sidebar = document.querySelector('.sidebar')
      // 열려있으면
      if (this.handleDrawer) {
        sidebar.classList.remove('mobile-show')
        sidebar.classList.add('mobile-show-leave')
      } else {
        sidebar.classList.add('mobile-show')
        sidebar.classList.remove('mobile-show-leave')
      }
      this.handleDrawer = !this.handleDrawer
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main/_header';
</style>
