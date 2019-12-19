import axios from '@/utils/request';

export async function query() {
  return axios.get('/users');
}
export async function queryCurrent() {
  return axios.get('/currentUser');
}
export async function queryNotices() {
  return axios.get('/notices');
}
export async function queryUserInfo() {
  return axios.post('/userInfo');
}
