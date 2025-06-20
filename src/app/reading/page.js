import { Suspense } from 'react';
import { Spin } from 'antd';

import Header from './components/Header';
import Footer from '../components/Footer';
import CategoryCard from './components/CategoryCard';
import RankingBoard from './components/RankingBoard';
import RecommendSection from './components/RecommendSection';
import { fetchRecommend, fetchCategories } from '../service/books';
import styles from './reading.module.css';

export default async function ReadingPage() {
  // 推荐区和分类区用Server Component数据
  const recommendData = await fetchRecommend(0);
  const categoriesData = await fetchCategories();

  return (
    <div className={styles.books}>
      <Header />
      <div className={styles.main}>
        {/* 推荐区 */}
        <RecommendSection books={recommendData.books} />

        {/* 榜单区 */}
        <Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <Spin size="large" />
          </div>
        }>
          <RankingBoard />
        </Suspense>

        {/* 分类区 */}
        <CategoryCard categories={categoriesData.categories} />
      </div>
      <Footer />
    </div>);
} 