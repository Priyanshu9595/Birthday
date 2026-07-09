"use client";
import { motion } from "framer-motion";
import { MessageCircleHeart, Coffee, Sparkles, Heart } from "lucide-react";

const events = [
  { icon: MessageCircleHeart, title: "First Conversation", desc: "The day everything changed.", date: "28 Dec 2022" },
  { icon: Coffee, title: "First Date", desc: "Nervous smiles and endless talking.", date: "A night to remember" },
  { icon: Sparkles, title: "Best Memories", desc: "Every trip, every laugh, every moment.", date: "Always" },
  { icon: Heart, title: "Today", desc: "Celebrating the most amazing person.", date: "Happy Birthday!" },
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-romantic-dark to-[#FFE4E8] overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-cursive text-center text-primary-pink mb-16">
        Our Story
      </h2>
      <div className="max-w-3xl mx-auto relative px-4 md:px-0">
        {/* Vertical line */}
        <div className="absolute left-10 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-pink/20" />
        
        {events.map((event, idx) => {
          const Icon = event.icon;
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center mb-16 justify-between flex-row"
            >
              {/* Left Side (Desktop Only) */}
              <div className={`hidden md:block w-5/12 text-right pr-8 ${!isLeft ? "opacity-0" : ""}`}>
                {isLeft && (
                  <>
                    <span className="text-gold font-bold tracking-wider text-sm">{event.date}</span>
                    <h3 className="text-2xl font-serif text-[#4A0E4E] mt-2">{event.title}</h3>
                    <p className="text-[#6B4E71] mt-2">{event.desc}</p>
                  </>
                )}
              </div>
              
              {/* Icon */}
              <div className="absolute left-10 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-primary-pink rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,79,129,0.5)]">
                <Icon size={20} className="text-primary-pink" />
              </div>
              
              {/* Right Side (Mobile & Desktop) */}
              <div className={`w-full pl-20 md:w-5/12 md:pl-8 text-left ${isLeft ? "md:opacity-0" : ""}`}>
                <div className={isLeft ? "block md:hidden" : "block"}>
                  <span className="text-gold font-bold tracking-wider text-sm">{event.date}</span>
                  <h3 className="text-2xl font-serif text-[#4A0E4E] mt-2">{event.title}</h3>
                  <p className="text-[#6B4E71] mt-2">{event.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
