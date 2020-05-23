import request from '@/utils/request';
import { stringify } from 'qs';
import { apiParamsAdaptive } from '@/utils/utils'


// /book/getAll 获取小说列表
export async function getAllBooks(params) {
  // console.log(stringify(params))
  return request(`/book/getAll?${(stringify(params))}`);
}

// /book/catalog 获取小说目录详情
export async function getCatalog(params) {
  return request(`/book/catalog?${(stringify(params))}`)
}

// /book/chapter 获取小说章节详情
export async function getChapter(params) {
  return request(`/book/chapter?${(stringify(params))}`)
}

// /book/search 搜索小说
export async function searchBook(params) {
  return request(`/book/search?${(stringify(params))}`)
}

// /book/download 下载小说
export async function downloadBook(params) {
  return request(`/book/download?${(stringify(params))}`)
}

// /book/update 更新小说
export async function updateBook(params) {
  return request(`/book/update?${(stringify(params))}`)
}
