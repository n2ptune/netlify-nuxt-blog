<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="sidebar-header-profile mx-auto">
        <div class="profile-img-name-wrapper">
          <div class="profile-img">
            <img
              :src="avatar || 'https://via.placeholder.com/150'"
              alt="avatar"
            />
          </div>
          <div class="profile-name">
            n2ptune-dev-blog
          </div>
        </div>
        <div class="profile-link">
          <div class="github">
            <a href="https://github.com/n2ptune" target="_blank">
              <b-icon icon="github-circle" size="is-medium" />
            </a>
          </div>
          <div class="facebook">
            <a href="https://facebook.com/linediffuser" target="_blank">
              <b-icon icon="facebook" size="is-medium" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar-contents mt-1">
      <div class="content-tag">
        태그
      </div>
      <div class="content-series">
        시리즈
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      avatar: null
    }
  },
  async mounted() {
    try {
      const { data } = await this.$axios.get(
        'https://api.github.com/users/n2ptune'
      )
      this.avatar = data.avatar_url
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main/_sidebar';
</style>
