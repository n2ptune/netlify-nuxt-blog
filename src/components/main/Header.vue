<template>
  <header class="main-header">
    <div class="header-content-container">
      <div class="header-drawer mr-auto">
        <button class="drawer-button" @click="drawer">
          <b-icon :icon="handleDrawer ? 'arrow-left' : 'arrow-right'" />
        </button>
      </div>
      <div class="header-title ml-auto">
        n2ptune-dev
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      handleDrawer: false
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
