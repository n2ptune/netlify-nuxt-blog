<template>
  <article class="markdown-wrapper">
    <PostLeftSide class="is-hidden-touch" />
    <PostRightSide
      v-if="loadedContents"
      :contents="rightContents"
      class="is-hidden-touch"
    />
    <div
      v-if="loadedContents"
      class="markdown-content"
      v-html="!convertedHTML ? $md.render(markdown) : convertedHTML"
    ></div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      convertedHTML: null,
      rightContents: [],
      loadedContents: false
    }
  },
  components: {
    PostLeftSide: () => import('@/components/post/PostLeftSide'),
    PostRightSide: () => import('@/components/post/PostRightSide')
  },
  props: {
    markdown: {
      required: true
    }
  },
  mounted() {
    // String 형태로 된 HTML 문서를 받아서 div 원소를 만들고
    // 내부에 변환된 HTML 문서를 실음
    const converted = this.$md.render(this.markdown)
    const div = document.createElement('div')
    div.classList.add('markdown-start')
    div.innerHTML = converted

    // h1, h2, h3, h4, h5, h6 구하기
    const mdTitleList = div.querySelectorAll('h1, h2, h3, h4, h5, h6')
    mdTitleList.forEach((elem, key) => {
      // 자식 노드 있는지 확인
      if (!elem.children.length) {
        // h 수치 구해서 클래스명 붙여주기
        const strSizeLevel = elem.tagName[1]
        elem.classList.add(`is-size-${strSizeLevel}`)
        // 앵커 붙여주기
        elem.id = elem.innerHTML
        // 목차 달아주기
        this.rightContents.push(elem.innerHTML)
      }
    })

    // 사이드 바 렌더링
    // @SEE 목차들을 다 주워오지 않고 렌더링 해주면 매칭 오류 발생
    this.loadedContents = true

    // 데이터에 바인딩
    this.convertedHTML = div.outerHTML
  }
}
</script>

<style lang="scss">
@import '@/assets/post/markdown/_content';
</style>
