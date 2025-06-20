'use client';
import { Result, Button } from 'antd';

export default function GlobalError({ error, reset }) {
  return (
    <Result
      status="500"
      title="出错了"
      subTitle={error?.message || '服务器发生错误，请稍后重试。'}
      extra={<Button type="primary" onClick={reset}>重试</Button>}
    />
  );
} 