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
            <p class="is-size-5" v-for="dummy in 20" :key="dummy">Size</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'posts',
  mounted() {
    document.querySelectorAll('.card').forEach((node => {
      node.classList.add('mb-2')
    }))
  }
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
