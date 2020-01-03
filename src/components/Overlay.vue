<template>
  <div v-show="show" class="overlay">
    <!-- <span>正在加载...</span> -->
    <div class="spinner">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overlay",
  props: {
    show: {
      type: Boolean,
      default: false
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
  background: rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .spinner {
    margin: 120px auto;
    position: relative;
    width: 32px;
    height: 32px;
    /* border: 1px solid #f7f7f7; */
    animation: SpinRotate 1.4s linear infinite;
  }

  .spinner div {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #dcdfe6;
    animation: SpinOpacity 1.2s linear infinite;
  }

  .spinner .circle1 {
    left: 0;
    /* right: 0; */
    top: 0;
    animation-delay: 0.1s;
  }

  .spinner .circle2 {
    left: 0;
    /* right: 0; */
    bottom: 0;
    animation-delay: 0.2s;
  }

  .spinner .circle3 {
    top: 0;
    /* bottom: 0; */
    right: 0;
    animation-delay: 0.3s;
  }

  .spinner .circle4 {
    bottom: 0;
    /* bottom: 0; */
    right: 0;
    animation-delay: 0.4s;
  }

  @keyframes SpinRotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes SpinOpacity {
    0%,
    20%,
    100% {
      opacity: 0.3;
    }
    80% {
      opacity: 1;
    }
  }
  // span {
  //   user-select: none;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   color: rgba(255, 255, 255, 1);
  //   font-size: 20px;
  // }
}
</style>