'use client';

import { motion } from 'framer-motion';

export const TextFadeIn = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 10,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial='hidden'
      transition={{
        delay: 3.5,
        duration: 0.5,
      }}
      whileInView='visible'
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};
