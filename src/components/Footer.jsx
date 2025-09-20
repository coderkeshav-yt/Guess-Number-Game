'use client';

import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  // Auto-hide after 5 seconds if not hovered
  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  if (!isVisible) return null;

  return (
    <footer 
      className="fixed bottom-4 right-4 z-30"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsVisible(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div className="relative group">
        {/* Main container */}
        <div 
          className="relative px-4 py-2 bg-neutral-900/90 backdrop-blur-sm rounded-lg border border-neutral-800 
                   transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rose-500/10
                   hover:border-rose-500/30"
          style={{
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          }}
        >
          <div className="flex items-center gap-2">
            <span 
              className="text-rose-500 text-lg transition-transform duration-300"
              style={{
                transform: isHovered ? 'scale(1.2) rotate(12deg)' : 'scale(1) rotate(0deg)',
                display: 'inline-block',
              }}
            >
              ❤️
            </span>
            <p className="text-sm font-medium text-neutral-300">
              Crafted by <span className="text-rose-400">keshav singh</span>
            </p>
          </div>
          
          {/* Animated underline */}
          <div 
            className="absolute -bottom-px left-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent"
            style={{
              transform: 'translateX(-50%)',
            }}
          >
            <div 
              className="absolute bottom-0 left-0 h-full bg-gradient-to-r from-rose-400 to-pink-400 transition-all duration-300"
              style={{
                width: isHovered ? '100%' : '0%',
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  