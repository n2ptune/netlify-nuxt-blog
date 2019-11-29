<template>
  <header class="post-header">
    <div class="header-container">
      <div class="header-left">
        <div class="header-brand">
          N2DEV
        </div>
      </div>
      <div class="header-center mx-auto has-text-weight-bold is-hidden-mobile">
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
  computed: {
    ...mapGetters({
      currentPost: 'getCurrentPost'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/post/post-header';
</style>
