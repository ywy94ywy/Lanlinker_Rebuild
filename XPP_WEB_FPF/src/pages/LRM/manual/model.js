import axios from 'axios';

export default {
  namespace: 'manual',
  state: {},
  effects: {
    *t1(_, { put, call }) {
      const res = yield axios.get(
        'https://nei.netease.com/api/apimock/20677609c2af996c88be2cd3244301ba/api/test',
      );
      yield put({ type: 't2', payload: res.data });
    },
  },
  reducers: {
    t2(state, { payload }) {
      return payload;
    },
  },
};
