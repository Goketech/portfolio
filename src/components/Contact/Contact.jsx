import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import XIcon from '../icons/XIcon';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.lineDecor}></div>

          <h2 className={styles.title}>Let's build something.</h2>
          <p className={styles.subtitle}>
            I'm available for freelance projects, consulting, and interesting engineering conversations. Whether it's AI tooling, blockchain development, fintech infrastructure, or something entirely new, let's talk.
          </p>

          <a href="mailto:modupe775@gmail.com" className={styles.emailCta}>
            Say Hello
          </a>

          <div className={styles.socialLinks}>
            <a href="https://github.com/goketech" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/modupe-akanni/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="https://x.com/aka_goke" target="_blank" rel="noreferrer" aria-label="X">
              <XIcon size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
