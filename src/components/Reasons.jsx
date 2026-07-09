"use client";
import { motion } from "framer-motion";

const reasons = [
  { text: "Your smile 😊" },
  { text: "Your kindness ❤️" },
  { text: "Your support 🌸" },
  { text: "The way you make me laugh 😂" },
  { text: "How you always know what to say" },
  { text: "Your beautiful eyes" },
  { text: "Your warm hugs" },
  { text: "Your passion for life" },
  { text: "The way you look at me" },
  { text: "Because you are simply you ✨" },
];

export default function Reasons() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#2a0e21] to-romantic-dark overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-cursive text-center text-primary-pink mb-16">
        Reasons I Love You
      </h2>
      
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white/80 backdrop-blur-md border border-primary-pink/30 p-6 rounded-2xl shadow-lg w-full max-w-[280px] text-center flex items-center justify-center min-h-[120px] cursor-pointer"
          >
            <p className="text-lg text-[#4A0E4E] font-medium">{reason.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
