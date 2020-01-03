<template>
  <div class="history-list">
    <history-item v-for="(item, index) in data" :key="index" :data="item" />
  </div>
</template>

<script>
import HistoryItem from "./HistoryItem";

export default {
  name: "HistoryList",

  components: {
    HistoryItem
  },

  props: {
    data: {
      type: Array
    }
  }
};
</script>
