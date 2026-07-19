import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    { 
      year: '2024 - 2028', 
      title: 'B.Tech Computer Science', 
      subtitle: 'Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat', 
      role: 'Undergraduate' 
    },
    { 
      year: '2024', 
      title: 'Higher Secondary (12th)', 
      subtitle: 'Advanced Sciences', 
      role: 'Student' 
    },
    { 
      year: '2022', 
      title: 'High School (10th)', 
      subtitle: 'Fundamentals & Sciences', 
      role: 'Student' 
    }
  ];

  return (
    <section id="education" style={{ margin: '8rem 0', position: 'relative' }}>
      <div className="container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem' }}
        >
          Education
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {educationData.map((edu, idx) => (
            <motion.div 
              key={idx}
              className="glass-panel"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}
            >
              {/* Massive background year watermark */}
              <div style={{ 
                position: 'absolute', 
                right: '0', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                fontSize: '12rem', 
                fontWeight: '900', 
                color: 'rgba(255,255,255,0.03)', 
                fontFamily: 'var(--font-heading)',
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 0
              }}>
                {edu.year.split(' ')[0]} 
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--accent-secondary)', fontFamily: 'var(--font-heading)', margin: '0 0 0.5rem 0' }}>{edu.title}</h3>
                <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', margin: '0 0 0.5rem 0', fontFamily: 'var(--font-mono)' }}>{edu.subtitle}</p>
              </div>
              
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'right' }}>
                <span style={{ 
                  display: 'inline-block',
                  background: 'var(--text-main)', 
                  color: '#000', 
                  padding: '0.5rem 1rem', 
                  fontWeight: '700',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase',
                  border: '1px solid var(--text-main)'
                }}>
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
