'use client';

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  className?: string;
}

export default function TypeWriter({ text, className = '' }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, isPaused]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
} 