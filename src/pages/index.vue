<template>
  <div class="carousel-container">
    <header class="header">
      <div class="line">
        <div class="icon"></div>
        <search-bar />
        <div class="btn-group">
          <base-button :name='"注册"'/>
          <base-button :name='"登录"'/>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import SearchBar from "../components/BaseSearchBar";
import BaseButton from "../components/BaseButton";

export default {
  name: "Main",

  components: {
    SearchBar,
    BaseButton,
  },
  data() {
    return {};
  },

  props: {},
  mounted() {},

  methods: {},

  computed: {}
};
</script>

<style lang="less" scoped>
@import "../styles/base.less";
.carousel-container {
  .header {
    min-width: 600px;
    margin: 30px auto 20px;
    .line {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .icon {
        width: 112px;
        height: 44px;
        background: url("../assets/images/favicon.png") no-repeat;
        background-size: 100% 100%;
        // margin-right: 100px;
      }
      .btn-group {
        display: flex;
        height: 40px;

      }
    }
  }
}
</style>