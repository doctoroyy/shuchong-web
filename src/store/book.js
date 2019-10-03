import { book as bookApi } from '../api/index'
import axios from 'axios'
const state = {
	bookList: [],
	booksInfo: [],
	chapters: [],
	searchResult: null,
}

const mutations = {
	setBookList(state, { data }) {
		state.bookList = data;
	},
	setBookInfo(state, { data }) {
		state.bookInfo = data;
	},
	setCatalog(state, { data }) {
		state.chapters.push(data);
	},
	setSearchResult(state, { data }) {
		state.searchResult = data;
	}
}

const actions = {
	fetchBookList({ commit }, payload) {
		return axios.post(bookApi.getBookList, payload).then((res) => {
			commit('setBookList', res.data);
			return res.data;
		});
	},
	searchBook({ commit }, payload) {
		return axios.post(bookApi.searchBook, {
			keyword: payload
		}).then(res => {
			commit('setSearchResult', res);
			return res;
		});
	},
	fetchBookCatalog(_, id) {
		return axios.get(`${bookApi.getBookCatalog}?id=${id}`).then(res=> {
			return res.data;
		});
	},
	fetchChapter(_, payload) {
		return axios.post(bookApi.getChapter, payload).then(res=> {
			return res;
		});
	}
}

const getters = {
	getBookList(state) {
		return state.bookList;
	},
	getBookById(state, id) {
		const books = state.bookList;
		const arr = books.filter(item => item.name === id);
		return arr[0];
	},
	getSearchResult(state) {
		return state.searchResult;
	}
}

export default {
	state,
	mutations,
	getters,
	actions,
}