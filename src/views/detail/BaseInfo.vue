<template>
  <div
    @click="handleClick"
    class="book-info-container card">
    <div class="book-cover">
      <img :src="data.imgSrc" :alt="data.author" class="image card" />
    </div>
    <div class="book-desc">
      <div class="book-name">
        <span>{{ data.name }}</span>        
      </div>
      <div class="desc-detail">
        <span>{{ data.description.split('　　').join('') }}</span>
      </div>
      <div class="book-author">
        <span>作者：{{ data.author }}</span>
      </div>
      <div class="update-time">
        <span>更新时间: {{ data.updateTime }}</span>
      </div>
      <div class="lastest-chapter">
        <span>最新章节: {{ data.latestChapter }}</span>
      </div>
    </div>
  </div>
</template>

<script>

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

  methods: {
    handleClick() {
      const { biqugePath } = this.data;
      this.$emit('click', biqugePath);
    }
  },

  computed: {}
};
</script>

<style lang="less" scoped>
.book-info-container {
  margin-bottom: 20px;
  display: flex;
  min-height: 288px;
  // justify-content: space-between;
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
    width: 70%;
    border-radius: 4px;
    border: 1px solid #d9ecff;
    margin: 40px 20px;
    padding: 10px 10px 20px 10px;
    height: 100%;
    .book-name {
      display: inline-block;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 4px;
      font-size: 20px;
      // background-color: #ecf5ff;
      // border: 1px solid #d9ecff;
      color: #333;
      padding: 0 10px;
      // border-bottom-width: 0;
      margin-bottom: 2px;
    }
    .desc-detail {
      height: 2em;
      text-indent: 2em;
      padding: 10px;
      margin-top: -10px;
      overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
    }
    .book-author, .lastest-chapter, .update-time {
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>