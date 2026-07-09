"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const photos = [
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589899/WhatsApp_Image_2026-07-09_at_3.04.29_PM_1_w6llbh.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589900/WhatsApp_Image_2026-07-09_at_3.04.27_PM_holjhn.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589900/WhatsApp_Image_2026-07-09_at_3.04.27_PM_1_lhsxxs.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589899/WhatsApp_Image_2026-07-09_at_3.04.29_PM_n7u5qp.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589898/WhatsApp_Image_2026-07-09_at_3.04.28_PM_ghwdxq.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589898/WhatsApp_Image_2026-07-09_at_3.04.28_PM_3_vfj7sn.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589897/WhatsApp_Image_2026-07-09_at_3.04.28_PM_2_lfm7k9.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589896/WhatsApp_Image_2026-07-09_at_3.04.27_PM_2_fnywhz.jpg",
  "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589897/WhatsApp_Image_2026-07-09_at_3.04.28_PM_1_nv9ioo.jpg",
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="py-24 px-6 bg-romantic-dark overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-cursive text-center text-primary-pink mb-16">
        Our Favorite Moments
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {photos.map((src, idx) => (
          <motion.div
            key={idx}
            layoutId={`photo-${idx}`}
            onClick={() => setSelectedId(idx)}
            whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="cursor-pointer bg-white p-4 pb-12 shadow-xl rounded-sm transform rotate-[-2deg] odd:rotate-[2deg]"
          >
            <div className="aspect-square overflow-hidden bg-gray-200">
              <img src={src} alt="Memory" className="w-full h-full object-cover" />
            </div>
            <p className="font-cursive text-center mt-4 text-xl text-gray-800">Memory {idx + 1}</p>
          </motion.div>
        ))}
      </div>

      {selectedId !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedId(null)}
        >
          <motion.div
            layoutId={`photo-${selectedId}`}
            className="bg-white p-4 pb-16 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={photos[selectedId]} alt="Memory Full" className="w-full max-h-[80vh] object-contain" />
            <p className="font-cursive text-center mt-6 text-3xl text-gray-800">So precious...</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
