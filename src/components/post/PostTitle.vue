<template>
  <article class="title-wrapper">
    <h3 class="is-size-3 has-text-centered has-text-weight-bold">
      {{ displayTitle }}
    </h3>
    <p class="is-size-6 date-author">
      {{ dateToDay }}
      Posted By <Avatar :width="35" :style="{ marginLeft: '5px' }" />
    </p>
    <hr />
  </article>
</template>

<script>
import dayjs from '@/plugins/day'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { mapGetters } from 'vuex'

dayjs.extend(localizedFormat)

export default {
  components: {
    Avatar: () => import('@/components/Avatar')
  },
  computed: {
    ...mapGetters({
      currentPost: 'getCurrentPost'
    }),
    dateToDay() {
      return dayjs(this.currentPost.date)
        .locale('en')
        .format('LL')
    },
    displayTitle() {
      return this.currentPost.series
        ? `[${this.currentPost.series}] - ${this.currentPost.title}`
        : this.currentPost.title
    }
  }
}
</script>

<style lang="scss" scoped>
.title-wrapper > hr:first-of-type {
  background-color: #efefef;
}
.date-author {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
