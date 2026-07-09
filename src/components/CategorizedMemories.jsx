"use client";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Movie Dates 🍿",
    items: [
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599110/WhatsApp_Image_2026-07-09_at_5.37.21_PM_nactk0.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599107/WhatsApp_Image_2026-07-09_at_5.37.25_PM_edam0s.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599106/WhatsApp_Image_2026-07-09_at_5.37.24_PM_1_j68k2u.jpg" }
    ]
  },
  {
    title: "Zoo Adventures 🦁",
    items: [
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589899/WhatsApp_Image_2026-07-09_at_3.04.29_PM_n7u5qp.jpg" },
      { type: "video", src: "https://res.cloudinary.com/dhfyfbxiv/video/upload/v1783589855/WhatsApp_Video_2026-07-09_at_3.04.24_PM_1_vubozt.mp4" },
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599110/WhatsApp_Image_2026-07-09_at_5.37.21_PM_1_t4hhs6.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599106/WhatsApp_Image_2026-07-09_at_5.37.24_PM_gfu34a.jpg" }
    ]
  },
  {
    title: "Temple Visits 🛕",
    items: [
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589897/WhatsApp_Image_2026-07-09_at_3.04.28_PM_2_lfm7k9.jpg" }
    ]
  },
  {
    title: "Our Restaurants 🍽️",
    items: [
      { type: "video", src: "https://res.cloudinary.com/dhfyfbxiv/video/upload/v1783589854/WhatsApp_Video_2026-07-09_at_3.04.03_PM_dzfrpo.mp4" },
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599111/WhatsApp_Image_2026-07-09_at_5.37.22_PM_1_mylqcs.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599108/WhatsApp_Image_2026-07-09_at_5.37.21_PM_3_p8lxhh.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599105/WhatsApp_Image_2026-07-09_at_5.37.23_PM_jbjzxh.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599105/WhatsApp_Image_2026-07-09_at_5.37.23_PM_1_btx90n.jpg" }
    ]
  },
  {
    title: "Park Memories 🌳",
    items: [
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599109/WhatsApp_Image_2026-07-09_at_5.37.21_PM_2_dzainc.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783599113/WhatsApp_Image_2026-07-09_at_5.37.22_PM_h0u8is.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589900/WhatsApp_Image_2026-07-09_at_3.04.27_PM_1_lhsxxs.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589899/WhatsApp_Image_2026-07-09_at_3.04.29_PM_1_w6llbh.jpg" },
      { type: "video", src: "https://res.cloudinary.com/dhfyfbxiv/video/upload/v1783589854/WhatsApp_Video_2026-07-09_at_3.04.24_PM_zcad0r.mp4" }
    ]
  },
  {
    title: "My Doraemon ❤️",
    items: [
      { type: "image", src: "https://res.cloudinary.com/dhfyfbxiv/image/upload/v1783589896/WhatsApp_Image_2026-07-09_at_3.04.27_PM_2_fnywhz.jpg" }
    ]
  }
];

export default function CategorizedMemories() {
  return (
    <section className="py-24 px-6 bg-romantic-dark">
      <div className="max-w-6xl mx-auto space-y-32">
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-cursive text-center text-primary-pink mb-12 drop-shadow-sm"
            >
              {category.title}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
              {category.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: itemIdx * 0.1 }}
                  className="w-full max-w-sm group relative"
                >
                  <div className="relative aspect-[3/4] bg-white p-3 pb-16 rounded-sm shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-2 group-hover:shadow-[0_20px_50px_rgba(255,79,129,0.3)]">
                    <div className="w-full h-full relative overflow-hidden bg-gray-100 rounded-sm">
                      {item.type === "image" ? (
                        <img 
                          src={item.src} 
                          alt={`${category.title} memory`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        <video 
                          src={item.src} 
                          controls
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    {/* Polaroid tape effect */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-md rotate-[-3deg] shadow-sm z-10" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
