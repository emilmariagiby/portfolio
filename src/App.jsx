import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LuGithub as Github, LuLinkedin as Linkedin, LuMail as Mail } from 'react-icons/lu';
import './index.css';

import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import GridBanner from './components/GridBanner';
import Dinosaur from './components/Dinosaur';

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
        
        <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          
          {/* Translucent Background Name */}
          <div style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(8rem, 22vw, 22rem)',
            fontWeight: '900',
            color: 'rgba(255,255,255,0.08)',
            whiteSpace: 'nowrap',
            fontFamily: 'var(--font-heading)',
            pointerEvents: 'none',
            zIndex: 1,
            userSelect: 'none',
            lineHeight: 0.85,
            textAlign: 'center',
            letterSpacing: '-0.05em'
          }}>
            EMIL<br/>MARIA<br/>GIBY
          </div>

          <motion.div style={{ y: yText, zIndex: 10, marginTop: '-15vh', position: 'relative' }}>
            <motion.h3 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: 'var(--text-muted)', fontSize: '1.5rem', marginBottom: '0.2rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
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
                marginLeft: '-5px',
                fontFamily: 'var(--font-heading)'
              }}>
                EMIL MARIA
                <br />
                <span className="gradient-text" style={{ paddingRight: '20px' }}>GIBY.</span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '3rem' }}
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
          

        </section>

        <GridBanner />

        <section id="about" style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                WebkitTextStroke: '2px var(--accent-primary)',
                color: 'transparent',
                background: 'none',
                WebkitBackgroundClip: 'unset',
                backgroundClip: 'unset'
              }}
            >
              [ About Me ]
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '4rem' }}>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#fff', lineHeight: '1.3', borderLeft: '10px solid var(--accent-primary)', paddingLeft: '2rem', margin: 0, fontFamily: 'var(--font-heading)' }}
              >
                I'm a full-stack developer who likes owning things end to end, from the access-control logic nobody sees to the interface someone actually clicks on.
              </motion.h3>

              <div className="grid-cols-2">
                <motion.div
                  className="glass-panel"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                    I've built systems that keep company data isolated across multiple organizations, a credit-scoring engine that explains itself instead of acting like a black box, and a few things I built purely because I was curious if I could.
                  </p>
                </motion.div>

                <motion.div
                  className="glass-panel"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  style={{ background: 'var(--accent-secondary)', borderColor: 'var(--accent-secondary)' }}
                >
                  <p style={{ color: '#000', fontSize: '1.1rem', lineHeight: '1.8', margin: 0, fontWeight: '600' }}>
                    "I build systems that are supposed to break, and then make sure they don't. Access control, credit-risk models, AI safety layers, real-time detection—different problems, same habit of finding the edge case before it finds a user."
                  </p>
                </motion.div>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)', textAlign: 'center', marginTop: '2rem', fontWeight: '700', textTransform: 'uppercase' }}
              >
                // I'm genuinely excited by problems where the stakes are real and the details actually matter—that's usually where I do my best work. //
              </motion.p>
            </div>
          </div>
        </section>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <Experience />
          
          <Education />
          
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

      <Dinosaur />
    </div>
  );
}

export default App;
