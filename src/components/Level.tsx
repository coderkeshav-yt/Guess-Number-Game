"use client";

import { useRouter } from "next/navigation";
import React, { useState, useContext } from "react";
import { AudioContext } from "@/app/layout";

const Level = () => {
  const router = useRouter();
  const { isMusicEnabled, toggleMusic } = useContext(AudioContext) || {};
  const [level, setLevel] = useState(3);

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLevel = parseInt(e.target.value, 10);
    console.log("Selected Level:", selectedLevel);
    setLevel(selectedLevel);
  };

  return (
    <div className="flex flex-col mt-4 gap-4">
      <div className="flex flex-col">
        <label htmlFor="level-select" className="text-sm text-zinc-300 mb-1">Difficulty:</label>
        <select
          id="level-select"
          title="levels"
          className="bg-zinc-800/50 rounded py-2 px-3 text-white"
          value={level}
          onChange={handleLevelChange}
        >
          <option value="3">Easy Peasy (3)</option>
          <option value="5">Umm Medium (5)</option>
          <option value="7">Damn Hard (7)</option>
        </select>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          id="music-toggle"
          checked={!!isMusicEnabled}
          onChange={toggleMusic}
          className="h-4 w-4 rounded border-zinc-600 bg-zinc-800 text-rose-500 focus:ring-rose-500"
        />
        <label htmlFor="music-toggle" className="text-sm text-zinc-300">
          Enable background music
        </label>
      </div>

      <button
        type="button"
        className="btn mt-4"
        onClick={() => {
          router.push(`/game/${level}`);
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default Level;
