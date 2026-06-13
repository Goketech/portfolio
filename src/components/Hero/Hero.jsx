import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import XIcon from '../icons/XIcon';
import styles from './Hero.module.css';

const focusAreas = [
  'Open banking infrastructure and APIs',
  'AI tooling and MCP server experiments',
  'Blockchain products and developer tooling'
];

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.gridPattern}></div>

      <div className={styles.heroContainer}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.eyebrow}>Software Engineer · Lagos, Nigeria</p>

          <h1 className={styles.headline}>Building dependable products for finance and AI teams.</h1>

          <p className={styles.description}>
            I work at Mono on open banking infrastructure used by businesses across Africa.
            Outside work, I build practical systems in AI and blockchain with a focus on speed,
            clarity, and production reliability.
          </p>

          <ul className={styles.focusList}>
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.ctaRow}>
            <a href="#work" className={styles.btnPrimary}>
              View Experience
            </a>
            <a href="#contact" className={styles.btnGhost}>
              Start a conversation
            </a>
          </div>

          <div className={styles.socialRow}>
            <span className={styles.socialLabel}>Find me on</span>
            <a href="https://github.com/goketech" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/modupe-akanni/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
            <a href="https://x.com/aka_goke" target="_blank" rel="noreferrer" aria-label="X"><XIcon size={20} /></a>
          </div>
        </motion.div>

        <motion.div
          className={styles.profilePanel}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.portraitWrap}>
            <img src="/avatar.png" alt="Goke" className={styles.avatarImg} />
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <span>Current Focus</span>
              <span className={styles.statusTag}>Open to select projects</span>
            </div>
            <p>
              Backend systems, API design, and practical AI integrations for product teams that value clean execution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
