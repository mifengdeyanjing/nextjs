'use client';

import { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatWindow from './ChatWindow';
import styles from './ChatLayout.module.css';

export default function ChatLayout() {
  const [activeChatId, setActiveChatId] = useState(3); // 默认选中 "徐文静"

  return (
    <div className={styles.chatLayout}>
      <ChatSidebar 
        activeChatId={activeChatId} 
        onSelectChat={setActiveChatId} 
      />
      <ChatWindow 
        activeChatId={activeChatId} 
      />
    </div>
  );
} 