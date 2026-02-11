  import React from 'react';
  import { motion } from 'framer-motion';

  const Wish = ({ name }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ padding: '4rem 0', textAlign: 'left' }}
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase" style={{ color: 'var(--text-secondary)' }}>
            Status: Completed
          </p>
          <h1 style={{ fontSize: '4rem', lineHeight: 1.1, margin: '1rem 0' }}>
            Happy<br />Birthday.
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', color: 'var(--text-secondary)' }}>
            Wishing <strong>{name}</strong> a year filled with success, growth, and memorable moments.
          </p>
        </motion.div>

        <motion.div 
          style={{ marginTop: '3rem', width: '50px', height: '2px', background: 'var(--text-primary)' }}
          initial={{ width: 0 }}
          animate={{ width: 50 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.div>
    );
  };

  export default Wish;