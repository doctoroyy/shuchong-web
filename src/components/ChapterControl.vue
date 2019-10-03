<template>
  <div class="chapter-control">
    <div @click="handleClick(-1)" class="text-wrap">
      <span>上一章</span>
    </div>
    <span class="divider"></span>
    <div @click="backBookDetail" class="text-wrap">
      <span>目录</span>
    </div>
    <span class="divider"></span>
    <div @click="handleClick(+1)" class="text-wrap">
      <span>下一章</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChapterControl',

  props: {
    handleClick: {
      type: Function,

    },

  },
  methods: {
    backBookDetail() {
      const { id } = this.$route.params;
      this.$router.push({
        name: "detail",
        params: {
          id
        }
      });
    },
  }
};
</script>

<style lang="less">
.chapter-control {
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  .text-wrap {
    display: inline-block;
    height: 80px;
    text-align: center;
    line-height: 80px;
    width: 33%;
    font-size: 1.6rem;
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
</style>