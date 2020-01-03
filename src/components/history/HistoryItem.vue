<template>
  <div class="history-item-wrap">
    <div class="history-tab">
      <div class="row">
        <div class="col"><span>{{new Date(data.Date).toLocaleString()}}</span></div>
        <div class="col"><h3>{{ data.commit }}</h3></div>
      </div>
    </div>
    <divider/>
  </div>
</template>

<script>
import Divider from '../Divider';

export default {
  name: 'HistoryItem',
  components: {
    Divider,
  },
  props: {
    data: {
      type: Object,
    }
  }
}
</script>

<style lang="less" scoped>
.history-item-wrap {
  .history-tab {
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      .col {
        h3 {
          color: #333;
          font-weight: 400;
        }
        span {
          display: inline-block;
          min-width: 180px;
        }
      }
    }
  }
  margin: auto;
}
</style>