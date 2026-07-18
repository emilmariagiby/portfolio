import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const colors = ['#10b981', '#f59e0b', '#8b5cf6', '#000000', '#10b981', '#8b5cf6'];

const GridBanner = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    // Generate a grid of blocks
    const cols = Math.floor(window.innerWidth / 40); // 40px blocks
    const rows = 4;
    const newBlocks = [];
    for (let i = 0; i < cols * rows; i++) {
      newBlocks.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2
      });
    }
    setBlocks(newBlocks);
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '160px', // 4 rows * 40px
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, 40px)`,
      gridAutoRows: '40px',
      overflow: 'hidden',
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      margin: '4rem 0'
    }}>
      {blocks.map((block, i) => (
        <motion.div
          key={block.id}
          initial={{ backgroundColor: '#000' }}
          animate={{ 
            backgroundColor: [
              '#000', 
              block.color, 
              '#000'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: block.delay,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
          style={{ width: '100%', height: '100%' }}
        />
      ))}
    </div>
  );
};

export default GridBanner;
