'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './ChatWindow.module.css';
import Avatar from './Avatar';

const Message = ({ msg }) => {
  if (msg.type === 'system') {
    return <div className={styles.systemMessage}>{msg.content}</div>;
  }

  const isMyMessage = msg.sender === 'me';

  return (
    <div className={`${styles.messageRow} ${isMyMessage ? styles.myMessageRow : styles.otherMessageRow}`}>
      {!isMyMessage && <Avatar name={msg.sender} size={40} />}
      <div className={styles.messageContent}>
        {!isMyMessage && <div className={styles.userName}>{msg.sender}</div>}
        <div className={`${styles.messageBubble} ${isMyMessage ? styles.myMessageBubble : styles.otherMessageBubble}`}>
          {msg.content}
        </div>
      </div>
      {isMyMessage && <Avatar name="Me" size={40} />}
    </div>
  );
};

export default function ChatWindow({ activeChatId }) {
  const [chat, setChat] = useState(null);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (activeChatId) {
      setLoading(true);
      fetch(`/api/chat/messages?id=${activeChatId}`)
        .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch'))
        .then(data => setChat(data))
        .catch(err => {
          console.error(`Failed to fetch chat (id: ${activeChatId}):`, err);
          setChat(null);
        })
        .finally(() => setLoading(false));
    }
  }, [activeChatId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat?.messages]);

  if (!activeChatId) {
    return (
      <div className={styles.chatWindow}>
        <div className={styles.noChatSelected}>
          <p>请从左侧选择一个对话</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.chatWindow}>
      <div className={styles.header}>
        <div className={styles.chatTitle}>{loading ? '加载中...' : chat?.name}</div>
        <div className={styles.actions}>···</div>
      </div>

      <div className={styles.messageList}>
        {loading ? (
          <div className={styles.loader}>加载消息...</div>
        ) : (
          chat?.messages.map((msg) => <Message key={msg.id} msg={msg} />)
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputArea}>
        <input type="text" className={styles.textInput} placeholder="输入消息..." />
        <button className={styles.sendButton}>发送</button>
      </div>
    </div>
  );
} 