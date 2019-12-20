<template>
  <header class="main-header">
    <div class="header-content-container">
      <div class="header-title" :class="$breakpoints.sMd ? 'mr-auto' : 'ml-auto mr-2'">
        <img :src="avatarURL" alt="" class="header-avatar">
        {{ getCurrentPost ? getCurrentPost.title : '웹 기술/개발 블로그' }}
      </div>
      <div class="header-nav mr-auto" v-if="$breakpoints.lLg">
        <ul class="nav-wrapper">
          <li class="nav" v-for="route in routes" :key="route.name">
            <nuxt-link :to="route.to">
              {{ route.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="header-nav-mobile ml-auto" v-else>
        asd
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      routes: [
        {
          name: 'Home',
          to: '/'
        },
        {
          name: 'Tags',
          to: '/tags'
        },
        {
          name: 'Series',
          to: '/series'
        },
        {
          name: 'Contact',
          to: '/contact'
        }
      ],
      avatarURL: ''
    }
  },
  computed: {
    ...mapGetters(['getCurrentPost'])
  },
  async created() {
    const { data } = await this.$axios.get('https://api.github.com/users/n2ptune')
    this.avatarURL = data.avatar_url
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main/_header';
</style>
