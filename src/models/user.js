import { queryCurrent, query as queryUsers } from '@/services/user';

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = localStorage.getItem('username');
      yield put({
        type: 'saveCurrentUser',
        payload: {
          username: response
        },
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { 
        ...state, 
        currentUser: action.payload || {} 
      };
    },
  },
};
export default UserModel;
