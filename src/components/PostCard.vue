<template>
  <div class="card-wrapper">
    <p class="is-size-5 has-text-centered has-text-white mb-1">
      {{ posts.length }}개의 포스트
    </p>
    <div class="card" v-for="post in posts" :key="post.slug">
      <div class="card-image">
        <figure class="image is-2by1">
          <nuxt-link :to="`/posts/${post.slug}`" class="img-route">
            <img :src="checkThumbnail(post.thumbnail)" :alt="post.title" />
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
          <p class="is-size-6 has-text-grey has-text-weight-light date">
            {{ dateToDay(post.date) }}
          </p>
        </div>
        <div class="card-header-icon">
          <nuxt-link :to="`/posts/${post.slug}`" target="_blank">
            <b-icon icon="share"></b-icon>
          </nuxt-link>
        </div>
      </div>
      <div class="card-content">
        <div
          v-if="post.tags"
          class="tags-wrapper mb-1"
          :style="{ justifyContent: 'center', alignItems: 'center' }"
        >
          <b-icon
            icon="tag"
            size="is-small"
            :style="{ color: '#00498c' }"
            alt="태그"
          />
          <nuxt-link
            v-for="tag in post.tags"
            :key="tag"
            :to="`/tags/${tag}`"
            class="tag-custom is-size-6"
            >{{ `#${tag}` }}</nuxt-link
          >
        </div>
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
      return dayjs().to(dayjs(date))
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
.tag-custom {
  color: white;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 0.3rem;
  margin-left: 0.3rem;
  border-radius: 5px;
  background-color: #1e6dcc;
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
    background-color: rgba(0, 0, 0, 0.25);
  }
}
.date {
  margin-left: 0.5rem;
}
</style>
