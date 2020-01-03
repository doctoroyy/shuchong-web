<template>
  <div id="app">
    <router-view />
    <Overlay :show="overlay" />
  </div>
</template>
<script>
import Overlay from "../components/Overlay";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      overlay: 'getOverlay'
    })
  },

  components: {
    Overlay
  }
};
</script>
<style lang="less">
@import "../styles/base.less";
</style>
