"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SparkleCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      if (Math.random() < 0.1) {
        const id = Date.now();
        setSparkles((prev) => [...prev.slice(-15), { id, x: e.clientX, y: e.clientY }]);
        
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0, y: sparkle.y, x: sparkle.x }}
            animate={{ opacity: 0, scale: 1, y: sparkle.y + 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute text-gold text-lg"
          >
            ✨
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
