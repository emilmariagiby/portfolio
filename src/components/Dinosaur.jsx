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
          width: '64px',
          height: '70px',
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.15,
          ease: "linear"
        }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--accent-secondary)',
          WebkitMaskImage: 'url("/trex.svg")',
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskImage: 'url("/trex.svg")',
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
        }} />
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
