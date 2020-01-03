import { book as bookApi } from '../api/index'
import axios from 'axios'

const state = {
	bookList: [],
	booksInfo: [],
	catalog: null,
	searchResult: null,
	chapter: null,
	chapterNext: null,
	pageInfo: {
		page: 1,
		pageSize: 10,
		pageCount: 1,
	},
	overlay: false,
}

const mutations = {
	setOverlay(state, value) {
		state.overlay = value;
	},
	setBookList(state, { data }) {
		state.bookList = data;
	},
	setBookInfo(state, { data }) {
		state.bookInfo = data;
	},
	setCatalog(state, { data }) {
		state.catalog = data;
	},
	setSearchResult(state, { data }) {
		state.searchResult = data;
	},
	setChapter(state, { data }) {
		state.chapter = data;
	},
	setPageInfo(state, { page, pageCount, pageSize }) {
		state.pageInfo = {
			page,
			pageCount,
			pageSize,
		}
	}
}

const actions = {
	fetchBookList({ commit }, payload) {
		return axios.get(bookApi.getBookList, {
			params: payload,
		}).then((res) => {
			commit('setBookList', res.data);
			commit('setPageInfo', res.data);
			return res.data;
		});
	},
	searchBook({ commit }, payload) {
		return axios.get(bookApi.searchBook, {
			params: { keyword: payload }
		}).then(res => {
			commit('setSearchResult', res);
			return res;
		});
	},
	fetchBookCatalog({ commit }, id) {
		return axios.get(`${bookApi.getBookCatalog}?id=${id}`).then(res => {
			commit('setCatalog', res.data);
			return res.data;
		});
	},
	fetchChapter({ commit }, payload) {
		return axios.get(bookApi.getChapter, {
			params: payload
		}).then(res => {
			commit('setChapter', res);
			return res;
		});
	},
	downloadBook(_, path) {
		return axios.get(`${bookApi.download}?id=${path}`).then(res => {
			return res;
		})
	},
	updatePageInfo({ commit }, payload) {
		commit('setPageInfo', payload);
	}
}

const getters = {
	getOverlay(state) {
		return state.overlay;
	},
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
	},
	getChapter(state) {
		return state.chapter;
	},
	getCatalog(state) {
		return state.catalog;
	},
	getPageInfo(state) {
		return state.pageInfo;
	}
}

export default {
	state,
	mutations,
	getters,
	actions,
}