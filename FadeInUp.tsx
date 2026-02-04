import React, { useState, useEffect, useRef } from 'react';

interface FadeInUpProps {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FadeInUp: React.FC<FadeInUpProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ ...style, animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default FadeInUp;