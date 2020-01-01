import { getTable1, getTable2 } from './server';

export default {
  namespace: 'train',
  state: {
    table1: {},
    table2: {},
  },
  effects: {
    *fetchTable1({ payload }, { put, call }) {
      const res = yield call(getTable1, payload);
      yield put({
        type: 'saveTable1',
        payload: res,
      });
    },
    *fetchTable2({ payload }, { put, call }) {
      const res = yield call(getTable2, payload);
      yield put({
        type: 'saveTable2',
        payload: res,
      });
    },
  },
  reducers: {
    saveTable1(state, { payload }) {
      return { ...state, table1: payload };
    },
    saveTable2(state, { payload }) {
      return { ...state, table2: payload };
    },
  },
};
