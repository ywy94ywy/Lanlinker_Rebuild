import axios from '@/utils/request';

export async function fakeAccountLogin(params) {
  return axios.get('/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile) {
  return axios.get(`/login/captcha?mobile=${mobile}`);
}
