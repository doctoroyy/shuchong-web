<template>
  <div class="tag-tab">
    <div class="category">
      <i class="iconfont icon-liebiao" /><a href="javascript:void(0)">作品分类</a> 
    </div>
    <div class="tag-list">
      <div class="tag-item" v-for="(item, index) in getTags" :key="index">
        <a href="javascript:void(0)">{{ item[0] }}</a>
        <a href="javascript:void(0)">{{ item[1] }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagList',
  props: {
    dataSrc: {
      type: Array,
      default: () => [
        "玄幻",
        "奇幻",
        "武侠",
        "仙侠",
        "都市",
        "现实",
        "军事",
        "历史",
        "游戏",
        "体育",
        "科幻",
        "悬疑灵异",
        "女生网",
        "轻小说"
      ]
    }
  },
  computed: {
    getTags() {
      let res = [];
      const dataSrc = this.dataSrc;
      for (let i = 0; i < dataSrc.length; i += 2) {
        res.push([dataSrc[i], dataSrc[i + 1]]);
      }
      return res;
    }
  }
};
</script>

<style lang="less" scoped>
.tag-tab {
  .category {
    margin: 0 10px 10px 0;
    top: 160px;
    i {
      font-size: 24px;
      margin-right: 10px;
    }
    a {
      color: #333;
      font-size: 20px;
      font-weight: 380;
    }

  }
  .tag-list {
    width: 250px;
    .tag-item {
      display: flex;
      width: 100%;
      a {
        text-align: center;
        flex: 1;
        color: #333;
        display: inline-block;
        height: 50px;
        line-height: 50px;
        outline: 1px dotted #e6e6e6;
      }
    }
  }
}
</style>