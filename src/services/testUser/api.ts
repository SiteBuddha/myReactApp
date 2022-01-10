import { request } from 'umi';

export async function user(params: { current: number; pageSize: number }) {
  return request('/api/getUserList', {
    method: 'GET',
    data: {
      ...params,
    },
  });
}
