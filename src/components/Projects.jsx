import React from 'react';
import { motion } from 'framer-motion';
import { LuGithub as Github, LuExternalLink as ExternalLink, LuCode as Code2 } from 'react-icons/lu';

const projectData = [
  {
    title: 'FinTwin AI',
    subtitle: 'Autonomous MSME Credit Intelligence Platform',
    tech: ['Python', 'FastAPI', 'XGBoost', 'Groq LLM', 'React'],
    description: 'Autonomous MSME credit platform evaluating "New-to-Credit" businesses. Built an XGBoost risk-scoring engine with SHAP explainability. Integrated Groq Llama-3.1 LLM with FAISS-based RAG to auto-generate underwriting reports.',
    github: 'https://github.com/user-houseplant/IDBI',
  },
  {
    title: 'Splunk Co>Dev',
    subtitle: 'AI Engineering Copilot for Splunk',
    tech: ['React', 'Node.js', 'Groq', 'Splunk'],
    description: 'AI-powered developer copilot for Splunk to debug search queries and deploy dashboards via plain English. Engineered a deterministic safety layer to block dangerous queries with zero-latency enforcement.',
    github: 'https://github.com/emilmariagiby/splunk-co-dev',
  },
  {
    title: 'Bloom Branding Platform',
    subtitle: 'GOOGLE Winter of Code (GWOC) 2026, 1st PLACE',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'GSAP'],
    description: 'Portfolio management platform enabling agencies to manage branding projects and digital assets. Built responsive animated interfaces using React, GSAP, and Framer Motion.',
    github: 'https://github.com/DevangiSingh98/Bloom-Branding---Team-DEAN-GWOC-26',
    demo: 'https://bloom-branding-3bdab.web.app/'
  },
  {
    title: 'Smart Parking Detection System',
    subtitle: 'SPECTRA SCIENCE EXPO 2023, 1st PLACE',
    tech: ['Python', 'YOLO', 'OpenCV'],
    description: 'Real-time occupancy detection system processing 500+ video frames with YOLO-based vehicle detection. Optimized inference pipeline with OpenCV.',
    github: 'https://github.com/emilmariagiby/parking-spot-detection',
  },
  {
    title: 'Multilingual Sign & Speech-to-Text',
    subtitle: 'AI Project',
    tech: ['Python', 'OpenAI Whisper', 'Deep Learning', 'PyTorch'],
    description: 'Fine-tuned Whisper for multilingual speech recognition. Trained a custom CNN-based sign language recognition model using PyTorch and OpenCV. Built an end-to-end inference pipeline.',
    github: 'https://github.com/price-2006/aiproject',
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <motion.h2 
        className="section-title gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid-cols-2">
        {projectData.map((project, index) => (
          <motion.div 
            key={index}
            className="glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--accent-bg)', borderRadius: '10px', color: 'var(--accent-primary)' }}>
                <Code2 size={24} />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                    <Github size={20} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-secondary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--accent-tertiary)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '500' }}>{project.subtitle}</p>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>
              {project.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{ 
                  fontSize: '0.8rem', 
                  padding: '0.3rem 0.8rem', 
                  background: '#000', 
                  borderRadius: '0',
                  color: 'var(--text-main)',
                  border: '1px solid var(--accent-secondary)',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
