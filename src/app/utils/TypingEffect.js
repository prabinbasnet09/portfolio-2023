'use client';
import { useState, useEffect, useRef } from 'react';

const TypingEffect = ({ content = '', speed = 100 }) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [index, setIndex] = useState(0);
  const typingRef = useRef(null);

  // Intersection Observer callback
  const handleIntersection = entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      // Start the animation when the component is in the viewport
      startAnimation();
    }
  };

  const startAnimation = () => {
    const animationInterval = setInterval(() => {
      setIndex(prevIndex => {
        if (prevIndex >= content.length - 1) {
          clearInterval(animationInterval);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, speed);
  };

  useEffect(() => {
    // Initialize Intersection Observer
    const observer = new IntersectionObserver(handleIntersection);
    if (typingRef.current) {
      observer.observe(typingRef.current);
    }

    return () => {
      if (typingRef.current) {
        observer.unobserve(typingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setDisplayedContent(content.substring(0, index));
  }, [index, content]);

  return (
    <div ref={typingRef} className='type-writer-container'>
      <pre className='type-writer'>{displayedContent}</pre>
    </div>
  );
};

export default TypingEffect;
