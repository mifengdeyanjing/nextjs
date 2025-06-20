'use client';
import { useEffect, useState } from 'react';
import { Card, Tabs, Tag, Space } from 'antd';

export default function RankingBoard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/ranking')
      .then(res => res.json())
      .then(res => {
        setData(res.ranking || []);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  const items = data.map(tab => ({
    key: tab.key,
    label: tab.label,
    children: (
      <Card variant="borderless" style={{ borderRadius: 12, background: '#fff', minHeight: 320 }}>
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          {tab.books.map((item, idx) => (
            <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Tag color={tab.color} style={{ fontSize: 16, width: 32, textAlign: 'center' }}>{idx + 1}</Tag>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }}>{item.title}</div>
                <div style={{ color: '#888', fontSize: 13 }}>{item.author}</div>
              </div>
              <span style={{ color: '#faad14', fontWeight: 500 }}>{item.percent}</span>
            </div>
          ))}
        </Space>
      </Card>
    )
  }));

  return (
    <Tabs defaultActiveKey={data[0]?.key} items={items} style={{ marginBottom: 32 }} />
  );
} 