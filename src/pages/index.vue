<template>
  <div class="container">
    <div class="columns">
      <div class="column is-mobile">
        <div class="card is-full">
          <img class="card-avatar" src="https://icon-library.net//images/web-developer-icon/web-developer-icon-10.jpg">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="avatarOfGithub" :style="{ borderRadius: '50%' }">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">n2ptune</p>
                <p class="subtitle is-6 has-text-grey">Web, Front-End Developer</p>
              </div>
            </div>
            <div class="media">
              <div class="media-content">
                <p class="title is-5">프로필</p>
                <p class="subtitle is-6" :style="{ paddingTop: '10px' }">
                  안녕하세요, 소개~
                </p>
              </div>
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
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
.card {
  border-radius: 5px;
}
.columns {
  width: 100%;
}
@media screen and (min-width: 769px) {
  .columns {
    width: 80%;
  }
}
@media screen and (min-width: 1024px) {
  .columns {
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
</style>