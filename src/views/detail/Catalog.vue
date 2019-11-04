<template>
  <div class="catalog-container card">
    <div class="catalog-list card">
      <div class="catalog-title">目录</div>
      <div
        v-for="(item0, index0) in createData" 
        :key="index0" 
        class="catalog-item"
      >
        <div
          v-for="(item1, index1) in item0"
          :key="index1"
          @click="handleClick(item1.no)"
          class="catalog-name card"
        >
          {{ item1.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalog",

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    handleClick(chapterno) {
      const { id } = this.$route.params;
      this.$router.push({
        name: "book",
        params: {
          id,
          chapterno
        }
      });
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
  min-height: 800px;
  .catalog-list {
    box-sizing: border-box;
    width: 100%;
    padding: 4%;
    user-select: none;
    .catalog-title {
      font-size: 30px;
      margin: 10px;
    }
    .catalog-item {
      display: flex;
      align-items: center;
      .catalog-name {
        height: 60px;
        line-height: 60px;
        text-align: center;
        width: 33%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>