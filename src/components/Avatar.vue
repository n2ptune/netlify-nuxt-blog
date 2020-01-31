<template>
  <img
    :src="avatarURL"
    alt="github-avatar"
    class="github-avatar"
    :style="{ width: `${width}px` }"
  />
</template>

<script>
export default {
  data() {
    return {
      avatarURL: null
    }
  },
  props: {
    width: {
      type: Number,
      required: false,
      default: 30
    }
  },
  async created() {
    const { data } = await this.$axios.get(
      'https://api.github.com/users/n2ptune'
    )
    this.avatarURL = data.avatar_url
  }
}
</script>

<style lang="scss" scoped>
.github-avatar {
  height: auto;
  border-radius: 100%;
}
</style>
