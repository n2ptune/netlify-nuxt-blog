<template>
  <div v-if="tags" class="tags-wrapper">
    <div class="tags-list">
      <nuxt-link
        v-for="tag in tags"
        :key="tag"
        class="p-tag"
        :to="`/tags/${tag}/`"
        exact
      >
        {{ firstUpperCase(tag) }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  methods: {
    firstUpperCase(str) {
      switch (str) {
        case 'scss':
        case 'css':
        case 'test':
          return str.toUpperCase()
      }
      return `${str.charAt(0).toUpperCase()}${str.substring(1, str.length)}`
    }
  }
}
</script>

<style lang="scss" scoped>
.tags-wrapper {
  display: flex;
  padding-bottom: 0.5rem;
  align-items: center;
  vertical-align: middle;
}
.tags-list {
  display: flex;
  margin-left: 0.25rem;
}
.p-tag {
  color: rgba(0, 0, 0, 0.45);
  padding: 0.25rem 0.5rem;
  margin: 0 0.25rem;
  background-color: #fafdff;
  border-radius: 3px;
  transition: background 0.45s ease-out, color 0.45s ease-out;

  &:hover {
    background-color: #c5c4ff;
    color: rgba(0, 0, 0, 0.85);
    font-weight: bold;
  }
}
</style>
