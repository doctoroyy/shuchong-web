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
    <Footer />
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

  props: {

  },
  
  created() {
    const { pageSize, page } = this.getPageInfo;
    this.fetchBookList({ page, pageSize });
  },

  methods: {
    ...mapActions(["fetchBookList"])
  },

  computed: {
    ...mapGetters(["getBookList", "getPageInfo"])
  },
};
</script>

<style lang="less" scoped>
.page-container {
  background: #f7f7f7;
  min-height: 1000px;
  section {
    width: 80%;
    min-width: 900px;
    margin: 40px auto 20px auto;
    .book-list-wrap {
      height: 630px;
    }
    .books-shelfs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .book-tags {
        flex: 1;
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