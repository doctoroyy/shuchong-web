<template>
  <div class="chapter-detail">
    <Overlay :show="overlay" />
    <section class="chapter-container">
      <chapter-control :handleClick="handleClick" />
      <div class="context card">
        <div class="title">
          <h1>{{ context.name }}</h1>
        </div>
        <p v-for="(item, index) in context.context" :key="index">{{item}}</p>
      </div>
      <chapter-control :handleClick="handleClick" />
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/BaseFooter";
import { mapActions } from "vuex";
import Overlay from "../components/Overlay";
import ChapterControl from "../components/ChapterControl";

export default {
  name: "Chapter",
  components: {
    Footer,
    Overlay,
    ChapterControl
  },
  data() {
    return {
      context: null,
      overlay: false
    };
  },

  watch: {
    $route: function(to, from) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  methods: {
    ...mapActions(["fetchChapter"]),

    async fetch(id, chapterno) {
      // alert(JSON.stringify(localStorage))
      if (localStorage.getItem(`${id}/${chapterno}`)) {
        return JSON.parse(localStorage.getItem(`${id}/${chapterno}`));
      } else {
        const res = await this.fetchChapter({
          id: id,
          chapterno: chapterno
        });
        localStorage.setItem(`${id}/${chapterno}`, JSON.stringify(res));
        return res;
      }
    },

    async handleClick(flag) {
      let { id, chapterno } = this.$route.params;
      (chapterno = parseInt(chapterno));
      this.overlay = true;
      const res = await this.fetch(id, chapterno + flag);
      if (flag === 1) {
        this.fetch(id, chapterno + 1 + 1);
      }
      this.overlay = false;
      this.context = res.data;
      this.$router.push({
        name: "book",
        params: {
          id: id,
          chapterno: chapterno + flag
        }
      });
    }
  },

  async mounted() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    let { id, chapterno } = this.$route.params;
    this.overlay = true;
    (chapterno = parseInt(chapterno));
    const res = await this.fetch(id, chapterno);
    this.fetch(id, chapterno + 1);
    this.context = res.data;
    this.overlay = false;
  }
};
</script>
<style lang="less">
.chapter-detail {
  width: 80%;
  min-width: 900px;
  margin: 40px auto 0 auto;
  .context {
    padding: 6rem 1rem;
    margin: auto;
    .title {
      margin: auto;
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    p {
      padding: 0 2rem;
      line-height: 3rem;
      font-size: 1.4rem;
      text-indent: 2rem;
    }
  }
}
</style>