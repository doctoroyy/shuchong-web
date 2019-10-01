<template>
  <div class="book-item-container card" @click="handleClick">
    <div class="book-cover">
      <img :src="data.imgSrc" :alt="data.author" class="image" />
    </div>
    <div class="book-author">
      <span>{{ data.author }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookItem',

  props: {
    data: {
      type: Object,
      default: () => ({
        imgSrc: "https://www.xbiquge6.com/cover/85/85379/85379s.jpg",
        author: "辰东"
      })
    }
  },
  methods: {
    handleClick() {
      this.$router.push({
        name: 'detail',
        params: {
          id:this.data.id,
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.book-item-container {
  
  .book-cover {
    padding: 0;
    .image {
      border-bottom: 1px solid #e6e6e6;
      width: 168px;
      height: 224px;
      display: block;
    }
  }
  .book-author {
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>