<template>
  <div class="res-container">
    <base-header />
    <section class="res-wrap">
      <!-- <Overlay :show="overlay" /> -->
      <div class="res-list">
        <div class="res-item">
          <base-info
            v-for="(item, index) in getSearchResult"
            :key="index"
            :data="item"
            @click="handleClick"
          />
        </div>
      </div>
    </section>
    <base-footer />
  </div>
</template>

<script>
import BaseHeader from "../components/BaseHeader";
import BaseFooter from "../components/BaseFooter";
import BaseInfo from "./detail/BaseInfo";

import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "SearchResult",
  components: {
    BaseHeader,
    BaseFooter,
    BaseInfo
  },
  computed: {
    ...mapGetters(["getSearchResult"])
  },
  methods: {
    ...mapMutations(["setOverlay"]),
    ...mapActions(["searchBook", "downloadBook"]),
    handleClick(path) {
      this.setOverlay(true);
      this.downloadBook(path).then(() => {
        this.setOverlay(false);
        this.$router.push({
          name: "detail",
          params: {
            id: path
          }
        });
      });
    }
  },

  async mounted() {
    const { keyword } = this.$route.query;
    if (!this.getSearchResult) {
      this.setOverlay(true);
      await this.searchBook(keyword);
    }
    this.setOverlay(false);
  }
};
</script>

<style lang="less" scoped>
.res-wrap {
  top: 40px;
  min-width: 800px;
  width: 80%;
  margin: 20px auto;
}
</style>