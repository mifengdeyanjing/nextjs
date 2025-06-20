import { NextResponse } from 'next/server';

const categories = [
  { name: '精品小说', count: 25904,cover:'https://wfqqreader-1252317822.image.myqcloud.com/cover/839/40223839/t6_40223839.jpg' },
  { name: '历史', count: 29032,cover:'https://wfqqreader-1252317822.image.myqcloud.com/cover/839/40223839/t6_40223839.jpg' },
  { name: '文学', count: 43852,cover:'https://wfqqreader-1252317822.image.myqcloud.com/cover/839/40223839/t6_40223839.jpg' },
  { name: '艺术', count: 9250,cover:'https://wfqqreader-1252317822.image.myqcloud.com/cover/839/40223839/t6_40223839.jpg' },
  { name: '人物传记', count: 6517,cover:'https://wfqqreader-1252317822.image.myqcloud.com/cover/839/40223839/t6_40223839.jpg' },
  { name: '哲学宗教', count: 8044,cover:'https://wfqqreader-1252317822.image.myqcloud.com/cover/839/40223839/t6_40223839.jpg' },
  { name: '计算机', count: 1212,cover:'https://wfqqreader-1252317822.image.myqcloud.com/cover/839/40223839/t6_40223839.jpg' },
  { name: '心理', count: 4554,cover:'https://wfqqreader-1252317822.image.myqcloud.com/cover/839/40223839/t6_40223839.jpg' },
  { name: '社会文化', count: 22070,cover:'https://wfqqreader-1252317822.image.myqcloud.com/cover/839/40223839/t6_40223839.jpg' },
  { name: '个人成长', count: 14781,cover:'https://wfqqreader-1252317822.image.myqcloud.com/cover/839/40223839/t6_40223839.jpg' },
  { name: '经济理财', count: 2641,cover:'https://wfqqreader-1252317822.image.myqcloud.com/cover/839/40223839/t6_40223839.jpg' },
  { name: '政治军事', count: 1200,cover:'https://wfqqreader-1252317822.image.myqcloud.com/cover/839/40223839/t6_40223839.jpg' },
];

export async function GET() {
  return NextResponse.json({ categories });
} 