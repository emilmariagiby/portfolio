import React from 'react';
import { motion } from 'framer-motion';
import { LuBriefcase as Briefcase } from 'react-icons/lu';

const Experience = () => {
  return (
    <section id="experience">
      <motion.h2 
        className="section-title gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
            <div style={{ 
              background: 'var(--accent-primary)', 
              padding: '1rem', 
              borderRadius: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Briefcase size={28} color="white" />
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Full-Stack Intern</h3>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>Eram Holdings</span>
              </div>
              <p style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                MERN Stack, AWS S3, XLSX, pdf-lib
              </p>
              
              <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>
                  Designed a multi-tenant authorization layer using JWT authentication and organization-scoped access control for corporate onboarding, compliance training, assessments, and employee certification, reducing manual training management by 40%.
                </li>
                <li>
                  Implemented JWT-based SSO, multi-tenant architecture, and role-based access control to securely support multiple organizations from a single platform.
                </li>
                <li>
                  Engineered a vector search pipeline using Retrieval-Augmented Generation and vector embeddings, enabling fast contextual retrieval across enterprise documentation.
                </li>
                <li>
                  Designed backend workflows for Learning Needs Analysis, supporting bulk Excel ingestion, automated quiz assignment, progress tracking, and real-time leaderboards.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
