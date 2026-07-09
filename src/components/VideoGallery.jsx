"use client";
import { motion } from "framer-motion";

const videos = [
  "https://res.cloudinary.com/dhfyfbxiv/video/upload/v1783589855/WhatsApp_Video_2026-07-09_at_3.04.24_PM_1_vubozt.mp4",
  "https://res.cloudinary.com/dhfyfbxiv/video/upload/v1783589854/WhatsApp_Video_2026-07-09_at_3.04.24_PM_zcad0r.mp4",
  "https://res.cloudinary.com/dhfyfbxiv/video/upload/v1783589854/WhatsApp_Video_2026-07-09_at_3.04.03_PM_dzfrpo.mp4",
  "https://res.cloudinary.com/dhfyfbxiv/video/upload/v1783589855/WhatsApp_Video_2026-07-09_at_3.04.06_PM_x5txfk.mp4",
];

export default function VideoGallery() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-romantic-dark to-[#2a0e21] overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-cursive text-center text-primary-pink mb-16">
        Moments in Motion
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {videos.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white/5 p-4 pb-6 rounded-3xl shadow-[0_0_30px_rgba(255,79,129,0.1)] border border-primary-pink/20 backdrop-blur-md"
          >
            <div className="aspect-[9/16] w-full max-w-[320px] mx-auto overflow-hidden rounded-2xl bg-black flex items-center justify-center">
              <video 
                src={src} 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-cursive text-center mt-6 text-3xl text-rose tracking-wider drop-shadow-md">
              Special Moment {idx + 1}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
