<template>
  <div class="container">
    <div class="card">
      <img
        class="card-avatar"
        src="https://icon-library.net//images/web-developer-icon/web-developer-icon-10.jpg"
      />
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="avatarOfGithub" :style="{ borderRadius: '50%' }" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">n2ptune</p>
            <p class="subtitle is-6 has-text-grey">
              Web, Front-End Developer<br />
              reduce@kakao.com<br />n2ptune@outlook.com
            </p>
          </div>F
        </div>
        <div class="media">
          <div class="media-content">
            <p class="title is-5">프로필</p>
            <div class="subtitle-content">
              <p class="subtitle is-6">
                안녕하세요. 웹 프론트엔드 개발자를 지향하고있는 대학생입니다.
              </p>
              <p class="subtitle is-6">
                이 블로그는 개인적인 공부 내용 또는 경험해봤던 기술들을 다시는
                삽질하는 일이 없도록(...) 정리하고 복습하는 목적으로 개설 된
                블로그입니다.
              </p>
              <p class="subtitle is-6">
                블로그에 대한 소스 코드는
                <a
                  href="https://github.com/n2ptune/netlify-nuxt-blog"
                  class="github-link"
                  target="_blank"
                  >GitHub 저장소</a
                >에 올려놨으니 참고하실 만한 부분이 있다면 참고해주시고,
                개선해야 될 점이 보이면 이슈를 작성해주세요. 감사합니다.
              </p>
            </div>
          </div>
        </div>
        <div class="media">
          <div class="media-content">
            <p class="title is-5">블로그 정보</p>
            <div class="subtitle-content">
              <p class="subtitle is-6">
                <span class="has-text-primary has-text-weight-bold"
                  >블로그에서 다루는 내용</span
                >은 웹 전반에 대한 기술의 지식입니다. 다음과 같은 내용들을
                포함할 수 있습니다.
                <span class="has-text-primary has-text-weight-semibold"
                  >HTML5, CSS3, Javscript, Markdown, Vue(+Nuxt), React, Webpack,
                  etc...</span
                >
                블로그의 내용들은 매우 주관적이므로 다른 의견이 있다면 해당
                내용을 전달해주세요.
              </p>
              <p class="subtitle is-6">
                블로그는
                <span class="has-text-primary has-text-weight-semibold"
                  >Nuxt.js</span
                >
                기반의 정적 사이트 생성기(nuxt generate)를 이용해서
                만들어졌습니다. 배포는
                <span class="has-text-primary has-text-weight-semibold"
                  >Netlify</span
                >를 이용해 원격 저장소와 연결 후에 배포하고 있습니다. 혹시 같은
                스택으로 프로젝트를 계획하고 계신다면
                <a
                  href="https://github.com/n2ptune/netlify-nuxt-blog"
                  class="github-link"
                  target="_blank"
                  >GitHub 저장소</a
                >를 참고하시면 되겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('https://api.github.com/users/n2ptune')
    return {
      avatarOfGithub: data.avatar_url
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96vh;
}
.card {
  border-radius: 5px;
}
@media screen and (max-width: 768px) {
  .container {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
  .card {
    width: 95%;
  }
}
@media screen and (min-width: 769px) {
  .card {
    width: 80%;
  }
}
@media screen and (min-width: 1024px) {
  .card {
    width: 60%;
  }
}
.card-avatar {
  display: block;
  position: relative;
  margin: 0 auto;
  top: -25px;
  width: 48px;
  border-radius: 50%;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.34);
}
.github-link {
  text-decoration-style: dashed;
  text-decoration-line: underline;
  padding-bottom: 50px;
}
.media-content {
  overflow: hidden;
}
</style>
