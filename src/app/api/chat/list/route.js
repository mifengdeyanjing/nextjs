import { NextResponse } from 'next/server';

const chatList = [
  { id: 1, name: '爱妈妈', lastMessage: '[语音] 10"', timestamp: '昨天 20:52', unread: 1 },
  { id: 2, name: '颜末', lastMessage: '[图片]', timestamp: '星期三' },
  { id: 3, name: '徐文静', lastMessage: '现在就拿', timestamp: '10:33', active: true },
  { id: 4, name: '李前', lastMessage: '[动画表情]', timestamp: '10:28' },
  { id: 5, name: '【好惠省】5元干饭...', lastMessage: '发布员04: [小程序] 每天5元干饭...', timestamp: '10:24' },
  { id: 6, name: '天天神券福利君', lastMessage: '[小程序] 百元专属🧧吃美食～', timestamp: '10:14' },
  { id: 7, name: '公众号', lastMessage: '学习强国: 新华时评: 整治违规吃喝, ...', timestamp: '10:03' },
  { id: 8, name: '小象超市北京兰庄站福...', lastMessage: '小象福利官-周黑鸭: [图片]', timestamp: '10:02' },
  { id: 9, name: '服务号', lastMessage: '会员任我选: 苏超夏至狂欢, 10GB流...', timestamp: '09:54' },
];

export async function GET() {
  return NextResponse.json(chatList);
} 