import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'C', 'C++', 'SQL'],
    color: 'var(--accent-primary)'
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'JWT Authentication', 'RBAC', 'Multi-Tenant Architecture'],
    color: 'var(--accent-secondary)'
  },
  {
    category: 'AI / ML',
    skills: ['Retrieval-Augmented Generation (RAG)', 'Vector Embeddings', 'XGBoost', 'SHAP', 'OpenCV', 'PyTorch', 'Whisper', 'Scikit-Learn', 'Pandas', 'Numpy', 'FAISS', 'NetworkX'],
    color: 'var(--accent-tertiary)'
  },
  {
    category: 'Databases & Cloud',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Vector Databases', 'AWS S3', 'Git/GitHub', 'Vercel', 'Render', 'Postman'],
    color: '#10b981' // Emerald
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS', 'GSAP', 'Framer Motion'],
    color: '#f59e0b' // Amber
  },
  {
    category: 'Core CS & Testing',
    skills: ['OOP', 'Data Structures & Algorithms', 'Dynamic Programming', 'API Testing', 'E2E Testing', 'Performance Benchmarking'],
    color: '#3b82f6' // Blue
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <motion.h2 
        className="section-title gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>

      <div className="grid-cols-2" style={{ gap: '1.5rem' }}>
        {skillCategories.map((group, idx) => (
          <motion.div 
            key={idx}
            className="glass-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            style={{ padding: '1.5rem' }}
          >
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: group.color, 
              marginBottom: '1rem',
              borderBottom: `1px solid ${group.color}33`,
              paddingBottom: '0.5rem'
            }}>
              {group.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {group.skills.map((skill, i) => (
                <span 
                  key={i} 
                  style={{
                    background: '#000',
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '0',
                    fontSize: '0.85rem',
                    color: 'var(--text-main)',
                    transition: 'all 0.1s',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = group.color;
                    e.currentTarget.style.color = '#000';
                    e.currentTarget.style.borderColor = group.color;
                    e.currentTarget.style.transform = 'translate(-2px, -2px)';
                    e.currentTarget.style.boxShadow = `2px 2px 0px 0px rgba(255,255,255,0.8)`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#000';
                    e.currentTarget.style.color = 'var(--text-main)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.transform = 'translate(0, 0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
