'use client';
import styles from './Header.module.css';

const hotwords = [
  '最近热搜',
  '人生百忱',
  '弃长安',
  '一句顶一万句',
  '长安的荔枝',
];

export default function Header() {
  return (
    <div className={styles.headerBg}>
      <div className={styles.logoRow}>
        <img src="/logo.png" alt="logo" className={styles.logoImg} />
      </div>
      <div className={styles.searchRow}>
        <span className={styles.searchIcon}>
          <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="15" fill="#fff"/><path d="M21.5 21.5L18.5 18.5M19.5 15C19.5 17.4853 17.4853 19.5 15 19.5C12.5147 19.5 10.5 17.4853 10.5 15C10.5 12.5147 12.5147 10.5 15 10.5C17.4853 10.5 19.5 12.5147 19.5 15Z" stroke="#AEB3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <input className={styles.searchInput} placeholder="搜索" />
      </div>
      <div className={styles.hotwordsRow}>
        {hotwords.map((word, idx) => (
          <span key={word} className={styles.hotword + (idx === 0 ? ' ' + styles.hotwordActive : '')}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
} 