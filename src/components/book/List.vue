<template>
  <div class="book-list-container">
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
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    BookItem,
    Pagination
  },
  name: "BookList",

  props: {
    data: {
      type: Array,
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
    ...mapActions(["fetchBookList", "updatePageInfo"]),
    handleClick(page) {
      const {  pageSize, pageCount } = this.getPageInfo;
      this.updatePageInfo({page, pageSize, pageCount});
      this.fetchBookList({ page, pageSize });
    }
  }
};
</script>

<style lang="less" scoped>
.book-list-container {
  background: #fff;
  padding: 20px 20px 30px 20px;
  margin: auto;
  .book__data__list {
    .book__data__row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .book__data_item {
      }
    }
  }
}
</style>