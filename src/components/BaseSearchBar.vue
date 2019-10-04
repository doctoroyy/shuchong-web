<template>
  <div class="bar-wrap">
    <Overlay :show="showTips" />
    <form class="search-form" @submit="handleClick($event)">
      <div class="item">
        <input v-model.trim="getKeyword" type="text" name="key" placeholder="请输入内容" />
      </div>
      <div class="btn-input-append">
        <base-button class="search-btn" :icon="'sousuo'" />
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { debounce, throttle } from "../utils";
import Overlay from "../components/Overlay";

export default {
  name: "SearchBar",
  components: {
    BaseButton,
    Overlay
  },
  data() {
    return {
      showTips: false
    };
  },
  computed: {
    ...mapGetters(["keyword"]),
    getKeyword: {
      get() {
        return this.keyword;
      },

      set(val) {
        this.setKeyword(val);
      }
    }
  },

  methods: {
    ...mapActions(["searchBook"]),
    ...mapMutations(["setKeyword"]),
    handleClick(e) {
      e.preventDefault();
      const keyword = encodeURI(this.keyword);
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
  .search-form {
    display: flex;
    .item {
      input {
        .input-style();
      }
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