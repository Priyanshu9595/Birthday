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
    <section className="py-24 px-6 bg-white overflow-hidden flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-6xl font-cursive text-center text-primary-pink mb-16 drop-shadow-md">
        You Are In My Heart
      </h2>
      
      <div className="relative w-full max-w-md md:max-w-lg aspect-[3/4] flex justify-center items-center mx-auto rounded-2xl shadow-[0_0_40px_rgba(255,79,129,0.3)] bg-white/60 overflow-hidden border-2 border-primary-pink/30">
        <AnimatePresence>
          <motion.img
            key={index}
            src={heartImages[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-contain"
            alt="Beautiful Memory"
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
