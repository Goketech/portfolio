import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import XIcon from '../icons/XIcon';
import styles from './Content.module.css';

const DEVTO_USERNAME = 'goke';
const MAX_ARTICLES = 6;

const Content = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=${MAX_ARTICLES}`
        );
        setArticles(response.data || []);
      } catch (fetchError) {
        console.error('Error fetching articles from Dev.to:', fetchError);
        setError('Unable to load articles right now. Please check back soon.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section id="writing" className={styles.contentSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Recent writing.</h2>
          <p className={styles.subtitle}>
            Notes on engineering systems, fintech infrastructure, and practical lessons from shipping products.
          </p>
        </motion.div>

        <div className={styles.articlesGrid}>
          {loading &&
            [1, 2, 3].map((item, i) => (
              <motion.div
                key={item}
                className={styles.skeletonCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={styles.comingSoonBadge}>Loading</div>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonLineLarge}></div>
                <div className={styles.skeletonLineSmall}></div>
              </motion.div>
            ))}

          {!loading && error && <p className={styles.feedbackText}>{error}</p>}

          {!loading && !error && articles.length === 0 && (
            <p className={styles.feedbackText}>No articles found yet on Dev.to.</p>
          )}

          {!loading &&
            !error &&
            articles.map((article, index) => (
              <motion.article
                key={article.id}
                className={styles.articleCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                {article.cover_image ? (
                  <img
                    className={styles.articleImage}
                    src={article.cover_image}
                    alt={article.title}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.articleImageFallback}>Dev.to</div>
                )}

                <div className={styles.articleBody}>
                  <p className={styles.metaRow}>
                    {new Date(article.published_at).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                    <span aria-hidden="true">•</span>
                    {article.reading_time_minutes} min read
                  </p>

                  <h3 className={styles.articleTitle}>{article.title}</h3>

                  {article.description && (
                    <p className={styles.articleDescription}>{article.description}</p>
                  )}

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={article.url}
                    className={styles.readLink}
                  >
                    Read article
                  </a>
                </div>
              </motion.article>
            ))}
        </div>

        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a href="https://x.com/aka_goke" target="_blank" rel="noreferrer" className={styles.subscribeBtn}>
            <span>Follow for updates</span>
            <XIcon size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Content;
