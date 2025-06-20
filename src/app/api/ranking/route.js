import { NextResponse } from 'next/server';

const rankingData = [
  {
    key: 'rise',
    label: 'TOP50 · 飙升榜',
    color: '#ff69b4',
    books: [
      { title: '我不想长大的生活', author: '小红', percent: '97.1%' },
      { title: '好好研究', author: '李雷', percent: '94.1%' },
      { title: '莫明的私家菜记', author: '王五', percent: '90.6%' },
      { title: '伤口鱼合中', author: '阿兵', percent: '88.6%' },
      { title: '最南端（长恨忆）', author: '小明', percent: '91.3%' },
    ],
  },
  {
    key: 'new',
    label: 'TOP50 · 新书榜',
    color: '#ffa500',
    books: [
      { title: '夜留女孩', author: '张三', percent: '77.6%' },
      { title: '遥远多', author: '李四', percent: '93.5%' },
      { title: '财经', author: '王五', percent: '87.5%' },
      { title: '如何假期阅读和拥抱', author: '赵六', percent: '85.6%' },
      { title: '我喜欢这样的自己', author: '小美', percent: '89.7%' },
    ],
  },
  {
    key: 'total',
    label: 'TOP200 · 总榜',
    color: '#00bfff',
    books: [
      { title: '安的玫瑰', author: '安妮', percent: '99.0%' },
      { title: '三体全集', author: '刘慈欣', percent: '98.3%' },
      { title: '明朝那些事儿', author: '当年明月', percent: '92.3%' },
      { title: '活着', author: '余华', percent: '92.0%' },
      { title: '平凡的世界', author: '路遥', percent: '91.6%' },
    ],
  },
  {
    key: 'author',
    label: '作家榜',
    color: '#ffd700',
    books: [
      { title: '我在微信读书', author: '张桂梅', percent: '97.4%' },
      { title: '张桂梅', author: '张桂梅', percent: '97.4%' },
      { title: '奶奶的星星', author: '经典员', percent: '96.2%' },
      { title: '乡土中国', author: '费孝通', percent: '93.7%' },
      { title: '人生海海东东坡', author: '曾国藩', percent: '92.7%' },
    ],
  },
];

export async function GET() {
  return NextResponse.json({ ranking: rankingData });
} 