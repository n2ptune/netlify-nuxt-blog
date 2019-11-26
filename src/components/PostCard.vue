<template>
  <div class="card-wrapper">
    <p class="is-size-5 has-text-centered has-text-white mb-1">
      {{ posts.length }}개의 포스트
    </p>
    <div class="card" v-for="post in posts" :key="post.slug">
      <div class="card-image">
        <figure class="image is-2by1">
          <img :src="checkThumbnail(post.thumbnail)" alt="" />
        </figure>
      </div>
      <div class="card-header">
        <div
          class="card-header-title"
          :style="{ alignItems: 'start', flexDirection: 'column' }"
        >
          <nuxt-link :to="`/posts/${post.slug}`">
            <p class="is-size-5">{{ post.title }}</p>
          </nuxt-link>
          <p class="is-size-6 has-text-grey has-text-weight-light">
            <b-icon icon="file-replace-outline" size="is-small" :style="{ marginRight: '3px' }" />{{ dateToDay(post.date) }}
          </p>
        </div>
        <div class="card-header-icon">
          <nuxt-link :to="`/posts/${post.slug}`" target="_blank">
            새 창에서 열기
            <b-icon icon="share"></b-icon>
          </nuxt-link>
        </div>
      </div>
      <div class="card-content">
        <p class="is-size-6">
          {{ post.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  mounted() {
    document.querySelectorAll('.card').forEach(node => {
      node.classList.add('mb-2')
    })
  },
  methods: {
    checkThumbnail(isExist) {
      return isExist || `https://source.unsplash.com/1280x960`
    },
    dateToDay(date) {
      const day = this.$dayjs(new Date(date)).format('YYYY년 MM월 DD일 H시 m분')
      return day
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  height: 100%;
}
a {
  color: #171785;
  padding: 5px;
  border-radius: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
}
.card-header-icon > a {
  font-size: 0.9rem;
}
</style>
