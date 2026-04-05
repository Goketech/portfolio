import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import XIcon from '../icons/XIcon';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainRow}>
          <div className={styles.brand}>
            goke. &copy; {new Date().getFullYear()}
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/goketech" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/modupe-akanni" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="https://x.com/aka_goke" target="_blank" rel="noreferrer" aria-label="X">
              <XIcon size={20} />
            </a>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.credits}>
            Designed &amp; built by Goke
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
