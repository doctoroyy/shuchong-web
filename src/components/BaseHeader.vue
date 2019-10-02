<template>
  <header class="header">
    <div class="line">
      <div class="icon"></div>
      <search-bar />
      <div class="btn-group">
        <base-button :icon="'wode'" :name="'注册'" />
        <base-button :icon="'wode'" :name="'登录'" />
      </div>
    </div>
    <nav class="nav">
      <div class="nav-list">
        <div class="nav-item">
          <router-link to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/about">关于</router-link>
        </div>
        <div class="nav-item">
          <router-link to="#">个人中心</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import SearchBar from "../components/BaseSearchBar";
import BaseButton from "../components/BaseButton";

export default {
  components: {
    SearchBar,
    BaseButton
  }
};
</script>

<style lang="less" scoped>
@import "../styles/mixins.less";

.header {
  background: #fff;
  min-width: 900px;
  padding-top: 25px;
  .line {
    padding: 0 10%;
    // min-width: 600px;
    margin-bottom:  6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      min-width: 112px;
      height: 44px;
      background: url("../assets/images/favicon.png") no-repeat;
      background-size: 100% 100%;
    }
    .btn-group {
      display: flex;
      height: 40px;
      width: 174px;
      justify-content: space-between;
    }
  }
  .nav {
    padding: 0 10%;
    background: #4fb53d;
    min-width: 600px;
    height: 60px;
    display: flex;
    align-items: center;
    // justify-content: space-around;
    .nav-list {
      // min-width: 600px;
      // margin-left: 40px;
      display: flex;
      // align-items: end;
      justify-content: space-between;
      width: 280px;
      .nav-item {
        user-select: none;
        line-height: 60px;
        height: 60px;
        padding: 0 20px;
        text-align: center;
        a {
          color: #fff;
        }
        &:hover {
          background: rgba(63, 145, 29, 0.3);
        }
        &::before {
          width: 0;
          height: 100%;
          position: absolute;
          top: 0;
          left: 100%;
          border-bottom: 2px solid #000;
          content: "";
          // transition: 0.2s all linear;
        }
      }
    }
  }
}
</style>