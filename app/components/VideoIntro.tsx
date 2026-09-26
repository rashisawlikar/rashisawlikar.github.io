"use client";

import { useRef, useState } from "react";

export default function VideoIntro(): React.JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayback = (event: React.MouseEvent<HTMLVideoElement>) => {
    if (event.target !== event.currentTarget || !videoRef.current) return;

    if (videoRef.current.paused) {
      void videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMute = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const nextMuted = !isMuted;
    if (videoRef.current) videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="relative z-10 max-h-[560px] w-full cursor-pointer bg-[#432d3b] object-contain brightness-110 contrast-110"
        controls
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        poster="/profile.JPG"
        onClick={togglePlayback}
        aria-label="Video introduction of Rashi Rahul Sawlikar"
      >
        <source src="/rashi-introduction.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button type="button" onClick={toggleMute} aria-pressed={!isMuted} className="absolute right-3 top-3 z-20 rounded-full bg-[#fffaf7]/95 px-3 py-2 text-xs font-semibold text-[#432d3b] shadow-lg transition-colors hover:bg-white">
        {isMuted ? "Sound on" : "Mute"}
      </button>
    </div>
  );
}
