import { NextResponse } from 'next/server';

const messagesData = {
  '1': {
    name: '爱妈妈',
    messages: [
      { id: 1, sender: '爱妈妈', content: '晚上回家吃饭吗？' },
      { id: 2, sender: 'me', content: '回，我大概7点到家。' },
      { id: 3, sender: '爱妈妈', content: '好，我准备你爱吃的红烧肉。' },
    ],
  },
  '2': {
    name: '颜末',
    messages: [{ id: 1, type: 'system', content: '你们已经是好友了，开始聊天吧' }],
  },
  '3': {
    name: '徐文静',
    messages: [
      { id: 1, type: 'system', content: '你们已经是好友了，开始聊天吧' },
      { id: 2, sender: '徐文静', content: '在吗？上次说的文件发我一下。' },
      { id: 3, sender: 'me', content: '稍等，我找一下。' },
      { id: 4, sender: '徐文静', content: '现在就拿' },
    ],
  },
  '4': {
    name: '李前',
    messages: [{ id: 1, type: 'system', content: '你们已经是好友了，开始聊天吧' }],
  },
  '5': {
    name: '【好惠省】5元干饭 411群 (185)',
    messages: [
      { id: 1, type: 'system', content: '①领18元大红包 (不下单)\n👉https://baudt.cn/15fuGC\n⬇️领完勿下单, 继续领\n\n②领店铺叠加红包 (下单)\n👉https://baudt.cn/15fuGG\n🔵先领①再领②叠加使用' },
      { id: 2, sender: '好惠省食堂 plus', content: '每天5元干饭, 今日已上新🔥', isApp: true, appContent: '5元请你吃外卖' }
    ]
  },
  '6': {
    name: '天天神券福利君',
    messages: [{ id: 1, type: 'system', content: '你关注了该服务号' }],
  },
  '7': {
    name: '公众号',
    messages: [{ id: 1, type: 'system', content: '你关注了该公众号' }],
  },
  '8': {
    name: '小象超市北京兰庄站福...',
    messages: [{ id: 1, type: 'system', content: '你已加入群聊' }],
  },
  '9': {
    name: '服务号',
    messages: [{ id: 1, type: 'system', content: '你关注了该服务号' }],
  },
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (!id || !messagesData[id]) {
    return NextResponse.json({ error: 'Chat not found' }, { status: 404 });
  }
  
  return NextResponse.json(messagesData[id]);
} 