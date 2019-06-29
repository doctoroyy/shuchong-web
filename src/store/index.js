import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    tags: [
      "玄幻",
      "奇幻",
      "武侠",
      "仙侠",
      "都市",
      "现实",
      "军事",
      "历史",
      "游戏",
      "体育",
      "科幻",
      "悬疑灵异",
      "女生网",
      "轻小说"
    ],
    books: [
      {
        src: "https://www.xbiquge6.com/cover/78/78513/78513s.jpg",
        name: "元尊"
      },
      {
        src: "https://www.xbiquge6.com/cover/20/20331/20331s.jpg",
        name: "万古神帝"
      },
      {
        src: "https://www.xbiquge6.com/cover/9/9208/9208s.jpg",
        name: "伏天氏"
      },
      {
        src: "https://www.xbiquge6.com/cover/8/8109/8109s.jpg",
        name: "帝霸"
      },
      {
        src: "https://www.xbiquge6.com/cover/0/576/576s.jpg",
        name: "无敌天下"
      },
      {
        src: "https://www.xbiquge6.com/cover/34/34822/34822s.jpg",
        name: "三寸人间"
      },
      {
        src: "https://www.xbiquge6.com/cover/3/3482/3482s.jpg",
        name: "俗人回档"
      },
      {
        src: "https://www.xbiquge6.com/cover/76/76306/76306s.jpg",
        name: "寒门枭士"
      },
      {
        src: "https://www.xbiquge6.com/cover/20/20339/20339s.jpg",
        name: "茅山捉鬼人"
      },
      {
        src: "https://www.xbiquge6.com/cover/12/12267/12267s.jpg",
        name: "重生之最强剑神"
      }
    ]
  },

  modules: {

  },
  strict: debug,
  getters: {
    getTags: () => state.tags,
  }
})