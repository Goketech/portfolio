import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

const projects = [
  {
    id: 'mcp-server',
    title: 'MCP Server Hub',
    description: 'An open-source MCP (Model Context Protocol) server enabling AI agents to interact with external tools and data sources. Built for extensibility and developer experience.',
    tags: ['Python', 'MCP', 'AI Agents', 'TypeScript'],
    github: '#',
    live: '#',
    isPrimary: true
  },
  {
    id: 'defi-dashboard',
    title: 'DeFi Portfolio Tracker',
    description: 'A real-time dashboard for tracking DeFi positions, token balances, and yield farming returns across multiple chains.',
    tags: ['React', 'Ethers.js', 'Solidity', 'Next.js'],
    github: '#',
    live: '#',
    isPrimary: false
  },
  {
    id: 'fintech-api',
    title: 'Payment Integration SDK',
    description: 'A developer-friendly SDK abstracting complex banking API integrations into a clean, unified interface for fintech applications.',
    tags: ['Node.js', 'TypeScript', 'REST APIs', 'Redis'],
    github: '#',
    live: null,
    isPrimary: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Featured Projects.</h2>
          <p className={styles.subtitle}>Selected works across AI, blockchain, and fintech.</p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className={`${styles.card} ${project.isPrimary ? styles.primaryCard : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {project.isPrimary && (
                <div className={styles.abstractGraphic}>
                   <div className={styles.flowDiagram}>
                     <div className={styles.flowNode}>AI Agent</div>
                     <div className={styles.flowArrow}>⇄</div>
                     <div className={styles.flowNode}>MCP Server</div>
                     <div className={styles.flowArrow}>⇄</div>
                     <div className={styles.flowNode}>Tools & Data</div>
                   </div>
                </div>
              )}
              
              <div className={styles.cardContent}>
                <div className={styles.tagsContainer}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                
                <div className={styles.cardFooter}>
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <FiGithub size={20} />
                    </a>
                  ) : (
                    <span className={styles.proprietary}>Proprietary</span>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
