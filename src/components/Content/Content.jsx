import React from 'react';
import { motion } from 'framer-motion';
import XIcon from '../icons/XIcon';
import styles from './Content.module.css';

const Content = () => {
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
          <h2 className={styles.title}>I'm starting to write.</h2>
          <p className={styles.subtitle}>
            About engineering at scale, open banking, fintech infrastructure, and what it takes to build payments in Africa.
          </p>
        </motion.div>

        <div className={styles.articlesGrid}>
          {/* Skeletons */}
          {[1, 2, 3].map((item, i) => (
            <motion.div
              key={item}
              className={styles.skeletonCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.comingSoonBadge}>Coming Soon</div>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonLineLarge}></div>
              <div className={styles.skeletonLineSmall}></div>
            </motion.div>
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
