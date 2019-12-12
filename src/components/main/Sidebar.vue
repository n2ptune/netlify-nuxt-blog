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
        <div class="menu-label-custom">
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
      <client-only>
        <div class="content-series" v-if="series">
          <b-menu>
            <b-menu-list>
              <template v-slot:label>
                <p class="menu-label-custom">시리즈</p>
              </template>
              <b-menu-item
                v-for="content in series"
                :key="content.seriesName"
                :label="content.seriesName"
                class="menu-list-item-custom"
              >
                <b-menu-item
                  v-for="contentOfPost in content.posts"
                  :key="contentOfPost.title"
                  :label="contentOfPost.title"
                  :to="`/posts/${contentOfPost.slug}`"
                  tag="nuxt-link"
                />
              </b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
      </client-only>
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
      tags: 'tag/getTags',
      series: 'series/getSeries'
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

<style lang="scss" src="@/assets/main/_sidebar.scss" scoped></style>
