import React from 'react';
import { motion } from 'framer-motion';
import { LuAward as Award, LuStar as Star } from 'react-icons/lu';

const achievements = [
  "1st Place — GOOGLE Winter of Code (GWOC 2026)",
  "SPDC Merit Scholarship — GOVERNMENT OF INDIA",
  "1st Place — SPECTRA Science Expo 2023",
  "Silver Honor — Class XII Academic Excellence",
  "Gold Honor — Class X Academic Excellence"
];

const leadership = [
  "Junior Developer — DSC SVNIT",
  "Media Team Executive — ACM SVNIT",
  "Member — Cinephilia Club",
  "Member — CONVEX Photography Club"
];

const Achievements = () => {
  return (
    <section id="achievements">
      <motion.h2 
        className="section-title gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Leadership
      </motion.h2>

      <div className="grid-cols-2">
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Award size={28} color="var(--accent-secondary)" />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', margin: 0 }}>Achievements</h3>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {achievements.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--accent-primary)', marginTop: '4px' }}>▹</span>
                <span style={{ lineHeight: '1.5' }}>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Star size={28} color="var(--accent-tertiary)" />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', margin: 0 }}>Leadership</h3>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {leadership.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--accent-primary)', marginTop: '4px' }}>▹</span>
                <span style={{ lineHeight: '1.5' }}>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
