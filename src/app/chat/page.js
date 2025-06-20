import ChatLayout from './components/ChatLayout';
import styles from './chat.module.css';

export default function ChatPage() {
  return (
    <div className={styles.container}>
      <ChatLayout />
    </div>
  );
} 