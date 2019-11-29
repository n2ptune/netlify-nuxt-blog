<template>
  <aside class="post-right-side" :style="{ right: rightHandler }">
    <ul>
      <li class="is-size-6 has-text-weight-bold" :style="{ color: '#3200e6' }">
        목차
      </li>
      <li>
        Content 1
        <ul class="sub-list">
          <li>asdf</li>
        </ul>
      </li>
      <li>Content 2</li>
      <li>Content 3</li>
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
  mounted() {
    this.reWidth()
    window.addEventListener('resize', this.reWidth)
    document.querySelector('.post-right-side').style.opacity = 1
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reWidth)
  },
  methods: {
    reWidth() {
      const _left = document.querySelector('.page-container')
      const _width = document.querySelector('.post-right-side')

      if (1023 >= window.innerWidth) return

      this.left = _left.offsetLeft
      this.width = _width.clientWidth
    }
  },
  computed: {
    rightHandler() {
      return `${this.left - this.width - 50}px`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/post/post-right-side';
</style>
