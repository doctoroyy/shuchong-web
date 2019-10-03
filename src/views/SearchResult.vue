<template>
  <div class="res-container">
    <base-header />
    <section class="res-wrap">
      <Overlay :show="overlay" />
      <div class="res-list">
        <base-info v-for="(item, index) in getSearchResult" :key="index" :data="item" />
      </div>
    </section>
    <base-footer />
  </div>
</template>

<script>
import BaseHeader from "../components/BaseHeader";
import BaseFooter from "../components/BaseFooter";
import BaseInfo from "./detail/BaseInfo";
import Overlay from "../components/Overlay";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "SearchResult",
  components: {
    BaseHeader,
    BaseFooter,
    BaseInfo,
    Overlay
  },
  data() {
    return {
      overlay: false,
    };
  },

  computed: {
    ...mapGetters(["getSearchResult"])
  },
  methods: {
    ...mapActions(["searchBook"])
  },

  async mounted() {
    const { keyword } = this.$route.query;
    if (!this.getSearchResult) {
      this.overlay = true;
      await this.searchBook(keyword);
    }
    this.overlay = false;
  }
};
</script>

<style lang="less" scoped>
.res-wrap {
  // position: relative;
  top: 40px;
  // border: 1px solid red;
  min-width: 800px;
  width: 80%;
  margin: 20px auto;
}
</style>