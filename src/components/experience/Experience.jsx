import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    id: 'mono',
    role: 'Software Engineer',
    company: 'Mono',
    badge: 'Current · Fintech · Lagos',
    primaryCard: true,
    featuredProject: {
      title: 'Open Banking Infrastructure',
      description: 'Building and maintaining core APIs and services that power financial data access for businesses across Africa. Contributing to payment integrations, webhook systems, and developer-facing tooling.',
      tags: ['Node.js', 'REST APIs', 'Webhooks', 'MongoDB', 'Redis'],
      status: '🟢 Active'
    },
    responsibilities: [
      'Engineer backend services handling high-throughput API traffic for financial data aggregation.',
      'Build and optimize payment integration flows across multiple banking partners.',
      'Design webhook delivery systems with retry logic and guaranteed delivery.',
      'Collaborate with cross-functional teams to ship developer-facing features.'
    ]
  },
  {
    id: 'ai-projects',
    role: 'Independent Engineer',
    company: 'AI / MCP Ecosystem',
    badge: 'Ongoing · AI · Open Source',
    primaryCard: false,
    featuredProject: {
      title: 'MCP Servers & AI Tooling',
      description: 'Building MCP (Model Context Protocol) servers, AI analytics pipelines, and developer tools at the intersection of LLMs and software engineering.',
      tags: ['Python', 'MCP', 'LLMs', 'TypeScript', 'AI Agents'],
    },
    responsibilities: [
      'Developing MCP servers and contributing to the MCP hub ecosystem.',
      'Building AI-powered analytics and automation tools.',
      'Exploring agent-based architectures for developer productivity.',
    ]
  },
  {
    id: 'blockchain',
    role: 'Blockchain Developer',
    company: 'Web3 Projects',
    badge: 'Ongoing · Blockchain · DeFi',
    primaryCard: false,
    featuredProject: {
      title: 'Smart Contracts & Decentralized Apps',
      description: 'Designing and deploying smart contracts, building decentralized application frontends, and exploring DeFi protocol integrations.',
      tags: ['Solidity', 'Ethers.js', 'React', 'IPFS'],
    },
    responsibilities: [
      'Writing and auditing Solidity smart contracts for token and DeFi use cases.',
      'Building Web3-connected frontends with wallet integration.',
    ]
  }
];

const Experience = () => {
  return (
    <section id="work" className={styles.experienceSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Engineering Timeline.</h2>
          <p className={styles.subtitle}>Where I've been building.</p>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.leftSide : styles.rightSide}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className={styles.node}>
                <Briefcase size={18} />
              </div>

              <div className={`${styles.card} ${exp.primaryCard ? styles.primaryCard : ''}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.roleHeader}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <span className={styles.company}>@ {exp.company}</span>
                  </div>
                  <span className={styles.badge}>{exp.badge}</span>
                </div>

                <div className={styles.projectSection}>
                  <div className={styles.projectHeader}>
                    <h4 className={styles.projectTitle}>{exp.featuredProject.title}</h4>
                    {exp.featuredProject.status && (
                      <span className={styles.statusBadge}>{exp.featuredProject.status}</span>
                    )}
                  </div>
                  <p className={styles.projectDesc}>{exp.featuredProject.description}</p>

                  <div className={styles.tags}>
                    {exp.featuredProject.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;