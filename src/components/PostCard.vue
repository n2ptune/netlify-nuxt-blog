<template>
  <div class="card-wrapper">
    <p class="is-size-5 has-text-centered has-text-white mb-1">
      모든 포스트
    </p>
    <div class="card" v-for="post in posts" :key="post.slug">
      <div class="card-image">
        <figure class="image">
          <img :src="checkThumbnail(post.thumbnail)" alt="" />
        </figure>
      </div>
      <div class="card-header">
        <div class="card-header-title">
          <nuxt-link :to="`/posts/${post.slug}`">
            <p class="is-size-5">{{ post.title }}</p>
          </nuxt-link>
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
        <p class="has-text-grey is-size-6">
          {{ new Date(post.date).toDateString() }}
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
      return isExist || 'https://picsum.photos/1280/960'
    }
  },
}
</script>

<style lang="scss" scoped>
a {
  color: black;

  &:hover {
    color: #171785;
  }
}
.card-header-icon > a {
  font-size: 0.9rem;
}
</style>
