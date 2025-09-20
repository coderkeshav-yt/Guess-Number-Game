"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import type { Metadata } from "next";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import MusicBtn from "@/components/MusicBtn";

const inter = Inter({ subsets: ["latin"] });

type AudioContextType = {
  isMusicEnabled: boolean;
  toggleMusic: () => void;
};

export const AudioContext = createContext<AudioContextType>({
  isMusicEnabled: false,
  toggleMusic: () => {},
});

export function AudioProvider({ children }: { children: React.ReactNode }) {
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

  // Don't render children until we've loaded the saved preference
  if (!isMounted) {
    return null;
  }

  return (
    <AudioContext.Provider value={{ isMusicEnabled, toggleMusic }}>
      {children}
    </AudioContext.Provider>
  );
}

export const metadata: Metadata = {
  title: "Guess The Number 7️⃣",
  description: "A Simple Guessing Game made with Next.js",
  metadataBase: new URL("https://guess-d-num.netlify.app/"),
  openGraph: {
    type: "website",
    url: "https://guess-d-num.netlify.app/",
    title: "Guess The Number 7️⃣",
    description: "A Simple Guessing Game made with Next.js",
    images: [
      {
        url: "https://i.imgur.com/ZqVmpv2l.png",
        width: 1200,
        height: 630,
        alt: "Guess The Number 7️⃣",
      },
    ],
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AudioProvider>
          <MusicBtn />
          {children}
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}
