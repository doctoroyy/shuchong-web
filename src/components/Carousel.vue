<template>
  <div class="carousel-container">
    <div class="carousel-item" @mouseenter="enter" @mouseleave="leave" v-for="(item, index) in dataSrc" :key="index">
      <img v-show="index == currentIndex" :src="item" :alt="index" class="fade" />
    </div>
    <div @click="swipe(-1)" class="arrow left">
      <i class="iconfont icon-arrow-left"></i>
    </div>
    <div @click="swipe(+1)" class="arrow right">
      <i class="iconfont icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",

  components: {},
  props: {
    dataSrc: {
      type: Array,
      default: () => [
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/da505b7f0abfdd6fac6d8bdad81ddc03.jpg",
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/2b538ec521660989b692bd189066c767.jpg",
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/a5750a52de8d80697623824150ce3583.jpg",
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/e4dfdb58b3f1d5d673b2e7fcc9ca9ee5.jpg",
        "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/f4a932942cc7d88713e649eee396471a.jpg"
      ]
    }
  },

  data() {
    return {
      currentIndex: 0,
      timer: null,
    };
  },

  methods: {
    enter() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    leave() {
      this.autoPlay();
    },

    swipe(ops) {
      const len = this.dataSrc.length;
      let currentIndex = this.currentIndex;
      currentIndex += ops;
      if (currentIndex < 0) {
        currentIndex = len - 1;
      }
      this.currentIndex = currentIndex % len;
    },
    autoPlay() {
      this.timer = setInterval(() => {
        this.swipe(+1);
      }, 4000);
    }
  },
  mounted() {
    this.autoPlay();
  },


  computed: {

  }
};
</script>

<style lang="less" scoped>
.carousel-container {
  height: 320px;
  margin: 15px 0 20px 0;
  position: relative;
  .carousel-item {
    img {
      width: 100%;
      height: 320px;
    }
  }
  .arrow {
    background: rgba(0, 0, 0, 0.08);
    border-radius: 50%;
    text-align: center;
    line-height: 36px;
    width: 36px;
    height: 36px;
    user-select: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    font-weight: 400;
    &:hover {
      background: rgba(0, 0, 0, 0.22);
    }
  }
  .left {
    margin-left: 10px;
  }
  .right {
    right: 0;
    margin-right: 10px;
  }

  .fade {
    animation: fade 1.2s;
  }

  @keyframes fade {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }
}
</style>