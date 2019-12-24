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
    <div class="content-loading" v-if="!loadedContents">
      <vue-content-loading>
        <rect x="0" y="0" rx="3" ry="3" width="200" height="10" />
        <rect x="210" y="0" rx="3" ry="3" width="150" height="10" />
        <rect x="370" y="0" rx="3" ry="3" width="15" height="10" />
        <rect x="0" y="20" rx="3" ry="3" width="70" height="10" />
        <rect x="80" y="20" rx="3" ry="3" width="150" height="10" />
        <rect x="240" y="20" rx="3" ry="3" width="70" height="10" />
        <rect x="320" y="20" rx="3" ry="3" width="30" height="10" />
        <rect x="360" y="20" rx="3" ry="3" width="40" height="10" />
        <rect x="0" y="40" rx="3" ry="3" width="130" height="10" />
        <rect x="140" y="40" rx="3" ry="3" width="70" height="10" />
        <rect x="220" y="40" rx="3" ry="3" width="110" height="10" />
        <rect x="340" y="40" rx="3" ry="3" width="20" height="10" />
        <rect x="370" y="40" rx="3" ry="3" width="25" height="10" />
        <rect x="0" y="60" rx="3" ry="3" width="50" height="10" />
        <rect x="60" y="60" rx="3" ry="3" width="140" height="10" />
        <rect x="210" y="60" rx="3" ry="3" width="70" height="10" />
        <rect x="290" y="60" rx="3" ry="3" width="50" height="10" />
      </vue-content-loading>
    </div>
  </article>
</template>

<script>
import VueContentLoading from 'vue-content-loading'

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
    PostRightSide: () => import('@/components/post/PostRightSide'),
    VueContentLoading
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

    // 이미지 가운데 정렬
    div.querySelectorAll('p').forEach(elem => {
      if(elem.firstChild.tagName === 'IMG') elem.style.textAlign = 'center'
    })

    // 변환 끝
    this.converted(div.outerHTML)
  }
}
</script>

<style lang="scss">
@import '@/assets/post/markdown/_content';
@import 'highlight.js/styles/monokai-sublime.css';
</style>
