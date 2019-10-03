<template>
  <div class="book-detail-container">
    <base-header />
    <section class="detail-main">
      <Overlay :show="overlay"/>
      <base-info :data="getCatalog.bookInfo" />
      <catalog :data="getCatalog.chapters" />
    </section>
    <Footer />
  </div>
</template>

<script>
import BaseHeader from "../../components/BaseHeader";
import BaseInfo from "./BaseInfo";
import Catalog from "./Catalog";
import { mapGetters, mapActions } from "vuex";
import Footer from "../../components/BaseFooter";
import Overlay from "../../components/Overlay";

export default {
  name: "BookDetail",

  components: {
    BaseHeader,
    BaseInfo,
    Catalog,
    Footer,
    Overlay,
  },
  data() {
    return {
      overlay: false,
    }
  },


  async mounted() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const { id } = this.$route.params;
    if (!this.getCatalog || this.getCatalog.bookInfo.id !== id) {
      this.overlay = true;
      await this.fetchBookCatalog(id);
    }
    this.overlay = false;
  },

  methods: {
    ...mapActions(["fetchBookCatalog"])
  },

  computed: {
    ...mapGetters(["getCatalog"])
  }
};
</script>

<style lang="less" scoped>
.book-detail-container {
  // border: 1px red solid;
  min-width: 900px;
  .detail-main {
    // position: relative;
    width: 80%;
    min-width: 800px;
    margin: 40px auto 0 auto;
  }
}
</style>