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
  methods: {
    converted(convertedElement) {
      // 서버 사이드와 클라이언트 사이드 DOM 매칭(사이드 바)
      this.loadedContents = true
      // 데이터 바인딩
      this.convertedHTML = convertedElement
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

    // highlight.js에서 언어 구해오기
    div.querySelectorAll('.hljs').forEach(elem => {
      const className = elem.className
      const regClassName = /language/.exec(className)
      if (regClassName) {
        // 언어 가져오기
        const language = className
          .slice(regClassName.index)
          .split('-')[1]
          .toUpperCase()

        // 삽입할 원소 만들기
        const p = document.createElement('p')
        p.innerText = language
        p.className = `code-lang-style code-${language.toLowerCase()}`
        
        // 원소 삽입
        elem.appendChild(p)
      }
    })

    // 변환 끝
    this.converted(div.outerHTML)
  }
}
</script>

<style lang="scss">
@import '@/assets/post/markdown/_content';
@import 'highlight.js/styles/codepen-embed.css';
</style>
