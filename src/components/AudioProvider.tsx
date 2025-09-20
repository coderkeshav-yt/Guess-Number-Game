'use client';

import { useState, useEffect, ReactNode, useContext } from 'react';
import { AudioContext } from '@/context/AudioContext';

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isMusicEnabled, setIsMusicEnabled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load saved preference from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPreference = localStorage.getItem('musicEnabled');
      if (savedPreference !== null) {
        setIsMusicEnabled(savedPreference === 'true');
      }
      setIsMounted(true);
    }
  }, []);

  // Save preference to localStorage when it changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('musicEnabled', String(isMusicEnabled));
    }
  }, [isMusicEnabled, isMounted]);

  const toggleMusic = () => {
    setIsMusicEnabled(prev => !prev);
  };

  // Create the context value
  const contextValue = {
    isMusicEnabled,
    toggleMusic,
  };

  // Don't render children until we've loaded the saved preference
  if (!isMounted) {
    return null;
  }

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  );
}

// Custom hook to use the audio context
export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}

export { AudioContext };
