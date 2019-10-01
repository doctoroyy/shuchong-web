<template>
  <div class="chapter-detail">
    <section class="chapter-container">
      <div class="chapter-control">
        <div class="text-wrap">
          <span @click="handleClick(-1)">上一章</span>
        </div>
        <span class="divider"></span>
        <div class="text-wrap">
          <span @click="backBookDetail">目录</span>
        </div>
        <span class="divider"></span>
        <div class="text-wrap">
          <span @click="handleClick(+1)">下一章</span>
        </div>
      </div>
      <div class="context card">
        <div class="title"><h1>{{ context.name }}</h1></div>
        <p v-for="(item, index) in context.context" :key="index">{{item}}</p>
      </div>
      <div class="chapter-control">
        <div class="text-wrap">
          <span @click="handleClick(-1)">上一章</span>
        </div>
        <span class="divider"></span>
        <div class="text-wrap">
          <span @click="backBookDetail">目录</span>
        </div>
        <span class="divider"></span>
        <div class="text-wrap">
          <span @click="handleClick(+1)">下一章</span>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/BaseFooter";
import { mapActions } from "vuex";

export default {
  name: "Chapter",
  components: {
    Footer
  },
  data() {
    return {
      context: null
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
    backBookDetail() {
      const { id } = this.$route.params;
      this.$router.push({
        name: 'detail',
        params: {
          id
        }
      })
    },

    async handleClick(flag) {
      let { id, chapterno } = this.$route.params;
      (chapterno = parseInt(chapterno)), (id = parseInt(id));
      // this.overlay = true;
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
    let { id, chapterno } = this.$route.params;
    // this.overlay = true;
    (chapterno = parseInt(chapterno)), (id = parseInt(id));
    const res = await this.fetch(id, chapterno);
    // for (let i = 1; i <= 3; i++) {
      this.fetch(id, chapterno + 1);
    // }
    // this.overlay = false;
    this.context = res.data;
  }
};
</script>
<style lang="less" scoped>
.chapter-detail {
  width: 80%;
  margin: 40px auto 0 auto;
  .chapter-control {
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: space-between;
    .text-wrap {
      display: inline-block;
      height: 80;
      text-align: center;
      line-height: 80px;
      width: 33%;
      font-size: 1.6em;
      user-select: none;
      &:hover {
        background: rgba(0, 0, 0, 0.03);
      }
    }
    .divider {
      margin: 24px 0;
      padding: 0;
      height: 32px;
      // line-height: 32px;
      border-right: 1px solid #d8d8d8;
    }
  }
  .context {
    padding: 60px 10px;
    margin: auto;
    
    .title {
      margin: auto;
      text-align: center;
      font-size: 1.6em;
      margin-bottom: 10px;
    }
    p {
      padding: 0 20px;
      line-height: 255%;
      font-size: 1.2em;
      text-indent: 2em;
    }
  }
}
</style>