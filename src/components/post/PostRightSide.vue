<template>
  <aside class="post-right-side" :style="{ right: rightHandler }">
    <ul>
      <li class="is-size-5 has-text-weight-bold content-title">
        Contents
      </li>
      <li v-for="content in contents" :key="content">
        <a :href="`#${content}`">
          {{ content }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      left: 0,
      width: 0
    }
  },
  props: ['contents'],
  mounted() {
    // 리사이징
    this.reWidth()
    window.addEventListener('resize', this.reWidth)
    document.querySelector('.post-right-side').style.opacity = 1

    // 스크롤
    window.addEventListener('scroll', this.fixedPosition)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reWidth)
    window.removeEventListener('scroll', this.fixedPosition)
  },
  methods: {
    reWidth() {
      const _left = document.querySelector('.page-container')
      const _width = document.querySelector('.post-right-side')

      if (1216 >= window.innerWidth) return

      this.left = _left.offsetLeft
      this.width = _width.clientWidth
    },
    fixedPosition() {
      const mdWrapper = document.querySelector('.markdown-start')
      const mdWrapperScrollY = mdWrapper.offsetTop
      const currentY = window.scrollY
      const sidebar = document.querySelector('.post-right-side')

      if (currentY >= mdWrapperScrollY) {
        sidebar.classList.add('scroll-fixed')
      } else {
        sidebar.classList.remove('scroll-fixed')
      }
    }
  },
  computed: {
    rightHandler() {
      return `${this.left - this.width - 10}px`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/post/_right';
</style>
