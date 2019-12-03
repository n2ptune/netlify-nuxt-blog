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
  props: {
    contents: {
      type: Array,
      required: true
    }
  },
  mounted() {
    // 리사이징
    this.reWidth()
    window.addEventListener('resize', this.reWidth)
    document.querySelector('.post-right-side').style.opacity = 1

    // 스크롤
    window.addEventListener('scroll', this.fixedPosition)
    window.addEventListener('scroll', this.scrollSpy)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reWidth)
    window.removeEventListener('scroll', this.fixedPosition)
    window.removeEventListener('scroll', this.scrollSpy)
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
    },
    scrollSpy() {
      const currentY = window.scrollY

      this.contents.forEach((elem, index) => {
        const currentElemTop = document.getElementById(elem).offsetTop
        const nextElemTop =
          this.contents[index + 1] === undefined
            ? document.querySelector('.page-container').offsetHeight
            : document.getElementById(this.contents[index + 1]).offsetTop

        if (currentElemTop <= currentY && currentY <= nextElemTop) {
          document
            .querySelectorAll('.active-content')
            .forEach(elem => elem.classList.remove('active-content'))
          
          document.querySelector(`a[href="#${elem}"]`).classList.add('active-content')
        }
      })
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
