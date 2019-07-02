import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: true,
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
    // books: ''
  },

  modules: {

  },
  mutations: {
    save_books(state, books) {
      state.books = books;
      // console.log('书籍：' + books['info']);
    }
  },
  actions: {
    get_books(context) {
      axios
        .get("http://localhost:8000/catalog/1")
        .then(response => {
          context.commit('save_books', response.data);
        })
        .catch(response => {
          console.log(response);
        });
    }
  },
  strict: debug,
  getters: {
    getTags: state => {return state.tags},
    getBooks: state => {return state.books},
  }
  
})