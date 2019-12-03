<template>
  <div class="_container">
    <div class="is-size-3 font-weight-bold">
      Oops!
    </div>
    <div class="title">
      {{ reqParam }} 페이지를 준비중입니다.
    </div>
    <div class="is-size-3 font-weight-bold">
      Oops!
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reqParam: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
._container {
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-grow: auto;
  flex-direction: column;

  &:first-child,
  &:last-child {
    color: rgba(0, 0, 0, 0.19);
  }
}
.title {
  margin-bottom: 0;
}
</style>
