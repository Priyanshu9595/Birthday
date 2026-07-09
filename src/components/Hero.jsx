"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Every day with you is my favorite day. Happy Birthday, my cute Doraemon ❤️";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [text, fullText]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-romantic-dark to-[#2a0e21]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="mb-6 font-cursive text-6xl md:text-8xl text-primary-pink drop-shadow-[0_0_15px_rgba(255,79,129,0.5)]">
          Happy Birthday, Monika ❤️
        </h1>
        <div className="h-24">
          <p className="text-xl md:text-3xl font-sans text-rose font-light tracking-wide max-w-2xl mx-auto">
            {text}
            <span className={`inline-block w-1 h-8 bg-primary-pink ml-1 ${isTyping ? "animate-pulse" : "hidden"}`}></span>
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="mt-12 inline-block rounded-full border border-primary-pink/30 bg-primary-pink/10 px-8 py-3 text-sm tracking-widest text-lavender backdrop-blur-sm"
        >
          TODAY IS YOUR SPECIAL DAY
        </motion.div>
      </motion.div>
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-pink/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
