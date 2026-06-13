import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Globe, Link2, Wrench } from 'lucide-react';
import styles from './About.module.css';

const facts = [
  { icon: Globe, text: 'Remote, Global' },
  { icon: Bot, text: 'AI & MCP' },
  { icon: Link2, text: 'Web3 builder' },
  { icon: Wrench, text: 'Always shipping' }
];

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          
          {/* Left Side: Bio */}
          <motion.div 
            className={styles.bioContainer}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>The Human.</h2>
            
            <div className={styles.prose}>
              <p className={styles.highlight}>
                I'm Goke, a software engineer who builds across industries and technologies.
              </p>
              <p>
                I currently work at Mono where I contribute to open banking infrastructure serving businesses across Africa. But my engineering life extends far beyond any single role.
              </p>
              <p>
                I'm deeply invested in the AI ecosystem, building MCP servers, exploring agent architectures, and developing AI-powered analytics tools. I also work with blockchain technologies, writing smart contracts and building decentralized applications.
              </p>
              <p>
                My engineering philosophy is simple: solve hard problems, ship fast, and never stop learning. Whether it's fintech APIs, LLM integrations, or DeFi protocols, I build whatever excites me.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Photo and Facts */}
          <motion.div 
            className={styles.visualContainer}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Avatar */}
            <div className={styles.photoWrapper}>
              <div className={styles.photoPlaceholder}>
                <img src="/avatar.png" alt="Goke" className={styles.avatarImage} />
              </div>
              <div className={styles.photoDecor}></div>
            </div>

            {/* Fun Facts Grid */}
            <div className={styles.factsGrid}>
              {facts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <div className={styles.factCard} key={fact.text}>
                    <span className={styles.factIcon} aria-hidden="true">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <span className={styles.factText}>{fact.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
