<template>
  <div class="series-list mb-1">
    <ul class="series-list-wrapper">
      <li class="series-title">'{{ currentPost.series }}' 시리즈 목차</li>
      <li
        v-for="series in filteredSeries"
        :key="series.title"
        :class="series.title === currentPost.title ? 'equal-bold' : ''"
      >
        <nuxt-link :to="`/posts/${series.slug}`">
          {{ series.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      currentPost: 'getCurrentPost'
    }),
    filteredSeries() {
      return this.$store.getters.getSeriesFromName(this.currentPost.series)
    }
  }
}
</script>

<style lang="scss" scoped>
.series-list {
  display: flex;
}
.series-list-wrapper li {
  border-left: 1px solid #ddd;

  &:first-child {
    padding-left: 15px;
  }

  &:last-child {
    padding-bottom: 1rem;
  }

  &:not(:first-child)::before {
    content: '';
    display: inline-block;
    position: relative;
    margin-top: 1rem;
    top: 1.5px;
    left: -7.5px;
    width: 15px;
    height: 15px;
    background-color: white;
    border: 3px solid #B48CFF;
    border-radius: 50%;
  }
}
.series-title {
  font-weight: bold;
  color: #803efb;
}
.equal-bold {
  font-weight: bold;
}
a {
  color: black;
  padding-bottom: 3px;

  &:hover {
    border-bottom: 1.5px dashed #B48CFF;
  }
}
</style>
