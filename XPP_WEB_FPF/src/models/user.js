// import { queryCurrent, query as queryUsers } from '@/services/user';
import { queryUserInfo } from '@/services/user';

const UserModel = {
  namespace: 'user',
  state: {
    menu: [],
    userInfo: {},
    notifications: [],
    prompts: [],
    currentUser: {},
  },
  effects: {
    *fetchUserInfo(_, { call, put }) {
      const res = yield call(queryUserInfo);

      yield put({
        type: 'saveUserInfo',
        payload: res,
      });
    },
    *clearNotifications(_, { call, put }) {
      const res = [];
      yield put({
        type: 'saveNotifications',
        payload: res,
      });
    },
    *clearPrompts(_, { call, put }) {
      const res = [];
      yield put({
        type: 'savePrompts',
        payload: res,
      });
    },
    // *fetch(_, { call, put }) {
    //   const response = yield call(queryUsers);
    //   yield put({
    //     type: 'save',
    //     payload: response,
    //   });
    // },

    // *fetchCurrent(_, { call, put }) {
    //   const response = yield call(queryCurrent);
    //   yield put({
    //     type: 'saveCurrentUser',
    //     payload: response,
    //   });
    // },
  },
  reducers: {
    saveUserInfo(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    saveNotifications(state, { payload }) {
      return { ...state, notifications: payload };
    },
    savePrompts(state, { payload }) {
      return { ...state, prompts: payload };
    },

    fakeReadNotification(state, { payload }) {
      const res = [...state.notifications];
      res[payload].readed = true;
      return { ...state, notifications: res };
    },
    fakeReadPrompt(state, { payload }) {
      const res = [...state.prompts];
      res[payload].readed = true;
      return { ...state, prompts: res };
    },
    // saveCurrentUser(state, action) {
    //   return { ...state, currentUser: action.payload || {} };
    // },
    // changeNotifyCount(
    //   state = {
    //     currentUser: {},
    //   },
    //   action,
    // ) {
    //   return {
    //     ...state,
    //     currentUser: {
    //       ...state.currentUser,
    //       notifyCount: action.payload.totalCount,
    //       unreadCount: action.payload.unreadCount,
    //     },
    //   };
    // },
  },
};
export default UserModel;
