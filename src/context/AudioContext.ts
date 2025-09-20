'use client';

import { createContext } from 'react';

type AudioContextType = {
  isMusicEnabled: boolean;
  toggleMusic: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export { AudioContext };
