<template>
  <header
    class="post-header"
    :class="isDisplayPostTitle ? 'is-header-fixed' : ''"
  >
    <div class="header-container">
      <div class="header-left">
        <div class="header-brand">
          N2DEV
        </div>
      </div>
      <div
        class="header-center mx-auto has-text-weight-bold is-hidden-mobile"
        v-if="isDisplayPostTitle"
      >
        {{ currentPost && currentPost.title }}
      </div>
      <div class="header-right">
        <b-icon icon="file-document-box-search-outline" />
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isDisplayPostTitle: false
    }
  },
  computed: {
    ...mapGetters({
      currentPost: 'getCurrentPost'
    })
  },
  methods: {
    scrollPostTitle() {
      const titleWrapper = document.querySelector('.title-wrapper')
      const currentY = window.scrollY

      // 실질적으로 titleWrapper의 끝
      const endOfDisplayTitleWrapper =
        titleWrapper.offsetTop + titleWrapper.offsetHeight

      this.isDisplayPostTitle = currentY >= endOfDisplayTitleWrapper || false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollPostTitle)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollPostTitle)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/post/post-header';
</style>
