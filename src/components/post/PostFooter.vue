<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p class="copyright">Copyright 2019. n2ptune</p>
      <p class="icons">
        <a href="https://github.com/n2ptune/netlify-nuxt-blog">
          <b-icon icon="github-circle" type="is-grey" class="link-icon" />
        </a>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #eee;
  border-top: 1px solid #ddd;
}
.copyright {
  font-size: 0.85rem;
  color: #777;
}
.link-icon {
  &:hover {
    color: black !important;
  }
}
</style>
