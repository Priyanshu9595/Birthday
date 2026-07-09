"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate a new heart more frequently to fill the background
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(), // ensure unique ID
        left: Math.random() * 100, // Random horizontal position 0-100%
        size: Math.random() * 1.5 + 0.5, // Random scale 0.5 - 2.0
        duration: Math.random() * 10 + 10, // Float duration 10s - 20s
        emoji: ["💕", "😘"][Math.floor(Math.random() * 2)],
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      // Remove hearts after 25s to prevent DOM clutter
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 25000);
      
    }, 600); // spawned every 0.6 seconds instead of 2 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 0, y: "100vh", x: `${heart.left}vw` }}
          animate={{ opacity: [0, 0.8, 0.8, 0], y: "-10vh" }}
          transition={{ duration: heart.duration, ease: "linear" }}
          className="absolute text-3xl md:text-5xl drop-shadow-md"
          style={{ transform: `scale(${heart.size})` }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
}
