<template>
  <div v-show="show" class="overlay">
    <span>正在加载...</span>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style lang="less">
.overlay {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
  }
}
</style>