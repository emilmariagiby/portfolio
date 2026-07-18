import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LuGithub as Github, LuLinkedin as Linkedin, LuMail as Mail } from 'react-icons/lu';
import './index.css';

import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import GridBanner from './components/GridBanner';

// Custom Cursor Component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference'
      }}
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    />
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="app-container" style={{ cursor: 'none' }}>
      <CustomCursor />
      
      <main className="container" style={{ position: 'relative', overflowX: 'hidden' }}>
        
        {/* HERO SECTION */}
        <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
          
          <motion.div style={{ y: yText, zIndex: 10 }}>
            <motion.h3 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: 'var(--text-muted)', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              [ Engineer // Developer ]
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ 
                fontSize: 'clamp(4rem, 10vw, 9rem)', 
                lineHeight: '0.9',
                letterSpacing: '-0.04em',
                marginBottom: '1rem',
                color: '#fff',
                marginLeft: '-5px'
              }}>
                EMIL MARIA
                <br />
                <span className="gradient-text" style={{ paddingRight: '20px' }}>GIBY.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ color: '#888', fontSize: '1.4rem', maxWidth: '600px', margin: '2rem 0', lineHeight: '1.6' }}
            >
              I build intelligent, scalable systems. Specializing in AI Engineering, Full-Stack Development, and high-performance Web Architectures.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
            >
              <a href="mailto:emilmariagiby@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                <Mail size={24} /> Contact Me
              </a>
              <a href="https://github.com/emilmariagiby" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem', borderRadius: '50%' }}>
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/emil-maria-giby/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem', borderRadius: '50%' }}>
                <Linkedin size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Decorative huge text in background */}
          <motion.div 
            style={{ 
              position: 'absolute', 
              top: '10%', 
              right: '-10%', 
              fontSize: '25vw', 
              color: 'rgba(255,255,255,0.02)', 
              fontWeight: 900,
              zIndex: 1,
              pointerEvents: 'none',
              userSelect: 'none'
            }}
            animate={{ x: [100, 0, 100] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            AI
          </motion.div>
        </section>

        <GridBanner />

        <div style={{ position: 'relative', zIndex: 10 }}>
          <Experience />
          
          <GridBanner />
          
          <Projects />
          
          <GridBanner />
          
          <Skills />
          <Achievements />
        </div>

      </main>

      <footer style={{ 
        padding: '4rem 0', 
        textAlign: 'center', 
        color: 'var(--text-muted)', 
        borderTop: '1px solid rgba(255,255,255,0.1)',
        marginTop: '4rem',
        fontSize: '0.9rem',
        fontFamily: 'var(--font-mono)'
      }}>
        <p>© 2026 Emil Maria Giby // Engineered with React & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
