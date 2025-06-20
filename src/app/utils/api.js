import { headers } from 'next/headers';

// 统一的API请求工具函数
export async function fetchAPI(endpoint, options = {}) {
  try {
    const host = headers().get('host');
    const protocol = host?.startsWith('localhost') ? 'http' : 'https';
    const url = `${protocol}://${host}${endpoint}`;
    
    const res = await fetch(url, {
      cache: 'no-store',
      ...options
    });
    
    if (!res.ok) {
      throw new Error(`API request failed: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}