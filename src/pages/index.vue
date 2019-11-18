<template>
  <div class="container">
    <div class="columns is-desktop">
      <div class="column is-12">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://firebasestorage.googleapis.com/v0/b/blog-n2ptune-xyz.appspot.com/o/images%2F193-1280x960.jpg?alt=media&token=fe9e5fa8-bb29-4996-8abc-fc1287466795" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" :style="{ borderRadius: '50%' }">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">n2ptune</p>
                <p class="subtitle is-6">Web, Front-End Developer</p>
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
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  },
  mounted() {
    document.body.style.height = '100vh'
    document.body.style.background = 'linear-gradient(210deg, #12c2e9, #c471ed, #f64f59)'
    document.body.style.backgroundAttachment = 'fixed'
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  /* height: 100vh; */
}
</style>