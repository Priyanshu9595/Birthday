"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heartImages = [
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599113/WhatsApp_Image_2026-07-09_at_5.37.22_PM_h0u8is.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599111/WhatsApp_Image_2026-07-09_at_5.37.22_PM_1_mylqcs.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599110/WhatsApp_Image_2026-07-09_at_5.37.21_PM_1_t4hhs6.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599110/WhatsApp_Image_2026-07-09_at_5.37.21_PM_nactk0.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599109/WhatsApp_Image_2026-07-09_at_5.37.21_PM_2_dzainc.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599108/WhatsApp_Image_2026-07-09_at_5.37.21_PM_3_p8lxhh.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599107/WhatsApp_Image_2026-07-09_at_5.37.25_PM_edam0s.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599106/WhatsApp_Image_2026-07-09_at_5.37.24_PM_1_j68k2u.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599106/WhatsApp_Image_2026-07-09_at_5.37.24_PM_gfu34a.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599105/WhatsApp_Image_2026-07-09_at_5.37.23_PM_jbjzxh.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599105/WhatsApp_Image_2026-07-09_at_5.37.23_PM_1_btx90n.jpg"
];

export default function HeartSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heartImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-[#2a0e21] overflow-hidden flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-6xl font-cursive text-center text-primary-pink mb-16 drop-shadow-md">
        You Are In My Heart
      </h2>
      
      <div className="relative w-full max-w-[95vw] md:max-w-[650px] aspect-square flex justify-center items-center mx-auto">
        {/* Glow behind the heart */}
        <div className="absolute inset-0 bg-primary-pink/30 blur-3xl rounded-full scale-110"></div>
        
        {/* The Heart Container */}
        <div 
          className="relative w-full h-full z-10 bg-white/10 backdrop-blur-md"
          style={{
            maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E")`,
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E")`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        >
          <AnimatePresence>
            <motion.img
              key={index}
              src={heartImages[index]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-contain p-8 md:p-16"
              alt="Heart Memory"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
