<template>
  <div class="pagination-container">
    <ul class="pagination">
      <li class="pagination-item pagination-prev" :class="{disabled: isFistPage}">
        <i class="iconfont icon-arrow-left" @click="() => handleClick(page - 1)"></i>
      </li>
      <li
        v-for="i in pageCount"
        :key="i"
        class="pagination-item"
        :class="{active: isCurrent(i)}"
        @click="() => handleClick(i)"
      >
        <span>{{ i }}</span>
      </li>
      <li class="pagination-item pagination-next" :class="{disabled: isLastPage}">
        <i class="iconfont icon-arrow-right" @click="() => handleClick(page + 1)"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",

  props: {
    page: {
      type: Number
    },
    pageCount: {
      type: Number
    },
    handleClick: {
      type: Function
    }
  },

  methods: {
    isCurrent(index) {
      return this.page === index;
    }
  },

  computed: {
    isFistPage() {
      return this.page === 1;
    },

    isLastPage() {
      return this.page === this.pageCount;
    }
  }
};
</script>

<style lang="less" scoped>
.pagination-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  .pagination {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    .pagination-item {
      display: inline-block;
      min-width: 32px;
      height: 32px;
      margin-right: 8px;
      font-family: Arial;
      line-height: 30px;
      text-align: center;
      vertical-align: middle;
      list-style: none;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      outline: 0;
      cursor: pointer;
      user-select: none;
      &.active {
        font-weight: 500;
        background: #fff;
        color: #1890ff;
        border-color: #1890ff;
      }
      &.disabled,
      &.disabled:hover {
        color: rgba(0, 0, 0, 0.45);
        background: #f5f5f5;
        border-color: #d9d9d9;
        pointer-events: none;
        cursor: not-allowed;
      }
    }
  }
}
</style>