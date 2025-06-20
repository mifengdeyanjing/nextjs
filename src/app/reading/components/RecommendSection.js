import BookCard from './BookCard';
import styles from './RecommendSection.module.css';

export default function RecommendSection({ books, onChange }) {
  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <div>
          <span className={styles.title}>大家都在看</span>
          <span className={styles.change} onClick={onChange}>换一批</span>
        </div>
        <div className={styles.rightLinks}>
          <a className={styles.link} href="#">传书到手机</a>
          <span className={styles.sep}>|</span>
          <a className={styles.link} href="#">登录</a>
        </div>
      </div>
      <div className={styles.cardsRow}>
        {books.map(book => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </section>
  );
}
