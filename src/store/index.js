import Vue from 'vue'
import Vuex from 'vuex'
import book from './book'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

const state = {
  tags: [
    "玄幻", "奇幻", "武侠", "仙侠",
    "都市", "现实", "军事", "历史",
    "游戏", "体育", "科幻", "悬疑灵异",
    "女生网", "轻小说"
  ],
};

export default new Vuex.Store({
  state,
  modules: [
    book,
  ],
  getters: {
    getTags: state => { return state.tags },
    getBooks: state => { return state.books },
  },
});
