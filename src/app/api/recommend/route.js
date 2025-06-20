import { NextResponse } from 'next/server';

const allBooks = [
  { title: '被讨厌的勇气', author: '岸见一郎', cover: 'https://cdn.weread.qq.com/weread/cover/91/cpplatform_aqylhezqdignvmpt74kp2b/t6_cpplatform_aqylhezqdignvmpt74kp2b1739183004.jpg' },
  { title: '明朝那些事儿', author: '当年明月', cover: 'https://cdn.weread.qq.com/weread/cover/91/cpplatform_aqylhezqdignvmpt74kp2b/t6_cpplatform_aqylhezqdignvmpt74kp2b1739183004.jpg' },
  { title: '认知觉醒', author: '周岭', cover: 'https://cdn.weread.qq.com/weread/cover/91/cpplatform_aqylhezqdignvmpt74kp2b/t6_cpplatform_aqylhezqdignvmpt74kp2b1739183004.jpg' },
  { title: '我即为剑', author: '余华', cover: 'https://cdn.weread.qq.com/weread/cover/91/cpplatform_aqylhezqdignvmpt74kp2b/t6_cpplatform_aqylhezqdignvmpt74kp2b1739183004.jpg' },
  { title: '活着', author: '余华', cover: 'https://cdn.weread.qq.com/weread/cover/91/cpplatform_aqylhezqdignvmpt74kp2b/t6_cpplatform_aqylhezqdignvmpt74kp2b1739183004.jpg' },
  { title: '百年孤独', author: '加西亚·马尔克斯', cover: 'https://cdn.weread.qq.com/weread/cover/91/cpplatform_aqylhezqdignvmpt74kp2b/t6_cpplatform_aqylhezqdignvmpt74kp2b1739183004.jpg' },
  { title: '人类简史', author: '尤瓦尔·赫拉利', cover: 'https://cdn.weread.qq.com/weread/cover/91/cpplatform_aqylhezqdignvmpt74kp2b/t6_cpplatform_aqylhezqdignvmpt74kp2b1739183004.jpg' },
  { title: '解忧杂货店', author: '东野圭吾', cover: 'https://cdn.weread.qq.com/weread/cover/91/cpplatform_aqylhezqdignvmpt74kp2b/t6_cpplatform_aqylhezqdignvmpt74kp2b1739183004.jpg' },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const batch = parseInt(searchParams.get('batch') || '0', 10);
  // 每批4本
  const start = (batch * 4) % allBooks.length;
  const books = allBooks.slice(start, start + 4);
  return NextResponse.json({ books });
} 