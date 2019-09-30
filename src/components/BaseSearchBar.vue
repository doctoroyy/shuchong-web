<template>
  <div class="bar-wrap">
    <div class="item">
      <input type="text" name="key" placeholder="请输入内容" />
    </div>
    <div class="btn-input-append">
      <div class="search-btn iconfont icon-sousuo" @click="handleClick"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    handleClick() {
      // console.log('clicked!');
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/base.less";

.bar-wrap {
  // margin: auto;
  display: flex;
  justify-items: center;
  align-items: center;
  .item {
    input {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: @radius;
      border: 1px solid #dcdfe6;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      box-sizing: border-box;
      color: #606266;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      outline: 0;
      padding: 0 15px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 300px;
    }
  }
  .btn-input-append {
    // border-left: 1px solid red;
    .search-btn {
      .btn-style();
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: 0;
    }
    .search-btn:active {
      .base-hover();
    }
  }
}
</style>