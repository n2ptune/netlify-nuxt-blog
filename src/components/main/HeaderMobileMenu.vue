<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Menus</p>
    </header>
    <section class="modal-card-body">
      <b-menu>
        <b-menu-list label="Routes">
          <b-menu-item
            v-for="route in routes"
            :key="route.name"
            :to="route.to"
            :label="route.name"
            tag="nuxt-link"
            @click="$parent.close()"
          >
          </b-menu-item>
        </b-menu-list>
      </b-menu>
    </section>
    <footer class="modal-card-foot">
      <button
        class="button"
        type="button"
        @click="$parent.close()"
        :style="{ marginLeft: 'auto' }"
      >
        닫기
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    routes: {
      required: true
    }
  }
}
</script>
