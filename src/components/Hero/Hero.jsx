import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import XIcon from '../icons/XIcon';
import styles from './Hero.module.css';

const techBadges = [
  { label: 'Node.js', x: 15, y: 20, delay: 0 },
  { label: 'React', x: 78, y: 12, delay: 0.3 },
  { label: 'MCP', x: 85, y: 55, delay: 0.6 },
  { label: 'Rust', x: 72, y: 82, delay: 0.9 },
  { label: 'Python', x: 10, y: 75, delay: 1.2 },
  { label: 'AI', x: 50, y: 8, delay: 0.4 },
  { label: 'Web3', x: 20, y: 50, delay: 0.7 },
];

const codeLines = [
  { text: 'const goke = {', indent: 0 },
  { text: '  role: "Software Engineer",', indent: 1 },
  { text: '  domains: ["AI", "Fintech", "Web3"],', indent: 1 },
  { text: '  status: "Building...",', indent: 1 },
  { text: '};', indent: 0 },
];

const Hero = () => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* Ambient Background */}
      <div className={styles.ambientBg}>
        <div className={styles.noiseOverlay}></div>
        <div className={`${styles.gradientOrb} ${styles.orb1}`}></div>
        <div className={`${styles.gradientOrb} ${styles.orb2}`}></div>
        <div className={`${styles.gradientOrb} ${styles.orb3}`}></div>
      </div>

      <div className={styles.heroContainer}>
        {/* Left: Text Content */}
        <motion.div
          className={styles.textContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.statusBadge}>
            <span className={styles.statusDot}></span>
            Available for projects
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.headline}>
            I craft software
            <br />
            <span className={styles.gradientText}>that matters.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.description}>
            Software Engineer building across <strong>AI</strong>, <strong>fintech</strong>, and <strong>blockchain</strong>.
            Currently at Mono. Always shipping something new.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.ctaRow}>
            <a href="#work" className={styles.btnPrimary}>
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className={styles.btnGhost}>
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.socialRow}>
            <a href="https://github.com/goketech" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/modupe-akanni/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
            <a href="https://x.com/aka_goke" target="_blank" rel="noreferrer" aria-label="X"><XIcon size={20} /></a>
          </motion.div>
        </motion.div>

        {/* Right: Interactive Visual */}
        <motion.div
          className={styles.visualSide}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Floating Tech Badges */}
          {techBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className={styles.floatingBadge}
              style={{ left: `${badge.x}%`, top: `${badge.y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + badge.delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {badge.label}
            </motion.div>
          ))}

          {/* Terminal-esque Code Block */}
          <div className={styles.codeCard}>
            <div className={styles.codeCardHeader}>
              <div className={styles.windowDots}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <span className={styles.fileName}>goke.config.ts</span>
              <div></div>
            </div>
            <div className={styles.codeBody}>
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  className={styles.codeLine}
                  initial={{ opacity: 0, x: -10 }}
                  animate={i < currentLine ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <span className={styles.lineNumber}>{i + 1}</span>
                  <span className={styles.lineText}>{line.text}</span>
                </motion.div>
              ))}
              {currentLine >= codeLines.length && (
                <motion.div
                  className={styles.codeLine}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className={styles.lineNumber}>{codeLines.length + 1}</span>
                  <span className={`${styles.lineText} ${styles.cursorBlink}`}>▌</span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Avatar with glow */}
          <div className={styles.avatarContainer}>
            <div className={styles.avatarGlow}></div>
            <img src="/avatar.png" alt="Goke" className={styles.avatarImg} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
