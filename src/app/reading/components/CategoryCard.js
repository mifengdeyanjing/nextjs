import { Row, Col } from 'antd';
import styles from './CategoryCard.module.css';

export default function CategoryCard({ categories }) {
  return (
    <div>
      <h5 className={styles.sectionTitle}>分类</h5>
      <Row gutter={[24, 24]}>
        {categories.map(cat => (
          <Col xs={24} sm={12} md={8} lg={6} key={cat.name}>
            <div className={styles.categoryCard}>
              <img
                src={cat.cover}
                alt={cat.name}
                className={styles.categoryImage}
              />
              <div className={styles.categoryInfo}>
                <div className={styles.categoryName}>
                  {cat.name}
                </div>
                <div className={styles.categoryCount}>{cat.count} 本书籍</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
} 