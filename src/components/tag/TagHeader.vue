<template>
  <header class="tag-header">
    <div class="header-wrapper">
      <div class="header-icon">
        <b-button
          tag="nuxt-link"
          to="/"
          icon-left="arrow-left"
          rounded
          type="is-dark"
        >
          {{ buttonName }}
        </b-button>
      </div>
      <div class="header-title mx-auto">
        #{{ firstUpperCase(title) }}
        <span class="header-subtitle">- n2ptune-dev</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      buttonName: ''
    }
  },
  mounted() {
    this.setButtonName()
    window.addEventListener('resize', this.setButtonName)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setButtonName)
  },
  methods: {
    firstUpperCase(str) {
      return `${str.charAt(0).toUpperCase()}${str.substring(1, str.length)}`
    },
    setButtonName() {
      this.buttonName = window.innerWidth >= 769 ? 'Home' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-header {
  width: 100%;
  height: 58px;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.15);
  position: relative;
}
.header-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}
.header-title {
  font-size: 1.45rem;
  font-weight: bold;

  & > .header-subtitle {
    font-size: 1.12rem;
    font-weight: bold;
  }
}
</style>
