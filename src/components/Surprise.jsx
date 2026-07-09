"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Gift, X } from "lucide-react";

export default function Surprise() {
  const [isOpen, setIsOpen] = useState(false);

  const triggerSurprise = () => {
    setIsOpen(true);
    
    // Confetti explosion
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF4F81', '#E6E6FA', '#FFD700']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF4F81', '#E6E6FA', '#FFD700']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="py-32 px-6 bg-romantic-dark flex justify-center items-center relative overflow-hidden">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={triggerSurprise}
        className="group relative px-8 py-4 bg-gradient-to-r from-primary-pink to-[#ff759f] rounded-full text-white text-xl font-bold shadow-[0_0_30px_rgba(255,79,129,0.6)] flex items-center gap-3 overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        <Gift className="animate-bounce" />
        Click for Your Surprise
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589899/WhatsApp_Image_2026-07-09_at_3.04.29_PM_1_w6llbh.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
            
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative bg-white/10 backdrop-blur-xl border border-primary-pink/40 p-8 md:p-12 rounded-3xl max-w-2xl w-full text-center shadow-[0_0_50px_rgba(255,79,129,0.3)] z-10"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <h2 className="text-4xl md:text-6xl font-cursive text-primary-pink mb-6 drop-shadow-lg">
                Happy Birthday, Monika ❤️
              </h2>
              <p className="text-xl md:text-2xl text-rose leading-relaxed font-light">
                Thank you for making my life brighter every single day. Every memory with you is a treasure, and I can't wait to create countless more together. I hope this year brings my cute Doraemon all the happiness you deserve. I love you today, tomorrow, and always. 💖
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
