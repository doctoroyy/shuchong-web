<template>
  <div class="history-wrap">
    <base-header />
    <section>
      <h2>更新日志：</h2>
      <divider/>
      <history-list :data="updateHistory" />
    </section>
    <Footer />
  </div>
</template>

<script>
import BaseHeader from "../components/BaseHeader";
import Footer from "../components/BaseFooter";
import HistoryList from "../components/history/HistoryList";
import Divider from '../components/Divider';

export default {
  name: "UpdateHistory",
  components: {
    BaseHeader,
    Footer,
    HistoryList,
    Divider,
  },

  data() {
    return {
      updateHistory: [
        {
          commit: "新增分页组件",
          Author: "xiaoyu <doctor.oyy@gmail.com>",
          Date: "Wed Oct 30 17:17:39 2019 +0800"
        },
        {
          commit: "下载逻辑配合后端改为同步",
          Author: "xiaoyu <doctor.oyy@gmail.com>",
          Date: "Sat Oct 5 14:57:43 2019 +0800"
        },
        {
          commit: "增加全局状态keyword，顶部搜索条支持回车搜索",
          Author: "xiaoyu <doctor.oyy@gmail.com>",
          Date: "Fri Oct 4 20:20:19 2019 +0800"
        },
        {
          commit: "引入小说下载接口，支持下载站外小说",
          Author: "xiaoyu <doctor.oyy@gmail.com>",
          Date: "Fri Oct 4 13:38:07 2019 +0800"
        },
        {
          commit: "为搜索页增加过渡效果",
          Author: "xiaoyu <doctor.oyy@gmail.com>",
          Date: "Thu Oct 3 18:58:14 2019 +0800"
        },
        {
          commit:
            "vuex新增catalog状态，提取ChapterControl控件, 增加蒙板组件Overlay",
          Author: "xiaoyu <doctor.oyy@gmail.com>",
          Date: "Thu Oct 3 18:36:39 2019 +0800"
        },
        {
          commit: "增加小说搜索功能，对小说基本信息展示做了一些美化",
          Author: "xiaoyu <doctor.oyy@gmail.com>",
          Date: "Thu Oct 3 13:36:16 2019 +0800"
        },
        {
          commit: "抛弃elemetn-ui，原生ui组件编写完成",
          Author: "xiaoyu <doctor.oyy@gmail.com>",
          Date: "Wed Oct 2 02:48:25 2019 +0800"
        },
        {
          commit: "接口规范化",
          Author: "xiaoyu <doctor.oyy@gmail.com>",
          Date: "Tue Oct 1 13:17:17 2019 +0800"
        },
        {
          commit: "添加首页",
          Author: "xiaoyu <doctor.oyy@gmail.com>",
          Date: "Tue Oct 1 00:55:39 2019 +0800"
        },
        {
          commit: "开始重构整个前端",
          Author: "xiaoyu <doctor.oyy@gmail.com>",
          Date: "Mon Sep 30 14:15:00 2019 +0800"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.history-wrap {
  section {
    width: 70%;
    // min-width: 620px;
    margin: 40px auto;
  }
}
</style>