import { fetchAPI } from '../utils/api';

// 获取推荐书籍数据
export async function fetchRecommend(batch = 0) {
  return fetchAPI(`/api/recommend?batch=${batch}`);
}

// 获取分类数据
export async function fetchCategories() {
  return fetchAPI('/api/categories');
} 