<template>
  <div class="error-wrapper">
    <div class="icon-title-wrapper">
      <b-icon
        icon="alert-circle-outline"
        size="is-large"
      />
      <p class="error-title is-size-4" :style="{ paddingLeft: '5px' }">페이지에 에러가 발생하였습니다.</p>
    </div>
    <div class="error-description">
      내용 : {{ error.statusCode === 404 ? '해당 페이지를 찾을 수 없습니다.' : error.message }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'empty'
}
</script>

<style scoped>
.error-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}
.icon-title-wrapper {
  display: flex;
}
.error-title {
  margin-top: auto;
  margin-bottom: auto;
  color: black;
}
.error-description {
  display: flex;
}
</style>