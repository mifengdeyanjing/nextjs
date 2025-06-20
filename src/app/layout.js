import './globals.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

export const metadata = {
  title: '我的应用中心',
  description: '一个包含我常用软件和工具的个人应用集合。',
  keywords: '应用, 工具, 软件集, Next.js, Portfolio',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: 'https://imgfamily.hh-medic.com/3000/20250620/7877c781c2a74bcf8357bebb57466547.jpeg',
  },
  openGraph: {
    title: '我的应用中心',
    description: '一个包含我常用软件和工具的个人应用集合。',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <ConfigProvider
          locale={zhCN}
          theme={{
            token: {
              colorPrimary: '#1677ff',
              borderRadius: 12,
              fontFamily: '-apple-system,BlinkMacSystemFont,\'Segoe UI\',\'PingFang SC\',\'Hiragino Sans GB\',\'Microsoft YaHei\',\'Helvetica Neue\',Helvetica,Arial,sans-serif',
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
} 