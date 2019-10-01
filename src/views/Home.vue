<template>
  <div class="page-container">
    <base-header />
    <section>
      <div class="books-shelfs">
        <div class="book-tags">
          <tag-list />
        </div>
        <div class="book-imgs">
          <carousel />
        </div>
      </div>
      <divider>
        <i class="iconfont icon-sousuo"></i> 全部小说
      </divider>
      <div class="book-list-wrap">
        <book-list :data="getBookList" />
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import BaseHeader from "../components/BaseHeader";
import Carousel from "../components/Carousel";
import TagList from "../components/TagList";
import Divider from "../components/Divider";
import BookList from "../components/book/List";
import { mapGetters, mapActions } from "vuex";
import Footer from "../components/BaseFooter";

export default {
  name: "Home",

  components: {
    BaseHeader,
    Carousel,
    TagList,
    Divider,
    BookList,
    Footer
  },
  data() {
    return {};
  },

  props: {},
  created() {
    this.fetchBookList({ page: 1, pageSize: 100 });
  },

  methods: {
    ...mapActions(["fetchBookList"])
  },

  computed: {
    ...mapGetters(["getBookList"])
  }
};
</script>

<style lang="less" scoped>
.page-container {
  background: #f7f7f7;
  min-height: 1000px;
  section {
    width: 80%;
    // border: 1px red solid;
    // height: 1000px;
    margin: 40px auto 0 auto;
    .books-shelfs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // border: 1px red solid;
      .book-tags {
        // border: 1px red solid;
        flex: 1;
        // height: 400px;
      }
      .book-imgs {
        flex: 3;
        width: 765px;
        // height: 250px;
        background: #fff;
        padding: 0px 10px;
        margin-top: 30px;
      }
    }
  }
}
</style>