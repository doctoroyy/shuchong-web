<template>
  <div class="bar-wrap">
    <div v-show="showTips" class="tips">
      <span>正在获取，请稍后...</span>
    </div>
    <div class="item">
      <input v-model.trim="keyword" type="text" name="key" placeholder="请输入内容" />
    </div>
    <div class="btn-input-append">
      <base-button class="search-btn" :icon="'sousuo'" :handleClick="handleClick()" />
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton";
import { mapActions } from "vuex";
import { debounce, throttle } from "../utils";

export default {
  name: "SearchBar",
  components: {
    BaseButton
  },
  data() {
    return {
      keyword: "诛仙",
      showTips: false
    };
  },
  methods: {
    ...mapActions(["searchBook"]),
    handleClick() {
      const keyword = this.keyword;
      return debounce(() => {
        this.showTips = true;
        this.searchBook(keyword).then(res => {
          // console.log(res.data);
          this.showTips = false;
          this.$router.push({
            name: "search",
            query: {
              keyword
            }
          });
        });
      }, 300);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/mixins.less";

.bar-wrap {
  // margin: auto;
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;
  .item {
    input {
      .input-style();
    }
  }
  .tips {
    position: absolute;
    color: rgba(0, 0, 0, 0.1);
    left: 50%;
    top: 50%;
    width: 160px;
    transform: translate(-50%, -50%);
  }
}
</style>