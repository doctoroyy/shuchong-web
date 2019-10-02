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
	fetchBookList({ commit }, payload) {
		return axios.post(bookApi.getBookList, payload).then((res) => {
			commit('setBookList', res.data);
			return res.data;
		});
	},
	searchBook(_, payload) {
		return axios.post(bookApi.searchBook, {
			keyword: payload
		}).then(res => {
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
	}
}

export default {
	state,
	mutations,
	getters,
	actions,
}