<template>
  <div class="book-detail-container">
    <base-header />
    <section class="detail-main">
      <!-- <Overlay :show="overlay" /> -->
      <base-info :data="getCatalog.bookInfo" />
      <catalog :data="chapters" />
    </section>
    <Footer />
  </div>
</template>

<script>
import BaseHeader from "../../components/BaseHeader";
import BaseInfo from "./BaseInfo";
import Catalog from "./Catalog";
import { mapGetters, mapActions, mapMutations } from "vuex";
import Footer from "../../components/BaseFooter";
// import Overlay from "../../components/Overlay";
// import Loading from "../loading/index.vue";
import { throttle } from "../../utils";

export default {
  name: "BookDetail",

  components: {
    BaseHeader,
    BaseInfo,
    Catalog,
    Footer
    // Overlay
  },
  data() {
    return {
      // overlay: false,
      // show: false,
      offset: 0
    };
  },

  async mounted() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.addEventListener("scroll", this.scrollWatcher);
    const { id } = this.$route.params;
    if (!this.getCatalog || this.getCatalog.bookInfo.id !== id) {
      // this.overlay = true;
      this.setOverlay(true);

      await this.fetchBookCatalog(id);
      // this.overlay = false;
      this.setOverlay(false);
    }
  },

  methods: {
    ...mapMutations(["setOverlay"]),
    ...mapActions(["fetchBookCatalog"]),
    scrollWatcher() {
      throttle(() => {
        let el = document.documentElement;
        let flag = el.scrollHeight - el.scrollTop - 300 <= el.clientHeight;
        if (flag) {
          // console.log(flag);
          this.offset += 1;
        }
      }, 400)();
    }
  },

  computed: {
    ...mapGetters(["getCatalog"]),
    chaptersLen() {
      return this.getCatalog.chapters.length;
    },

    chapters() {
      const chapters = this.getCatalog.chapters.slice(0, this.offset * 60 + 60);
      if (this.chaptersLen === chapters.length) {
        document.removeEventListener("scroll", this.scrollWatcher);
      }
      return chapters;
    }
  }
};
</script>

<style lang="less" scoped>
.book-detail-container {
  min-width: 900px;
  .detail-main {
    width: 80%;
    min-width: 800px;
    margin: 40px auto 0 auto;
  }
}
</style>