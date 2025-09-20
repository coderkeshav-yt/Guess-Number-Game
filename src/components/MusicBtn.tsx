"use client";

import Image from "next/image";
import { useEffect, useState, useContext, useCallback } from "react";
import triangle from "../../public/triangle-svgrepo-com.svg";
import square from "../../public/square-svgrepo-com.svg";
import { AudioContext } from "@/app/layout";

const MusicBtn = () => {
  const [playing, setPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const audioContext = useContext(AudioContext);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // Initialize audio element on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const audio = new Audio("/music sg.m4a");
    audio.loop = true;
    audio.volume = 0.5; // Set volume to 50%
    audio.preload = "auto";
    
    // Mute by default to allow autoplay in some browsers
    audio.muted = true;
    
    // Try to play to warm up the audio context
    const playPromise = audio.play().catch(() => {
      // Ignore initial play error
    });

    setAudioElement(audio);

    // Handle initial user interaction
    const handleFirstInteraction = () => {
      if (!hasUserInteracted) {
        setHasUserInteracted(true);
        if (audioContext?.isMusicEnabled) {
          audio.muted = false;
          audio.play().catch(console.error);
        }
      }
    };

    // Add event listeners for user interaction
    const events = ['click', 'keydown', 'touchstart'];
    events.forEach(event => {
      window.addEventListener(event, handleFirstInteraction, { once: true });
    });

    return () => {
      audio.pause();
      audio.remove();
      events.forEach(event => {
        window.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [hasUserInteracted, audioContext?.isMusicEnabled]);

  // Handle play/pause based on isMusicEnabled
  const handlePlayback = useCallback(async () => {
    if (!audioElement || !audioContext) return;

    try {
      if (audioContext.isMusicEnabled) {
        // If user hasn't interacted yet, we'll handle it on the next interaction
        if (!hasUserInteracted) {
          audioElement.muted = true;
          await audioElement.play().catch(() => {});
        } else {
          audioElement.muted = false;
          await audioElement.play();
        }
        setPlaying(true);
      } else {
        audioElement.pause();
        setPlaying(false);
      }
    } catch (error) {
      console.error("Error controlling audio:", error);
    }
  }, [audioElement, audioContext, hasUserInteracted]);

  useEffect(() => {
    handlePlayback();
  }, [handlePlayback]);

  if (!audioContext) return null;

  const handleClick = () => {
    // This click will help unlock audio in some browsers
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
    }
    audioContext.toggleMusic();
  };

  return (
    <div
      className="fixed top-6 right-4 md:right-12 bg-zinc-800 rounded-full flex items-center justify-center p-2 cursor-pointer hover:scale-105 transition-all active:scale-95 active:rotate-90 z-50"
      onClick={handleClick}
      title={playing ? "Disable music" : "Enable music"}
    >
      <Image 
        src={playing ? square : triangle} 
        alt={playing ? "Disable music" : "Enable music"} 
        width={24} 
        height={24} 
      />
    </div>
  );
};

export default MusicBtn;
