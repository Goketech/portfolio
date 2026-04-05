import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Brain, Blocks, Server } from 'lucide-react';
import styles from './Stats.module.css';

const statsData = [
  {
    icon: <Globe size={24} />,
    label: "Full-Stack Engineering",
    description: "End to End",
  },
  {
    icon: <Brain size={24} />,
    label: "AI · MCP Servers · Analytics",
    description: "Frontier Tech",
  },
  {
    icon: <Blocks size={24} />,
    label: "Blockchain · Web3",
    description: "Decentralized",
  },
  {
    icon: <Server size={24} />,
    label: "Fintech · Open Banking",
    description: "Infrastructure",
  },
];

const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {statsData.map((stat, index) => (
            <motion.div key={index} className={styles.card} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                {stat.icon}
              </div>
              <div className={styles.content}>
                <h3 className={styles.label}>{stat.label}</h3>
                <p className={styles.description}>{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
