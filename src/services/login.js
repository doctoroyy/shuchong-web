import request from '@/utils/request';

export async function accountLogin(params) {
  return request('/book/login', {
    method: 'POST',
    data: params,
  });
}
export async function register(params) {
  return request('/book/register', {
    method: 'POST',
    data: params,
  });}
