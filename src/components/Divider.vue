<template>
  <div class="divider-wrap">
    <div class="divider">
      <div class="divider__text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Divider"
};
</script>

<style lang="less" scoped>
.divider-wrap {
  .divider {
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
    background-color: #dcdfe6;
    position: relative;
    // color: red;
    .divider__text {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #333;
      background: #fff;
      padding: 0 5px;
    }
  }
}
</style>