import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // strict: true,
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
    books: '',
    chapters: [],
  },

  modules: {

  },
  mutations: {
    save_books(state, books) {
      state.books = books;
      // console.log('书籍：' + books[1].name);
    }
  },
  actions: {
    get_books(context) {

      let url = 'https://api.doctoroyy.cf/getAll';

      // console.log('invoked!');

      if (sessionStorage.getItem(url) !== null) {
        // console.log("使用缓存！");
        let data = JSON.parse(sessionStorage.getItem(url));
        // console.log(data);
        context.commit('save_books', data);
      } else {
        // console.log("使用网络请求！");
        axios
          .get(url)
          .then(response => {
            if (sessionStorage.getItem(url) === null) {
              console.log(typeof response.data);
              // console.log(response.data);

              sessionStorage.setItem(url, JSON.stringify(response.data) );
            }
            context.commit('save_books', response.data);
          })
          .catch(response => {
            console.log(response);
          });
      }

    }
  },
  strict: debug,
  getters: {
    getTags: state => { return state.tags },
    getBooks: state => { return state.books },
  }

})