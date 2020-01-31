<template>
  <header class="main-header">
    <div class="header-content-container">
      <div
        class="header-title"
        :class="$breakpoints.sMd ? 'mr-auto' : 'ml-auto mr-2'"
      >
        <Avatar :width="30" :style="{ marginRight: '9px' }" />
        웹 기술/개발 블로그
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
        <b-button
          class="mobile-button"
          size="is-medium"
          icon-right="expand-all"
          :outlined="true"
          :rounded="true"
          @click="mobileButton"
        />
      </div>
    </div>
  </header>
</template>

<script>
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
  components: {
    Avatar: () => import('@/components/Avatar')
  },
  methods: {
    mobileButton(event) {
      this.$buefy.modal.open({
        parent: this,
        component: () => import('@/components/main/HeaderMobileMenu'),
        hasModalCard: true,
        props: {
          routes: this.routes
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main/_header';
</style>
