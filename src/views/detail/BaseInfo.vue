<template>
  <div class="book-info-container card">
    <div class="book-cover">
      <img :src="data.imgSrc" :alt="data.author" class="image card" />
    </div>
    <div class="book-desc">
      <div class="book-name">
        <span>{{ data.name + "：" }}</span>
        <span>{{ data.author }}</span>
        
      </div>
      <div class="desc-detail card">
        <span>{{ data.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import BookItem from "../../components/book/Item";

export default {
  name: "BaseInfo",

  data() {
    return {};
  },

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {},

  methods: {},

  computed: {}
};
</script>

<style lang="less" scoped>
.book-info-container {
  margin-bottom: 20px;
  display: flex;
  // justify-content: space-around;
  .book-cover {
    padding: 20px;
    .image {
      border-bottom: 1px solid #e6e6e6;
      width: 184px;
      height: 244px;
      display: block;
    }
  }
  .book-desc {
    // width: 800px;
    // border: 1px red solid;
    margin: 40px 20px;
    height: 100%;
    .book-name {
      display: inline-block;
      // width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 4px;
      background-color: #ecf5ff;
      border: 1px solid #d9ecff;
      color: #409eff;
      padding: 0 10px;
    }
    .desc-detail {
      min-height: 100px;
      margin-top: 60px;
      text-indent: 2em;
      padding: 10px;
    }
  }
}
</style>