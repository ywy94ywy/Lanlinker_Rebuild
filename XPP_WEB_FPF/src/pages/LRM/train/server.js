import request from '@/utils/request';

export async function getTable1(params) {
  return request.post(`/table`, params);
}

export async function getTable2(params) {
  return request.post(`/table`, params);
}
