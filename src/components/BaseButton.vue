<template>
  <div
    @click="handleClick"
    class="btn-wrap">
    <button :class="['iconfont', 'icon-' + icon]">{{ name }}</button>
  </div> 
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    handelClick: {
      type: Function,
      default: () => {},
    },
    name: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: ""
    }
  },
  data: {
    
  }
}
</script>

<style lang="less" scoped>
@import '../styles/base.less';
.btn-wrap {
  button {
    .btn-style();
  }
  button:active {
    .base-hover();
  }
}
</style>