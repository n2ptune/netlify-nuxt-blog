<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    :class="fixed ? 'fixed-navbar' : ''"
  >
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item" exact>
          <b-icon icon="pine-tree" />
          n2ptune-dev
        </nuxt-link>

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
          <nuxt-link to="/new" class="navbar-item">
            <b-icon icon="post" />
            <span>POSTS</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const el = document.querySelector('.navbar-burger')

    if (el) {
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

<style lang="scss" scoped>
.navbar {
  background-color: transparent !important;
}
.navbar-brand .navbar-item {
  font-size: 1.4rem;
}
.navbar-item {
  color: rgba(255, 255, 255, 0.7);
  background-color: transparent;
  transition: background 0.35s;

  &:hover,
  &:visited {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 0.4);
  }

  &:active,
  &:focus {
    background-color: transparent;
  }
}
.navbar-burger {
  color: white;
  background-color: transparent;

  & span {
    color: white;
  }
}
.navbar-menu.is-active {
  background-color: white;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.5);

  & .navbar-item {  
    color: black;
    transition: background, 0.35s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    & .icon {
      vertical-align: bottom;
    }
  }
}
.navbar-item > .icon {
  margin-right: 5px;
}
</style>
