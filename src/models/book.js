import { stringify } from 'querystring';
import { history } from 'umi';
import {
  getAllBooks,
  getChapter,
  getCatalog,
  searchBook,
  updateBook,
  downloadBook,
} from '@/services/book';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';

const Model = {
  namespace: 'book',
  state: {
    books: [],
    bookId: null,
    chapter: { name: '', context: [] },
    nextChapter: { name: '', context: [] },
    catalog: {
      bookInfo: {
        author: "",
        biqugePath: "",
        description: "",
        imgSrc: "",
        latestChapter: "",
        name: "",
        tags: null,
        updateTime: "",
      },
      chapters: [],
      searchResult: [],
    },
    keyword: "诛仙",

  },
  effects: {
    *fetchAllBooks({ payload }, { call, put }) {
      const response = yield call(getAllBooks, payload);
      if (!response) return;
      yield put({
        type: 'saveBooks',
        payload: response.data,
      })
    },
    *fetchCatalog({ payload }, { call, put }) {
      const response = yield call(getCatalog, payload);
      console.log(response.data)
      if (!response) return;
      yield put({
        type: 'saveCatalog',
        payload: response.data,
      })
    },
    *fetchChapter({ payload }, { call, put }) {
      const response = yield call(getChapter, payload);
      if (!response) return;
      yield put({
        type: 'saveChapter',
        payload: response,
      })
    },
    *fetchNextChapter({ payload }, { call, put }) {
      const response = yield call(getChapter, payload);
      if (!response) return;
      yield put({
        type: 'saveNextChapter',
        payload: response,
      })
    },
    *searchBook({ payload }, { call, put }) {
      const response = yield call(searchBook, payload);
      yield put({
        type: 'saveKeyword',
        payload,
      })
      if (!response) return false;
      yield put({
        type: 'saveSearchResult',
        payload: response,
      })
    },
    *downloadBook({ payload }, { call, put }) {
      const response = yield call(downloadBook, payload);
      if (!response) return;
    },
    *fetchBookId({ payload }, { call, put }) {
      const { bookId } = payload;
      yield put({
        type: 'saveBookId',
        payload: bookId,
      })
    }
  },
  reducers: {
    saveBooks(state, action) {
      return {
        ...state,
        books: action.payload,
      }
    },
    saveChapter(state, action) {
      return {
        ...state,
        chapter: action.payload,
      }
    },
    saveNextChapter(state, action) {
      return {
        ...state,
        nextChapter: action.payload,
      }
    },
    saveCatalog(state, action) {
      return {
        ...state,
        catalog: action.payload,
      }
    },
    saveSearchResult(state, action) {
      return {
        ...state,
        searchResult: Object.assign([], action.payload) ,
      }
    },
    saveBookId(state, action) {
      return {
        ...state,
        bookId: action.payload,
      }
    },
    saveKeyword(state, action) {
      return {
        ...state,
        keyword: action.payload,
      }
    }
  },
};
export default Model;
