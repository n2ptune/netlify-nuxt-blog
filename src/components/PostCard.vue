<template>
  <div class="card-wrapper">
    <p class="is-size-5 has-text-centered has-text-white mb-1">
      {{ posts.length }}개의 포스트
    </p>
    <div class="card mb-2" v-for="post in posts" :key="post.slug">
      <div class="card-image">
        <figure class="image is-2by1">
          <nuxt-link :to="`/posts/${post.slug}`" class="img-route">
            <img
              :src="checkThumbnail(post.thumbnail)"
              :alt="post.title"
              loading="eager"
            />
            <div class="thumbnail-background"></div>
          </nuxt-link>
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
          <b-tooltip
            :label="dateToDetailDay(post.date)"
            type="is-info"
            :delay="250"
            animated
          >
            <p class="is-size-6 has-text-grey has-text-weight-light date">
              {{ dateToDay(post.date) }}
            </p>
          </b-tooltip>
        </div>
        <div class="card-header-icon">
          <nuxt-link :to="`/posts/${post.slug}`" target="_blank">
            <b-icon icon="share"></b-icon>
          </nuxt-link>
        </div>
      </div>
      <div class="card-content">
        <PostTag :tags="post.tags" />
        <p class="is-size-6">
          {{ post.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from '@/plugins/day'

export default {
  components: {
    PostTag: () => import('@/components/PostTag')
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {
    checkThumbnail(isExist) {
      return isExist || `https://source.unsplash.com/640x320`
    },
    dateToDay(date) {
      return dayjs().to(dayjs(date))
    },
    dateToDetailDay(date) {
      return `${dayjs(date).format('YYYY년 MM월 DD일 HH시 mm분')} 작성`
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  height: 100%;
}
.card-header-title a,
.card-header-icon a {
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
.thumbnail-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
  transition: background, 0.35s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.65);
  }
}
.date {
  margin-left: 0.5rem;
}
</style>
