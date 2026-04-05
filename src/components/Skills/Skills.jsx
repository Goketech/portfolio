import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    special: true,
    skills: ['MCP Servers', 'MCP Hubs', 'LLM Integration', 'AI Agents', 'AI Analytics', 'Prompt Engineering']
  },
  {
    title: 'Core Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Rust']
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'REST', 'GraphQL', 'WebSockets', 'Webhooks']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Blockchain & Web3',
    skills: ['Smart Contracts', 'Ethers.js', 'DeFi Protocols', 'IPFS', 'Token Standards']
  },
  {
    title: 'Fintech & Payments',
    skills: ['Open Banking APIs', 'Payment Rails', 'Bank Data Aggregation', 'KYC/AML']
  },
  {
    title: 'Infrastructure',
    skills: ['PostgreSQL', 'Redis', 'Docker', 'CI/CD', 'AWS', 'Vercel']
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git', 'Postman', 'Linear', 'Figma (Collab)']
  }
];

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>The Arsenal.</h2>
          <p className={styles.subtitle}>Languages, frameworks, and domains.</p>
        </motion.div>

        <div className={styles.categoriesGrid}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`${styles.categoryCard} ${category.special ? styles.specialCategory : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.tagCloud}>
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`${styles.pill} ${category.special ? styles.specialPill : ''}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
