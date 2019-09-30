import { book as bookApi } from '../api/index'
import axios from 'axios'
const state = {
	bookList: [],
	booksInfo: [],
	chapters: [],
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
	}
}

const actions = {
	fetchBookList({ commit }) {
		return axios.get(bookApi.getBookList).then((res) => {
			commit('setBookList', res);
			return res.data;
		});
	},
	fetchBookCatalog(_, payload) {
		return axios.post(bookApi.getBookCatalog, {
			params: payload
		});
	},
	fetchChapter(_, payload) {
		return axios.post(bookApi.getChapter, {
			params: payload
		});
	}
}

const getters = {
	getBookList(state) {
		return state.bookList;
	}
}

export default {
	state,
	mutations,
	getters,
	actions,
}