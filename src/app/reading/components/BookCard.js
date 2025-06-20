import styles from './BookCard.module.css';

export default function BookCard({ book }) {
  return (
    <div className={styles.card}>
      <img src={book.cover} alt={book.title} className={styles.cover} />
      <div className={styles.title}>{book.title}</div>
      <div className={styles.author}>{book.author}</div>
      <div className={styles.sub}>{book.sub || '大家都在读'}</div>
    </div>
  );
} 