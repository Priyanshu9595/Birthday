"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Every day with you is my favorite day. Happy Birthday, my cute Doraemon ❤️";
  const [isTyping, setIsTyping] = useState(true);
  
  const [timeLeft, setTimeLeft] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

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

  useEffect(() => {
    setIsMounted(true);
    
    // Target date: July 12th
    const targetDate = new Date(`${new Date().getFullYear()}-07-12T00:00:00`);
    
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
          minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
          seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0')
        });
      } else {
        setTimeLeft(null);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-romantic-dark to-[#2a0e21]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 w-full"
      >
        <h1 className="mb-6 font-cursive text-6xl md:text-8xl text-primary-pink drop-shadow-[0_0_15px_rgba(255,79,129,0.5)]">
          Happy Birthday, Monika ❤️
        </h1>
        <div className="h-24 px-4">
          <p className="text-xl md:text-3xl font-sans text-rose font-light tracking-wide max-w-2xl mx-auto">
            {text}
            <span className={`inline-block w-1 h-8 bg-primary-pink ml-1 ${isTyping ? "animate-pulse" : "hidden"}`}></span>
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="mt-12 mx-auto inline-block rounded-3xl border border-primary-pink/30 bg-primary-pink/10 px-6 md:px-10 py-6 backdrop-blur-sm"
        >
          {isMounted ? (
            timeLeft ? (
              <div className="flex flex-col items-center gap-4">
                <span className="text-sm tracking-widest text-lavender uppercase mb-2">Countdown to 12th July</span>
                <div className="flex gap-3 md:gap-8 text-white font-serif">
                  <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-6xl text-primary-pink">{timeLeft.days}</span>
                    <span className="text-xs text-rose mt-2 tracking-widest uppercase">Days</span>
                  </div>
                  <span className="text-4xl md:text-6xl text-primary-pink/50 animate-pulse">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-6xl text-primary-pink">{timeLeft.hours}</span>
                    <span className="text-xs text-rose mt-2 tracking-widest uppercase">Hours</span>
                  </div>
                  <span className="text-4xl md:text-6xl text-primary-pink/50 animate-pulse">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-6xl text-primary-pink">{timeLeft.minutes}</span>
                    <span className="text-xs text-rose mt-2 tracking-widest uppercase">Mins</span>
                  </div>
                  <span className="text-4xl md:text-6xl text-primary-pink/50 animate-pulse">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-6xl text-primary-pink">{timeLeft.seconds}</span>
                    <span className="text-xs text-rose mt-2 tracking-widest uppercase">Secs</span>
                  </div>
                </div>
              </div>
            ) : (
               <div className="text-xl md:text-3xl font-cursive tracking-widest text-primary-pink px-4 py-2">
                 TODAY IS YOUR SPECIAL DAY! 🎈
               </div>
            )
          ) : (
             <div className="h-[120px] flex items-center justify-center">
               <span className="text-sm text-lavender animate-pulse">Calculating time...</span>
             </div>
          )}
        </motion.div>
      </motion.div>
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-pink/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
