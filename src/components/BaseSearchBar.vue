<template>
  <div class="bar-wrap">
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
      keyword: "诛仙"
    };
  },
  methods: {
    ...mapActions(["searchBook"]),

    

    handleClick() {
      const keyword = this.keyword;
      return throttle(() => {this.searchBook(keyword).then(res => {
        console.log(res.data);
      })}, 300);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/mixins.less";

.bar-wrap {
  // margin: auto;
  display: flex;
  justify-items: center;
  align-items: center;
  .item {
    input {
      .input-style();
    }
  }
}
</style>