<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          - NEW
        </div>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="is-size-5">Size</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'posts'
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .container {
    margin-left: 10px;
    margin-right: 10px;
  }
}
.card {
  border-radius: 5px;
}
</style>
