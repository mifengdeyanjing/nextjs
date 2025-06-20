'use client';

import { useEffect, useState } from 'react';
import styles from './ChatSidebar.module.css';
import Avatar from './Avatar';

export default function ChatSidebar({ activeChatId, onSelectChat }) {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/chat/list')
      .then(res => res.json())
      .then(data => {
        setChats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch chat list:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <input type="text" placeholder="搜索" className={styles.search} />
      </div>
      <div className={styles.chatList}>
        {loading ? (
          <div className={styles.loader}>加载中...</div>
        ) : (
          chats.map(chat => (
            <div 
              key={chat.id} 
              className={`${styles.chatItem} ${chat.id === activeChatId ? styles.active : ''}`}
              onClick={() => onSelectChat(chat.id)}
            >
              <Avatar name={chat.name} size={48} className={styles.avatar} />
              <div className={styles.chatInfo}>
                <div className={styles.chatName}>{chat.name}</div>
                <div className={styles.lastMessage}>{chat.lastMessage}</div>
              </div>
              <div className={styles.timestamp}>{chat.timestamp}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 