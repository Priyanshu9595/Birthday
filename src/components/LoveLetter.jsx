"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function LoveLetter() {
  return (
    <section className="py-24 px-6 bg-romantic-dark flex justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-2xl w-full bg-white/5 backdrop-blur-md border border-primary-pink/20 p-8 md:p-12 rounded-3xl relative shadow-[0_0_30px_rgba(255,79,129,0.1)]"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-romantic-dark p-4 rounded-full border border-primary-pink/30 text-primary-pink">
          <Mail size={32} />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-cursive text-primary-pink mb-8 text-center mt-6">
          My Dearest Monika...
        </h2>
        
        <div className="space-y-6 text-rose text-lg leading-relaxed font-light font-sans text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            From the moment you walked into my life, everything changed. You brought color to my world, laughter to my days, and peace to my heart.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            I love the way you smile, the way you laugh, and the beautiful soul you have. Today is all about you, and I want to remind you how deeply and endlessly you are loved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.5, duration: 1 }}
            className="text-xl text-primary-pink font-cursive mt-8"
          >
            Forever yours, ❤️
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
