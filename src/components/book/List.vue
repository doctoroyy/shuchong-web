<template>
  <div class="book-list-container">
    <!-- <Overlay :show="overlay" /> -->
    <div class="book__data__list">
      <div v-for="(item0, index0) in createData" :key="index0" class="book__data__row">
        <book-item
          class="book__data_item"
          v-for="(item1, index1) in item0"
          :key="index1"
          :data="item1"
        />
      </div>
    </div>
    <pagination
      :page="getPageInfo.page"
      :pageCount="getPageInfo.pageCount"
      :handleClick="handleClick"
    />
  </div>
</template>

<script>
import BookItem from "./Item";
import Pagination from "../Pagination";
import { mapGetters, mapActions, mapMutations } from "vuex";
// import Overlay from "../../components/Overlay";

export default {
  // data() {
  //   return {
  //     // overlay: false
  //   };
  // },

  components: {
    BookItem,
    Pagination,
    // Overlay
  },
  name: "BookList",

  props: {
    data: {
      type: Array
    }
  },

  computed: {
    createData() {
      // console.log(this.data)
      const data = this.data;
      let res = [];
      for (let i = 0; i < data.length; i += 5) {
        let arr = [];
        for (let j = i; j < i + 5; j++) {
          if (data[j]) arr.push(data[j]);
        }
        res.push(arr);
      }
      return res;
    },
    ...mapGetters(["getBookList", "getPageInfo"])
  },

  methods: {
    ...mapMutations(["setOverlay"]),
    ...mapActions(["fetchBookList", "updatePageInfo"]),
    async handleClick(page) {
      const { pageSize, pageCount } = this.getPageInfo;
      this.updatePageInfo({ page, pageSize, pageCount });
      // this.overlay = true;
      this.setOverlay(true);
      await this.fetchBookList({ page, pageSize });
      // this.overlay = false;
      this.setOverlay(false);
    }
  }
};
</script>

<style lang="less" scoped>
.book-list-container {
  position: relative;
  background: #fff;
  padding: 20px 20px 30px 20px;
  margin: auto;
  height: 600px;
  .book__data__list {
    .book__data__row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }
}
</style>