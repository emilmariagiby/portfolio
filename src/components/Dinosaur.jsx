import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Dinosaur = () => {
  const { scrollYProgress } = useScroll();
  
  // As the user scrolls from top to bottom (0 to 1), 
  // the dinosaur moves from left (-10%) to right (110%)
  const xMovement = useTransform(scrollYProgress, [0, 1], ['-10vw', '110vw']);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: 0,
      width: '100%',
      height: '60px',
      pointerEvents: 'none', // so it doesn't block clicks
      zIndex: 100,
      overflow: 'hidden'
    }}>
      
      {/* Cacti / Desert elements in the background */}
      <div style={{ position: 'absolute', bottom: '0', left: '20%', width: '14px', height: '30px', background: 'rgba(6, 182, 212, 0.4)' }} />
      <div style={{ position: 'absolute', bottom: '0', left: '22%', width: '8px', height: '15px', background: 'rgba(6, 182, 212, 0.4)' }} />
      <div style={{ position: 'absolute', bottom: '0', left: '55%', width: '20px', height: '40px', background: 'rgba(6, 182, 212, 0.3)' }} />
      <div style={{ position: 'absolute', bottom: '0', left: '80%', width: '15px', height: '25px', background: 'rgba(6, 182, 212, 0.4)' }} />

      {/* The Running Dinosaur */}
      <motion.div 
        style={{ 
          x: xMovement,
          position: 'absolute',
          bottom: '2px',
          width: '44px',
          height: '47px',
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.15,
          ease: "linear"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 47" style={{ fill: 'var(--accent-secondary)' }}>
          <path d="M22 0h20v2h-2v2h2v10h-2v2h-2v2h-6v2h-2v2h-2v2h-2v2h-2v2h-2v2H6v2H4v2H2v2H0v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2V0h2zm18 4h-2v2h2V4zm0 2h-2v2h2V6zM8 41h4v2H8v-2zm8 0h4v2h-4v-2zm-6 2h2v4h-2v-4zm10 0h2v4h-2v-4z" />
          <path d="M26 12h2v2h-2z" fill="#000" />
        </svg>
      </motion.div>
      
      {/* Ground line */}
      <div style={{
        position: 'absolute',
        bottom: '0px',
        left: 0,
        width: '100%',
        height: '2px',
        background: 'var(--accent-secondary)',
        opacity: 0.5
      }} />
    </div>
  );
};

export default Dinosaur;
