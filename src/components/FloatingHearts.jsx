"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const id = Date.now();
      const left = Math.random() * 100;
      const size = Math.random() * 20 + 10;
      const duration = Math.random() * 5 + 10;

      setHearts((prev) => [...prev, { id, left, size, duration }]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, duration * 1000);
    };

    const interval = setInterval(createHeart, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 0, y: "100vh", x: `${heart.left}vw` }}
          animate={{ opacity: [0, 0.5, 0], y: "-10vh" }}
          transition={{ duration: heart.duration, ease: "linear" }}
          className="absolute text-primary-pink/30"
          style={{ width: heart.size, height: heart.size }}
        >
          <Heart fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
