<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="sidebar-header-profile mx-auto">
        <div class="profile-img">
          <img :src="avatar" alt="avatar">
        </div>
        <div class="profile-name">
          n2ptune
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
      const { data } = await this.$axios.get('https://api.github.com/users/n2ptune')
      this.avatar = data.avatar_url
    } catch(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main/_sidebar';
</style>
