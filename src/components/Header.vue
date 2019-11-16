<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          N.WEB
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenus"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenus" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">
            Pinned
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    const el = document.querySelector('.navbar-burger')
    
    if(el) {
      el.addEventListener('click', () => {
        const dataTarget = el.dataset.target
        const $dataTarget = document.querySelector(`#${dataTarget}`)

        el.classList.toggle('is-active')
        $dataTarget.classList.toggle('is-active')
      })
    }
  }
}
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid #ddd;
}
.navbar-brand .navbar-item {
  font-size: 1.4rem !important;
}
</style>