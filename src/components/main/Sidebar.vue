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
            <a
              href="https://github.com/n2ptune/netlify-nuxt-blog"
              target="_blank"
            >
              <b-icon icon="github-circle" size="is-medium" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar-contents mt-1">
      <div class="content-tag">
        <div class="content-header">
          태그
        </div>
        <ul class="tag-wrapper">
          <li class="tag-list" v-for="tag in tags" :key="tag.name">
            <span class="tag-name">
              <nuxt-link :to="{ path: `/tags/${tag.name}` }">{{
                firstUpperCase(tag.name)
              }}</nuxt-link>
            </span>
            <span class="tag-count">{{ tag.count }}</span>
          </li>
        </ul>
      </div>
      <div class="content-series">
        <div class="content-header">
          시리즈
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      avatar: null
    }
  },
  computed: {
    ...mapGetters({
      tags: 'tag/getTags'
    })
  },
  methods: {
    firstUpperCase(str) {
      return `${str.charAt(0).toUpperCase()}${str.substring(1, str.length)}`
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
