'use client';

import { motion } from 'framer-motion';
const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = 'p',
  className,
  animation = defaultAnimations,
}) => {
  const textArray = Array.isArray(text) ? text : [text];

  return (
    <Wrapper className={className}>
      <span className='sr-only'>{textArray.join(' ')}</span>
      <motion.span
        initial='hidden'
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        whileInView='visible'
        viewport={{
          once: true,
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className='block' key={`${line}-${lineIndex}`}>
            {line.split(' ').map((word, wordIndex) => (
              <span className='inline-block' key={`${word}-${wordIndex}`}>
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className='inline-block'
                    variants={animation}
                    viewport={{
                      once: true,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className='inline-block'>&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
