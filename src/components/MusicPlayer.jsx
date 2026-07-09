"use client";
import { useState, useRef, useEffect } from "react";
import { Music, Pause } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("https://res.cloudinary.com/dhfyfbxiv/video/upload/v1783590483/Khat_Navjot_Ahuja___Hindi-Downringtone.com_aezz8g.mp3");
    audioRef.current.loop = true;
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed: ", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-pink text-white shadow-lg shadow-primary-pink/50 backdrop-blur-md"
    >
      {isPlaying ? <Pause size={24} /> : <Music size={24} />}
    </motion.button>
  );
}
