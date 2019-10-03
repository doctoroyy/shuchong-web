<template>
  <div class="catalog-container card">
    <div class="catalog-list card">
      <div class="catalog-title">目录</div>
      <div v-for="(item0, index0) in createData" :key="index0" class="catalog-item">
        <div
          v-for="(item1, index1) in item0"
          :key="index1"
          @click="handleClick(item1.no)"
          class="catalog-name card"
        >{{ item1.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalog",

  components: {},
  data() {
    return {};
  },

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  mounted() {},

  methods: {
    handleClick(chapter_id) {
      const book_id = this.$route.params.id;
      this.$router.push({
        name: 'book',
        params: {
          id: book_id,
          chapterno: chapter_id,
        }
      })
    }
  },

  computed: {
    createData() {
      const data = this.data;
      let res = [];
      const len = data.length;
      for (let i = 0; i < data.length; i += 3) {
        let tmp = [];
        for (let j = i; j < i + 3; j++) {
          if (data[j]) tmp.push(data[j]);
        }
        res.push(tmp);
      }
      return res;
    }
  }
};
</script>

<style lang="less" scoped>
.catalog-container {
  display: flex;
  .catalog-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 4%;
    user-select: none;
    .catalog-title {
      font-size: 30px;
      margin: 10px;
    }
    .catalog-item {
      // width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .catalog-name {
        height: 60px;
        line-height: 60px;
        text-align: center;
        flex: 1;
      }
    }
  }
}
</style>