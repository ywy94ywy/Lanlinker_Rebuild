import { getTable1 } from './server';

export default {
  namespace: 'card',
  state: {
    table1: {
      data: [],
      total: 0,
    },
  },
  effects: {
    *fetchTable1({ payload }, { call, put }) {
      const res = yield call(getTable1, payload);
      yield put({
        type: 'saveTable1',
        payload: res,
      });
    },
  },
  reducers: {
    saveTable1(state, { payload }) {
      return { ...state, table1: payload };
    },
  },
};
