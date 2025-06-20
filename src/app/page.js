import Link from 'next/link';
import styles from './home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Project Showcase</h1>
      <p className={styles.description}>
        Explore the applications I've built.
      </p>
      <div className={styles.grid}>
        <Link href="/reading" className={styles.card}>
          <h2>📚 WeRead App</h2>
          <p>A clone of the WeRead application interface, focusing on books and reading stats.</p>
        </Link>
        <Link href="/chat" className={styles.card}>
          <h2>💬 WeChat App</h2>
          <p>A clone of the WeChat application interface, with a real-time chat UI.</p>
        </Link>
      </div>
    </div>
  );
}